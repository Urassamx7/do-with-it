import React from "react";
import AppButton from "./app-button";
import { useFormikContext } from "formik";
const SubmitButton = ({ title }: { title: string }) => {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} />;
};

export default SubmitButton;
