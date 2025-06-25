import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Apptext from "./text";

const PickerItem = ({
  item,
  onPress,
}: {
  onPress: () => void;
  item: {
    icon?: keyof typeof MaterialCommunityIcons.glyphMap;
    backgroundColor?: string;
    label: string;
    value: number;
  };
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Apptext text={item.label} style={styles.text} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  text: {
    padding: 15,
  },
});
export default PickerItem;
