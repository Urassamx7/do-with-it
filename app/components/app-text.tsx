import React from "react";
import { Text, TextProps, TextStyle } from "react-native";
import defaultStyles from "../config/styles";

interface AppTextProps extends TextProps {
  text: string;
  style?: TextStyle;
}

const Apptext = ({ text, style, ...rest }: AppTextProps) => {
  return (
    <Text style={[defaultStyles.text, style]} {...rest}>
      {text}
    </Text>
  );
};

export default Apptext;
