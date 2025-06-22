import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Apptext from "./app-text";

const PickerItem = ({
  label,
  onPress,
}: {
  label: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Apptext text={label} style={styles.text} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  text: {
    padding: 15,
  },
});
export default PickerItem;
