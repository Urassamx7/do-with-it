import React from "react";
import { Platform, StyleSheet, Text, TextStyle } from "react-native";

const Apptext = ({
  text,
  style,
  ...rest
}: {
  text: string;
  style?: TextStyle;
}) => {
  return (
    <Text style={[styles.text, style]} {...rest}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: Platform.OS === "android" ? 18 : 20,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
export default Apptext;
