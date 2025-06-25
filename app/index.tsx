import { useEffect, useState } from "react";

import * as ImagePicker from "expo-image-picker";
import { Screen } from "./components/screen";
import Button from "./components/button";
import { Image } from "react-native";
import ImageInput from "./components/image-input";

export default function Index() {
  const reqPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted)
      alert("You need to enable permissions to access the library.");
    console.log(granted);

    return granted;
  };
  const [imageUri, setImageUri] = useState<any>();
  useEffect(() => {
    reqPermission();
  }, []);

  const onSelectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) {
        setImageUri(result.assets[0].uri);
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  return (
    <Screen>
      <ImageInput imageUri={imageUri} onChangeImage={setImageUri} />
    </Screen>
  );
}
