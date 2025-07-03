import { useState } from "react";
import OfflineNotice from "./components/offilne-notice";
import AppNavigator from "./navigation/app-navigator";
import AuthNavigator from "./navigation/auth-navigator";
import AuthContext, { UserProfile } from "./auth/auth-context";

export default function Index() {
  const [user, setUser] = useState<UserProfile | null>(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      {user ? <AppNavigator /> : <AuthNavigator />}
    </AuthContext.Provider>
  );
}
