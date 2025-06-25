import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "./icon-component";
import Apptext from "./text";

interface CategoryPickerItemProps {
  item: {
    icon: keyof typeof MaterialCommunityIcons.glyphMap;
    backgroundColor: string;
    label: string;
    value: number;
  };
  onPress: () => void;
}

const CategoryPickerItem = ({ item, onPress }: CategoryPickerItemProps) => {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
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
