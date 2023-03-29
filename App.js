import React, { useState } from "react";
import { Switch } from "react-native";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";

import Screen from "./app/components/Screen";

export default function App() {
  const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Supplies", value: 3 },
  ];

  const [category, setCategory] = useState(categories[0]);
  return (
    <Screen>
      <AppPicker
        icon="apps"
        placeholder="Category"
        items={categories}
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
      />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}
