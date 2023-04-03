import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AccountScreen from "../screens/AccountScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import ListingScreens from "../screens/ListingScreens";
import FeedNavigator from "./FeedNavigator";

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Feed" component={FeedNavigator} />
      <Tab.Screen name="Edit Listings" component={ListingEditScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

export default AppNavigator;
