import { useEffect, useState } from "react";

import * as ImagePicker from "expo-image-picker";
import { Screen } from "./components/screen";
import Button from "./components/button";
import { Image } from "react-native";
import ImageInput from "./components/image-input";
import ImageInputList from "./components/image-input-list";

export default function Index() {
  const [imageUri, setImageUri] = useState<string[]>([]);

  const handleAddImage = (uri: string) => {
    setImageUri([...imageUri, uri]);
  };
  const handleRemoveImage = (uri: string) => {
    setImageUri(imageUri.filter((imageUri) => imageUri !== uri));
  };

  return (
    <Screen>
      <ImageInputList
        imageUris={imageUri}
        onAddImage={handleAddImage}
        onRemoveImage={handleRemoveImage}
      />
    </Screen>
  );
}
