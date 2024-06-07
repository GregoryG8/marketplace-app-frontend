import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Colors from "../styles/Colors";
import InputField from "../components/InputtField";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomButton from "../components/CustomButton";

export default function Register ({ navigation }){
  
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
          <View style={{ paddingHorizontal: 25 }}>
            <Text style={styles.titleRegister}>Register</Text>
            <InputField
              label={"Full Name"}
              icon={
                <AntDesign
                  name="user"
                  size={20}
                  color="#438e96"
                  style={{ marginRight: 5 }}
                />
              }
              keyboardType="email-address"
              // valueEmail={}
              // onChangeEmail={}
            />
            <InputField
              label={"Email"}
              icon={
                <MaterialIcons
                  name="alternate-email"
                  size={20}
                  color="#438e96"
                  style={{ marginRight: 5 }}
                />
              }
              keyboardType="email-address"
              // valueEmail={email}
              // onChangeEmail={onChangeEmail}
            />
            <InputField
              label={"Password"}
              icon={
                <Ionicons
                  name="lock-closed-outline"
                  size={20}
                  color="#438e96"
                  style={{ marginRight: 5 }}
                />
              }
              inputType="password"
              // valuePassword={password}
              // onChangePassword={onChangePassword}
            />
            <InputField
              label={"Password"}
              icon={
                <Ionicons
                  name="lock-closed-outline"
                  size={20}
                  color="#438e96"
                  style={{ marginRight: 5 }}
                />
              }
              inputType="password"
              // valuePassword={password}
              // onChangePassword={onChangePassword}
            />

            <CustomButton
              label={"Sign Up"}
              onPress={() => {
                //obtener el valor de los inputFiels
                // console.log("Email: ", email);
                // console.log("Password: ", password);
              }}
            />

            <Text style={{ textAlign: "center", color: "#1a2c32", marginTop: 50 }}>
              Already have an account ?{" "}
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text
                  style={{
                    color: "#438e96",
                    fontWeight: "700",
                    marginBottom: -3,
                  }}
                >
                  Sign In
                </Text>
              </TouchableOpacity>
            </Text>
          </View>
        </SafeAreaView>
      </GestureHandlerRootView>
    );
  }


const styles = StyleSheet.create({
  titleRegister: {
    fontSize: 28,
    color: Colors.textColor,
    marginBottom: 30,
  },
});


