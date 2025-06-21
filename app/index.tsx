import { useDeviceOrientation } from "@react-native-community/hooks";
import { View } from "react-native";
import Card from "./components/card";
import image from "./assets/images/jacket.jpg";

export default function Index() {
  const orietantion = useDeviceOrientation();

  return (
    <View
      style={{
        backgroundColor: "#f8f4f4",
        padding: 20,
        paddingTop: 100,
      }}
    >
      <Card
        title="Black Jacket for sale!"
        subTitle="$100"
        image={{ uri: image }}
      />
    </View>
  );
}
