import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";

export default function App() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons size={200} name="email" color="dodgerblue" />
      <AppText>react native</AppText>
      <AppButton title="Login" onPress={() => console.log("Tapped")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
