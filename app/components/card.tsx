import React from "react";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import { colors } from "../config/colors";
import AppText from "./text";

interface CardProps {
  title: string;
  subTitle: string;
  image: ImageSourcePropType;
}
const Card = ({ image, subTitle, title }: CardProps) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image}></Image>
      <View style={styles.detailsContainer}>
        <AppText text={title} style={styles.title} />
        <AppText text={subTitle} style={styles.subTitle} />
      </View>
    </View>
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
