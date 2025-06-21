import React from "react";
import { ImageSourcePropType, View, StyleSheet, Image } from "react-native";
import Apptext from "./app-text";
import { colors } from "../config/colors";
interface ListItemProps {
  title: string;
  subTitle: string;
  image: string;
}

const ListItem = ({ image, subTitle, title }: ListItemProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <View>
        <Apptext text={title} style={styles.title} />
        <Apptext text={subTitle} style={styles.subTitle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
  },
});

export default ListItem;
