import React from "react";
import { View } from "react-native";

import CustomButton from "../components/CustomButton";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

export default function LoginScreen({ navigation }: any) {
  const colorScheme = useColorScheme();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <CustomButton
        mode="contained"
        color={Colors[colorScheme].tint}
        style={{ width: 100, marginBottom: 12 }}
        onPress={() => {
          navigation.navigate("RootDrawer", { name: "RootDrawer" });
        }}
      >
        SIGN IN
      </CustomButton>
      <CustomButton
        mode="outlined"
        color={Colors[colorScheme].tint}
        style={{ width: 100 }}
        onPress={() => {
          navigation.navigate("Register", { name: "Register" });
        }}
      >
        SIGN UP
      </CustomButton>
    </View>
  );
}
