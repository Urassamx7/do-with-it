import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { Image } from "react-native-expo-image-cache";
import { colors } from "../config/colors";
import AppText from "./text";

interface CardProps {
  title: string;
  subTitle: string;
  thumbnailUrl: string;
  imageUrl: string;
  onPress: () => void;
}
const Card = ({
  imageUrl,
  subTitle,
  title,
  thumbnailUrl,
  onPress,
}: CardProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          uri={imageUrl}
          tint="light"
          preview={{ uri: thumbnailUrl }}
          style={styles.image}
        />
        <View style={styles.detailsContainer}>
          <AppText text={title} style={styles.title} />
          <AppText text={subTitle} style={styles.subTitle} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
    objectFit: "cover",
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default Card;
