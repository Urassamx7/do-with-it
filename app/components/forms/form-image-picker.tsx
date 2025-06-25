import React from "react";
import { StyleSheet } from "react-native";
import ImageInputList from "../image-input-list";
import ErrorMessage from "./error-message";
import { useFormikContext } from "formik";

const FormImagePicker = ({ name }: { name: string }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  const imageUris = values[name];

  const handleAddImage = (uri: string) => {
    setFieldValue(name, [...imageUris, uri]);
  };
  const handleRemoveImage = (uri: string) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAddImage}
        onRemoveImage={handleRemoveImage}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormImagePicker;
