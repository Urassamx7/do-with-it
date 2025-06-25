import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Apptext from "./text";
import { IconType } from "../utils/types";

const PickerItem = ({
  item,
  onPress,
}: {
  onPress: () => void;
  item: {
    icon?: IconType
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
