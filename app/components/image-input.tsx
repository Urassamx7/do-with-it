import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { colors } from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const ImageInput = ({
  imageUri,
  onChangeImage,
}: {
  imageUri?: any;
  onChangeImage: React.Dispatch<any>;
}) => {
  const reqPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted)
      alert("You need to enable permissions to access the library.");
    console.log(granted);

    return granted;
  };
  const handlePress = () => {
    if (!imageUri) onSelectImage();
    else
      Alert.alert("Delete", "Are sure you want to delet this photo?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
  };

  const onSelectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.canceled) {
        onChangeImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  useEffect(() => {
    reqPermission();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={colors.mediumGray}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.lightGray,
    borderRadius: 15,
    height: 100,
    justifyContent: "center",
    overflow: "hidden",
    width: 100,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageInput;
