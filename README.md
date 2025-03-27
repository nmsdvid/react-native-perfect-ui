# React Native Perfect UI

<div align="center">

[![npm version](https://img.shields.io/npm/v/react-native-perfect-ui.svg)](https://www.npmjs.com/package/react-native-perfect-ui)
[![license](https://img.shields.io/npm/l/react-native-perfect-ui.svg)](https://github.com/nmsdvid/react-native-perfect-ui/blob/main/LICENSE)

A React Native tool for creating pixel perfect UI components.

![React Native Perfect UI Demo](https://i.ibb.co/ccdq0YFn/react-native-perfect-ui-min.png)

[Documentation](https://github.com/nmsdvid/react-native-perfect-ui/wiki) • [Report Bug](https://github.com/nmsdvid/react-native-perfect-ui/issues) • [Request Feature](https://github.com/nmsdvid/react-native-perfect-ui/issues)

</div>

## Features

- 🎨 Instant Design / UI comparison
- 🖥️ Desktop client for better dev experience
- 🔧 Easy integration

## Installation

1. Install the React Native component:

```bash
npm install react-native-perfect-ui
```

2. Place the Overlay component in your app's layout file:

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
            {__DEV__ && <PerfectUiOverlay />}
        </ThemeProvider>
    );
}
```

3. Download Perfect UI's Desktop Client    
 [![Download Desktop Client](https://img.shields.io/badge/Download_Desktop_Client-0078D4?style=for-the-badge&logo=github&logoColor=white)](https://github.com/nmsdvid/react-native-perfect-ui-desktop)


## Contact

* 𝕏 [**Follow me on X**](https://x.com/_davidnemes)
