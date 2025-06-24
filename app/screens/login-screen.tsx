import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import { Screen } from "../components/screen";
import logo from "./assets/logo-red.png";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

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

      <AppForm
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
          icon="email"
          placeholder="e-mail"
          name="email"
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          secureTextEntry
          placeholder="Password"
          icon="lock"
          name="password"
        />
        <SubmitButton title="login" />
      </AppForm>
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
