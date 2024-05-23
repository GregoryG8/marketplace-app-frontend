import React from "react";
import { Text, View, Button } from "react-native";

export default function  ButtonAndroid(){
    return (
        <View>
            <Button
        title="Android"
        onPress={() => {
          console.log('Botón de Android presionado');
        }}
      />
        </View>
    )
}