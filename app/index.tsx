import { Switch } from "react-native";
import { Screen } from "./components/screen";
import { useState } from "react";
import AppPicker from "./components/app-picker";
import AppTextInput from "./components/app-text-input";
const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function Index() {
  const [category, setCategory] = useState<{ label: string; value: number }>(
    categories[0]
  );
  return (
    <Screen>
      <AppPicker
        icon="apps"
        items={categories}
        placeholder="Category"
        selectedItem={category}
        onSelectedItem={setCategory}
      />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}
