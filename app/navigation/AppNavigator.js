import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingEditScreen from "../screens/ListingEditScreen";
import FeedStackNavigator from "./FeedNavigator";
import AccountStackNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";
import useNotifications from "../hooks/useNotifications";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  useNotifications();
  return (
    <Tab.Navigator mode="card">
      <Tab.Screen
        name="Feed"
        component={FeedStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="ListingEdit"
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate("ListingEdit")}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={size}
            />
          ),
        })}
      ></Tab.Screen>
      <Tab.Screen
        name="Account"
        component={AccountStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default AppNavigator;
