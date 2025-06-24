import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Screen } from "../components/screen";
import logo from "./assets/logo-red.png";
import AppTextInput from "../components/app-text-input";
import AppButton from "../components/app-button";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Screen style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        textContentType="emailAddress"
        icon="email"
        placeholder="e-mail"
        onChangeText={(email) => setEmail(email)}
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="password"
        secureTextEntry
        placeholder="Password"
        icon="lock"
        onChangeText={(password) => setPassword(password)}
      />
      <AppButton
        title="login"
        onPress={() => console.log("Email:", email, "\n Password:", password)}
      />
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
