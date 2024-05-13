import React from "react";
import Home from "./screens/Home";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function Main() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false,
    }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
