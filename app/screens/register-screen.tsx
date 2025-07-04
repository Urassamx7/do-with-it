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
import userApi from "../api/users";
import useApi from "../hooks/use-api";
import ActivityIndicator from "../components/activity-indicator";

interface UserCredentialsProps {
  name: string;
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  name: Yup.string().required().label("Name"),
  password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen = () => {
  const [error, setError] = useState<string | null>(null);
  const auth = useAuth();
  const registerApi = useApi(userApi.register);
  const loginApi = useApi(authApi.login);

  const handleSubmit = async ({
    email,
    name,
    password,
  }: UserCredentialsProps) => {
    const result = await registerApi.request({ email, name, password });

    if (!result?.ok) {
      if (result?.data) {
        const error = result.data.error;
        setError(String(error));
      } else {
        setError("An Unexpected error occurred.");
        console.log(result);
      }
      return;
    }
    const authToken = await loginApi.request(email, password);
    if (!authToken?.ok) return alert("Invalid Token ");
    auth.logIn(authToken.data!);
  };
  return (
    <>
      <ActivityIndicator
        visible={registerApi.isLoading || loginApi.isLoading}
      />
      <Screen style={styles.container}>
        <Image source={logo} style={styles.logo} />

        <AppForm
          initialValues={{ email: "", password: "", name: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
            icon="email"
            placeholder="Name"
            name="name"
          />

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
          <ErrorMessage error={error!} visible={!!error} />
          <SubmitButton title="login" />
        </AppForm>
      </Screen>
    </>
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

export default RegisterScreen;
