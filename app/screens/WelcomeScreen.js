import React from "react";
import { StyleSheet, View, Text } from "react-native";
import AppButton from "../components/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

function WelcomeScreen(props) {
  return (
    <LinearGradient
      colors={["#994dbd", "#4e1957", "#572486"]}
      style={styles.linearGradient}
    >
      <View blurRadius={5} style={styles.background}>
        <View style={styles.logoContainer}>
          <MaterialCommunityIcons
            name="handshake"
            size={100}
            color="#ff5449ff"
          />
          <Text style={styles.logoText}>TradeAwaySecure</Text>
          <MaterialCommunityIcons name="security" size={100} color="#4ecdc4" />
        </View>
        <View style={styles.buttonsContainer}>
          <AppButton title="Go To Login" />
          <AppButton title="Create Account" color="black" />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    // backgroundColor: "#3f2844ff",
  },
  buttonsContainer: {
    width: "100%",
    padding: 20,
  },
  logoText: {
    fontSize: 40,
    fontWeight: "400",
    color: "white",
  },
  logoContainer: {
    position: "absolute",
    top: 300,
    alignItems: "center",
  },
  taglineContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tagline: {
    fontSize: 20,
    fontWeight: "400",
    color: "white",
  },
});

export default WelcomeScreen;
