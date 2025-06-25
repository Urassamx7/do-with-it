import { useEffect, useState } from "react";

import * as ImagePicker from "expo-image-picker";
import { Screen } from "./components/screen";
import Button from "./components/button";
import { Image } from "react-native";
import ImageInput from "./components/image-input";
import ImageInputList from "./components/image-input-list";
import ListingEditScreen from "./screens/listing-edit-screen";
import LoginScreen from "./screens/login-screen";

export default function Index() {
  return <ListingEditScreen />;
}
