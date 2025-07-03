import OfflineNotice from "./components/offilne-notice";
import AppNavigator from "./navigation/app-navigator";
import AuthNavigator from "./navigation/auth-navigator";

export default function Index() {
  return (
    <>
      <OfflineNotice />
      <AuthNavigator />
    </>
  );
}
