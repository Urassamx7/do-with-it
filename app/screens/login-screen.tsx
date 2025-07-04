import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import authApi from "../api/auth";
import { Screen } from "../components/screen";
import logo from "./assets/logo-red.png";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";
import useAuth from "../auth/use-auth";

interface UserCredentialsProps {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  const [isLoginFailed, setIsLoginFailed] = useState(false);
  const auth = useAuth();

  const handleSubmit = async ({ email, password }: UserCredentialsProps) => {
    const result = await authApi.login(email, password);
    if (!result.ok) return setIsLoginFailed(true);

    setIsLoginFailed(false);
    auth.logIn(result.data as string);
  };
  return (
    <Screen style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
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
        <ErrorMessage
          error="Invalid email or password"
          visible={isLoginFailed}
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
