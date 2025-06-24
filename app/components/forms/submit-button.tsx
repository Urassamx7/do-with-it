import { useFormikContext } from "formik";
import React from "react";
import AppButton from "../app-button";
const SubmitButton = ({ title }: { title: string }) => {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} />;
};

export default SubmitButton;
