import React from "react";
import * as Yup from "yup";
import { Formik, FormikHelpers, FormikValues } from "formik";

interface AppFormProps<T extends FormikValues> {
  initialValues: T;
  onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void | Promise<any>;
  validationSchema: Yup.ObjectSchema<any>;
  children: React.ReactNode;
}

const AppForm = <T extends FormikValues>({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: AppFormProps<T>) => {
  return (
    <Formik<T>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default AppForm;
