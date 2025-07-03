import { useEffect, useState } from "react";
import OfflineNotice from "./components/offilne-notice";
import AppNavigator from "./navigation/app-navigator";
import AuthNavigator from "./navigation/auth-navigator";
import AuthContext, { UserProfile } from "./auth/auth-context";
import authStorage from "./auth/storage";
import { jwtDecode } from "jwt-decode";

export default function Index() {
  const [user, setUser] = useState<UserProfile | null>(null);

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (!token) return;
    setUser(jwtDecode(token));
  };
  useEffect(() => {
    restoreToken;
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      {user ? <AppNavigator /> : <AuthNavigator />}
    </AuthContext.Provider>
  );
}
