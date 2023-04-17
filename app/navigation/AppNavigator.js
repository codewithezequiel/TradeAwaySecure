import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Notifications from "expo-notifications";

import AccountNavigator from "./AccountNavigator";
import expoPushTokensApi from "../api/expoPushTokens";
import FeedNavigator from "./FeedNavigator";
import ListingEditScreen from "../screens/ListingEditScreen";
import NewListingButton from "./NewListingButton";
import useNotifications from "../hooks/useNotifications";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  useNotifications();
  useEffect(() => {
    registerForPushNotifications();

    Notifications.addPushTokenListener((notification) =>
      console.log(notification)
    );
  }, []);
  const registerForPushNotifications = async () => {
    try {
      // const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      const permission = await Notifications.requestPermissionsAsync();
      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      // console.log(token);
      expoPushTokensApi.register(token); // we do not have to await the call bc we dont have to wait for the response to do
      // something after, we just call the server.
    } catch (error) {
      console.log("Error getting a push token", error);
    }
  };

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={ListingEditScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="message" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Edit Listings"
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate("Edit Listings")}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="camera" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="Selling"
        component={ListingEditScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="sale" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
