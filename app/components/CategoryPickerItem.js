import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./Text";
import Icon from "./Icon";

// PickerItem (original component) has the same API, the same interface.
// Both of these two comps support label and onPress
function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 15,
  },
});

export default CategoryPickerItem;
