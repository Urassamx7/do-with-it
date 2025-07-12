import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Stack, useNavigationContainerRef } from "expo-router";
import { ThemeProvider } from "@react-navigation/native";
import myTheme from "./navigation/navigation-theme";
import { useReactNavigationDevTools } from "@dev-plugins/react-navigation";
import { navigationRef, RootStackParamList } from "./navigation/root-navigation";


export default function RootLayout() {
  const ref = useNavigationContainerRef();

  useReactNavigationDevTools(ref);

  navigationRef.current = ref.current;
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
