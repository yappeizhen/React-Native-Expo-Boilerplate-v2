import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import AuthStackNavigator from "./navigation/AuthStackNavigator";
import DrawerNavigator from "./navigation/DrawerNavigator";
import LinkingConfiguration from "./navigation/LinkingConfiguration";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <NavigationContainer
          linking={LinkingConfiguration}
          theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          {/* <AuthStackNavigator /> */}
          <DrawerNavigator />
        </NavigationContainer>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
