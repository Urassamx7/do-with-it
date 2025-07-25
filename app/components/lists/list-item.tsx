import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { colors } from "../../config/colors";
import Apptext from "../text";

interface ListItemProps {
  title: string;
  subTitle?: string;
  image?: string;
  onPress?: () => void;
  renderRightActions?: () => React.ReactNode;
  IconComponent?: React.ReactNode;
}

const ListItem = ({
  image,
  subTitle,
  title,
  onPress,
  renderRightActions,
  IconComponent,
}: ListItemProps) => {
  return (
    <ReanimatedSwipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.lightGray} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {!!image && (
            <Image
              source={{
                uri: image,
              }}
              style={styles.image}
            />
          )}
          <View style={styles.detailsContainer}>
            <Apptext text={title} numberOfLines={1} style={styles.title} />

            {subTitle && (
              <Apptext
                text={subTitle}
                numberOfLines={2}
                style={styles.subTitle}
              />
            )}
          </View>
          <MaterialCommunityIcons
            color={colors.mediumGray}
            name="chevron-right"
            size={25}
          />
        </View>
      </TouchableHighlight>
    </ReanimatedSwipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
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
