import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingScreens from "../screens/ListingScreens";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

function FeedNavigator() {
  return (
    <Stack.Navigator screenOptions={{ presentation: "modal" }}>
      <Stack.Screen name="Listings" component={ListingScreens}></Stack.Screen>
      <Stack.Screen
        name="Listing Details"
        component={ListingDetailsScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export default FeedNavigator;
