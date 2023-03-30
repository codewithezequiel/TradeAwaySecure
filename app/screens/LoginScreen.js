import React from "react";
import { StyleSheet, Image } from "react-native";
import { Formik } from "formik";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppText style={styles.logo}>TradeAwaySecure</AppText>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              placeholder="Email"
              icon="email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              textContentType="emailAddress"
            />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              placeholder="Password"
              textContentType="password"
              onChangeText={handleChange("password")}
              secureTextEntry
            />
            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
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
