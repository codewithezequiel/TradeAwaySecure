import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "../components/Icon";
import colors from "../config/colors";

function Footer(props) {
  return (
    <View style={styles.iconsContainer}>
      <Icon
        name="home-outline"
        backgroundColor={colors.light}
        iconColor={colors.black}
        size={60}
      />
      <Icon
        name="application-settings-outline"
        backgroundColor={colors.light}
        iconColor={colors.black}
        size={60}
      />
      <Icon
        name="camera-outline"
        backgroundColor={colors.light}
        iconColor={colors.black}
        size={60}
      />
      <Icon
        name="ticket-outline"
        backgroundColor={colors.light}
        iconColor={colors.black}
        size={60}
      />
      <Icon
        name="account"
        backgroundColor={colors.secondary}
        iconColor={colors.white}
        size={60}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  iconsContainer: {
    backgroundColor: colors.white,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default Footer;
