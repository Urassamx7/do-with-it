import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Screen } from "../components/screen";
import logo from "./assets/logo-red.png";
import AppTextInput from "../components/app-text-input";
import AppButton from "../components/app-button";
import { Formik } from "formik";

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
              icon="email"
              placeholder="e-mail"
              onChangeText={handleChange("email")}
            />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="password"
              secureTextEntry
              placeholder="Password"
              icon="lock"
              onChangeText={handleChange("password")}
            />
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
