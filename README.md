# React Native Perfect UI

A React Native tool for creating perfect UI components.

### Usage

1. Install the React Native component

```bash
npm i react-native-perfect-ui
```

2. Place the Overlay component in your app's layout file.

```tsx
// app/_layout.tsx
import { PerfectUiOverlay } from "react-native-perfect-ui";

export default function RootLayout() {
    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
            <StatusBar style="auto" />
            {__DEV__ && <PerfectUiOverlay/>}
        </ThemeProvider>
    );
}
```

3. Download & Install Perfect UI's Desktop Client    
[Desktop Client](https://github.com/nmsdvid/react-native-perfect-ui-desktop)
