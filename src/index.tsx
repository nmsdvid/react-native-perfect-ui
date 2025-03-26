import React, { useState } from "react";
import { View, Image, Platform } from "react-native";
import useWebSocket from "react-use-websocket";

interface Position {
    top: number;
    left: number;
}

interface WebSocketMessage {
    type: 'image' | 'opacity' | 'position' | 'visibility';
    data?: string;
    value?: number | boolean;
    top?: number;
    left?: number;
}

const WS_CONFIG = {
    IOS_URL: 'ws://127.0.0.1:9321',
    ANDROID_URL: 'ws://10.0.2.2:9321',
    RECONNECT_ATTEMPTS: 20,
    MAX_RECONNECT_DELAY: 10000,
    BACKOFF_MULTIPLIER: 1.5,
} as const;


const getWebSocketUrl = (): string => {
    return Platform.select({
        ios: WS_CONFIG.IOS_URL,
        android: WS_CONFIG.ANDROID_URL,
        default: WS_CONFIG.IOS_URL,
    });
};



export const PerfectUiOverlay: React.FC = () => {

    const [imageUri, setImageUri] = useState<string | null>(null);
    const [opacity, setOpacity] = useState(1);
    const [position, setPosition] = useState<Position>({ top: 0, left: 0 });
    const [visible, setVisible] = useState(true);


    const handleMessage = (event: MessageEvent) => {
        try {
            const message: WebSocketMessage = JSON.parse(event.data);
            console.log('Parsed message:', message);

            switch (message.type) {
                case "image":
                    message.data && setImageUri(message.data);
                    break;
                case "opacity":
                    typeof message.value === "number" && setOpacity(message.value);
                    break;
                case "position":
                    setPosition((prev) => ({
                        top: prev.top + (message.top ?? 0),
                        left: prev.left + (message.left ?? 0),
                    }));
                    break;
                case "visibility":
                    typeof message.value === "boolean" && setVisible(message.value);
                    break;
                default:
                    console.warn("Unknown message type:", message.type);
            }
        } catch (error) {
            console.error("WebSocket message parsing error:", error);
        }
    };

    useWebSocket(getWebSocketUrl(), {
        onMessage: handleMessage,
        shouldReconnect: () => true,
        reconnectAttempts: WS_CONFIG.RECONNECT_ATTEMPTS,
        retryOnError: true,
    });

    const containerStyle = {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    } as const;

    const imageStyle = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity,
        top: position.top,
        left: position.left,
    } as const;

    return (
        <View style={containerStyle} pointerEvents="none">
            {visible && imageUri && (
                <Image source={{ uri: imageUri }} style={imageStyle} />
            )}
        </View>
    );
};