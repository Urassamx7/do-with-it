import React from "react";
import { StyleSheet, Image } from "react-native";
import { Screen } from "../components/screen";
import logo from "./assets/logo-red.png";
import AppTextInput from "../components/app-text-input";
import AppButton from "../components/app-button";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../components/error-message";
import AppFormField from "../components/app-form-field";

/**
 * /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
 */

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  passwrod: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleSubmit, errors, touched }) => (
          <>
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
              icon="email"
              placeholder="e-mail"
              name="email"
            />

            <ErrorMessage error={errors.email} visible={touched.email!} />

            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="password"
              secureTextEntry
              placeholder="Password"
              icon="lock"
              name="password"
            />

            <ErrorMessage error={errors.password} visible={touched.password!} />
            <AppButton title="login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
