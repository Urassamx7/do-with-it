import { useEffect, useState } from "react";
import OfflineNotice from "./components/offilne-notice";
import AppNavigator from "./navigation/app-navigator";
import AuthNavigator from "./navigation/auth-navigator";
import AuthContext, { UserProfile } from "./auth/auth-context";
import authStorage from "./auth/storage";
import * as SplashScreen from "expo-splash-screen";
import {
  ThemeProvider,
  useNavigationContainerRef,
  useTheme,
} from "@react-navigation/native";
import myTheme from "./navigation/navigation-theme";

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const navigationRef = useNavigationContainerRef();

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        const user = await authStorage.getUser();
        if (user) {
          try {
            setUser(user);
          } catch (err) {
            console.warn("Token inválido", err);
            await authStorage.removeToken();
          }
        }
      } catch (error) {
        console.error("Erro ao restaurar token:", error);
      } finally {
        setIsReady(true);
        await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, []);

  if (!isReady) return null;

  const theme = useTheme();
  console.log(theme);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      {user ? <AppNavigator /> : <AuthNavigator />}
    </AuthContext.Provider>
  );
}
