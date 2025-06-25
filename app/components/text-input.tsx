import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

import defaultStyles from "../config/styles";
import { IconType } from "../utils/types";

interface AppTextInputProps extends TextInputProps {
  icon?: IconType
  width?: any;
}

const AppTextInput = ({ icon, width = "100%", ...rest }: AppTextInputProps) => {
  return (
    <View
      style={[
        styles.container,
        {
          width,
        },
      ]}
    >
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
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    margin: 10,
  },
});
export default AppTextInput;
