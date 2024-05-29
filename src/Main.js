import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./screens/Login";
import Home from "./screens/Home";
const Stack = createNativeStackNavigator();
export default function Main() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{
        headerShown: false,
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
