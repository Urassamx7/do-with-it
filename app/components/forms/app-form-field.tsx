import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFormikContext } from "formik";
import React from "react";
import { TextInputProps } from "react-native";
import AppTextInput from "../app-text-input";
import ErrorMessage from "./error-message";

interface AppFormFieldProps extends TextInputProps {
  name: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
}

const AppFormField = ({ icon, name, ...otherProps }: AppFormFieldProps) => {
  const { handleBlur, handleChange, touched, errors } = useFormikContext();
  return (
    <>
      <AppTextInput
        icon={icon}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
