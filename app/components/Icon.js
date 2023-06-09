import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons, Ionicons, Feather } from "@expo/vector-icons";

// Implementing a reusable icon component

function Icon({
  name,
  size = 40,
  backgroundColor = "#000",
  iconColor = "#fff",
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {(
        <MaterialCommunityIcons name={name} color={iconColor} size={size / 2} />
      ) || <Ionicons name={name} color={iconColor} size={size / 2} />}
    </View>
  );
}

export default Icon;
