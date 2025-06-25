import { useFormikContext } from "formik";
import React from "react";
import AppPicker from "../app-picker";
import ErrorMessage from "./error-message";

interface AppFormPickerProps {
  items: {
    label: string;
    value: number;
  }[];
  name: string;
  placeholder: string;
  width?: any;
}

const AppFormPicker = ({
  items,
  name,
  placeholder,
  width,
}: AppFormPickerProps) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        selectedItem={values[name]}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
