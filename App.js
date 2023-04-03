import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Button } from "react-native";

import Screen from "./app/components/Screen";

function Link() {
  const navigation = useNavigation();
  return (
    <Button title="Click" onPress={() => navigation.navigate("TweetDetails")} />
  );
}

function Tweets({ navigation }) {
  return (
    <Screen>
      <Text>Tweets</Text>
      <Link />
    </Screen>
  );
}

function TweetDetails() {
  return (
    <Screen>
      <Text>Tweet Details</Text>
    </Screen>
  );
}

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tweets" component={Tweets} />
      <Stack.Screen name="TweetDetails" component={TweetDetails} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
    // <Screen>
    //   <Text>Hello</Text>
    // </Screen>
  );
}
