import { useDeviceOrientation } from "@react-native-community/hooks";
import WelcomeScreen from "./screens/welcome-screen";
import ViewImageScreen from "./screens/view-image-screen";
import Button from "./components/button";

export default function Index() {
  const orietantion = useDeviceOrientation();

  return <Button title="login" onPress={() => console.log("Tapped")} />;
}
