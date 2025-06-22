import React from "react";
import { View, StyleSheet, TextInputProps } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import defaultStyles from "../config/styles";

interface AppTextInputProps extends TextInputProps {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
}

const AppTextInput = ({ icon, ...rest }: AppTextInputProps) => {
  return (
    <View style={styles.container}>
      {!!icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.mediumGray}
          style={styles.icon}
        />
      )}
      <TextInput
        style={defaultStyles.text}
        placeholderTextColor={defaultStyles.colors.mediumGray}
        {...rest}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.lightGray,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    margin: 10,
  },
});
export default AppTextInput;
