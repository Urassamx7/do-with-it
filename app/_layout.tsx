import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Stack } from "expo-router";
import { ThemeProvider } from "@react-navigation/native";
import myTheme from "./navigation/navigation-theme";

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <ThemeProvider value={myTheme}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
