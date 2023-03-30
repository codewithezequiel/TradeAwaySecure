import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";

function LoginScreen(props) {
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);

  return (
    <Screen style={styles.container}>
      <AppText style={styles.logo}>TradeAwaySecure</AppText>
      <AppTextInput
        placeholder="Email"
        icon="email"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        textContentType="emailAddress"
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        placeholder="Password"
        textContentType="password"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <AppButton title="Login" onPress={() => console.log(email, password)} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  logo: {
    width: 100,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 30,
    textAlign: "center",
  },
});

export default LoginScreen;
