import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "./icon-component";
import Apptext from "./text";
import { IconType } from "../utils/types";

interface CategoryPickerItemProps {
  item: {
    icon?: IconType;
    backgroundColor?: string;
    label: string;
    value: number;
  };
  onPress: () => void;
}

const CategoryPickerItem = ({ item, onPress }: CategoryPickerItemProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={80}
        />
      </TouchableOpacity>
      <Apptext text={item.label} style={styles.label} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default CategoryPickerItem;
