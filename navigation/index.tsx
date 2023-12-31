import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Authentication, Feed } from "../screens";
import colors from "../constants/colors";
import routes from "./routes";

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.bgBlack },
        }}
      >
        <Stack.Screen name={routes.Authentication} component={Authentication} />
        <Stack.Screen name={routes.Feed} component={Feed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
