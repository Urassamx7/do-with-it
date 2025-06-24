import { Switch } from "react-native";
import { Screen } from "./components/screen";
import { useState } from "react";
import AppPicker from "./components/app-picker";
import AppTextInput from "./components/app-text-input";
import LoginScreen from "./screens/login-screen";
const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function Index() {
  return <LoginScreen />;
}
