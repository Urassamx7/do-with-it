import React from "react";
import { View, StyleSheet, Image, ViewBase } from "react-native";
import ImageInput from "./image-input";

interface ImageInputListProps {
  onRemoveImage: (uri: string) => void;
  onAddImage: (uri: string) => void;
  imageUris: string[];
}

const ImageInputList = ({
  imageUris,
  onRemoveImage,
  onAddImage,
}: ImageInputListProps) => {
  console.log(imageUris);

  return (
    <View style={styles.container}>
      {imageUris.map((uri) => (
        <View style={styles.image} key={uri}>
          <ImageInput imageUri={uri} onChangeImage={() => onRemoveImage(uri)} />
        </View>
      ))}

      <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});

export default ImageInputList;
