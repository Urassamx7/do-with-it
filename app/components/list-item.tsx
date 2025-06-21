import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import Apptext from "./app-text";
import { colors } from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";

interface ListItemProps {
  title: string;
  subTitle: string;
  image: string;
  onPress: () => void;
  renderRightActions?: React.ReactNode;
}

const ListItem = ({
  image,
  subTitle,
  title,
  onPress,
  renderRightActions,
}: ListItemProps) => {
  return (
    <Swipeable >
      <TouchableHighlight underlayColor={colors.lightGray} onPress={onPress}>
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
    </Swipeable>
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
    color: colors.mediumGray,
  },
});

export default ListItem;
