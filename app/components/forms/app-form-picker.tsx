import { useFormikContext } from "formik";
import React from "react";
import AppPicker from "../app-picker";
import ErrorMessage from "./error-message";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface AppFormPickerProps {
  items: {
    label: string;
    value: number;
  }[];
  name: string;
  placeholder: string;
  width?: any;
  PickerItemComponent?: React.ComponentType<{
    item: {
      icon?: keyof typeof MaterialCommunityIcons.glyphMap;
      backgroundColor?: string;
      label: string;
      value: number;
    };
    onPress: () => void;
  }>;
  numberOfColumns: number;
}

const AppFormPicker = ({
  items,
  name,
  placeholder,
  width,
  PickerItemComponent,
  numberOfColumns = 1,
}: AppFormPickerProps) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        PickerItemComponent={PickerItemComponent}
        selectedItem={values[name]}
        onSelectItem={(item) => setFieldValue(name, item)}
        numberOfColumns={numberOfColumns}
        placeholder={placeholder}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
