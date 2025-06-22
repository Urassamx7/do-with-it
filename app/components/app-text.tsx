import React from "react";
import { Text, TextStyle } from "react-native";
import defaultStyles from "../config/styles";

const Apptext = ({
  text,
  style,
  ...rest
}: {
  text: string;
  style?: TextStyle;
}) => {
  return (
    <Text style={[defaultStyles.text, style]} {...rest}>
      {text}
    </Text>
  );
};

export default Apptext;
