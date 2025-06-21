import React from "react";
import {
  ImageSourcePropType,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import Apptext from "./app-text";
import { colors } from "../config/colors";
interface ListItemProps {
  title: string;
  subTitle: string;
  image: string;
  onPress: () => void;
}

const ListItem = ({ image, subTitle, title, onPress }: ListItemProps) => {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
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
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
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
