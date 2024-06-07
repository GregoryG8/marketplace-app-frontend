import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./screens/Login";
import Home from "./screens/Home";
import Register from "./screens/Register";
import Dashboard from "./screens/Dashboard";
const Stack = createNativeStackNavigator();
export default function Main() {
  return (
    <Stack.Navigator initialRouteName="Dashboard" screenOptions={{
        headerShown: false,
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}
