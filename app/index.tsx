import { Text, TextInput } from "react-native";
import Icon from "./components/icon-component";
import ListItem from "./components/list-item";
import { Screen } from "./components/screen";
import AccountScreen from "./screens/account-screen";
import ListingScreen from "./screens/listing-screen";
import { useState } from "react";
import AppTextInput from "./components/app-text-input";

export default function Index() {
  const [firstName, setFirstName] = useState("");
  return (
    <Screen>
      <AppTextInput icon="email" placeholder="Placeholder"
      />
    </Screen>
  );
}
