import { useEffect, useState } from "react";
import OfflineNotice from "./components/offilne-notice";
import AppNavigator from "./navigation/app-navigator";
import AuthNavigator from "./navigation/auth-navigator";
import AuthContext, { UserProfile } from "./auth/auth-context";
import authStorage from "./auth/storage";
import { jwtDecode } from "jwt-decode";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        const token = await authStorage.getToken();
        if (token) {
          try {
            const decodedUser = jwtDecode<UserProfile>(token);
            setUser(decodedUser);
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

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      {user ? <AppNavigator /> : <AuthNavigator />}
    </AuthContext.Provider>
  );
}
