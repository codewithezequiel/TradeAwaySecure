import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";

const Stack = createStackNavigator();

function AccountNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={AccountScreen}></Stack.Screen>
      <Stack.Screen name="Messages" component={MessagesScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}

export default AccountNavigator;
