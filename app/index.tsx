import { useDeviceOrientation } from "@react-native-community/hooks";
import WelcomeScreen from "./screens/welcome-screen";
import ViewImageScreen from "./screens/view-image-screen";


export default function Index() {
  const orietantion = useDeviceOrientation();

  return <ViewImageScreen />;
}
