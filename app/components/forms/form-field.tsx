import { useFormikContext } from "formik";
import React from "react";
import { TextInputProps } from "react-native";
import AppTextInput from "../text-input";
import ErrorMessage from "./error-message";
import { IconType } from "@/app/utils/types";

interface AppFormFieldProps extends TextInputProps {
  name: string;
  width?: any;
  icon?: IconType;
}

const AppFormField = ({
  icon,
  name,
  width,
  ...otherProps
}: AppFormFieldProps) => {
  const { handleBlur, handleChange, setFieldValue, touched, errors, values } =
    useFormikContext();
  return (
    <>
      <AppTextInput
        icon={icon}
        width={width}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        onBlur={handleBlur(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
