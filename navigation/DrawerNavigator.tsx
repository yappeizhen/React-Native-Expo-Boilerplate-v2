import * as React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import AboutUsScreen from "../screens/AboutUsScreen";
import HomeScreen from "../screens/HomeScreen";
import { DrawerParamList } from "../types";

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={() => ({
          title: "Home",
          headerShown: false,
        })}
      />
      <Drawer.Screen
        name="AboutUs"
        component={AboutUsScreen}
        options={() => ({ title: "About Us" })}
      />
    </Drawer.Navigator>
  );
}
