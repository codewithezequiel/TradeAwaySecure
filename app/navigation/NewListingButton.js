import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

function NewListingButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="camera" color={colors.white} size={40} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.gold,
    borderColor: colors.white,
    borderWidth: 10,
    height: 80,
    justifyContent: "center",
    width: 80,
    borderRadius: 40,
    bottom: 20,
  },
});

export default NewListingButton;
