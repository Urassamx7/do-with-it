import { useDeviceOrientation } from "@react-native-community/hooks";
import { View } from "react-native";
import Card from "./components/card";
import image from "./assets/images/jacket.jpg";
import ListingDetailsScreen from "./screens/listing-details-screen";

export default function Index() {
  const orietantion = useDeviceOrientation();

  return <ListingDetailsScreen />;
}
