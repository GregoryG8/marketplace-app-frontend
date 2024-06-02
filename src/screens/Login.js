import React from "react";
import { SafeAreaView, View, Text, Button } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
//import Google from "react-native-vector-icons/AntDesign";
import CustomButton from "../components/CustomButton";
import InputField from "../components/InputtField";
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";

const LoginScreen = ({ navigation }) => {
  GoogleSignin.configure({
    webClientId:
      "",
  });

  async function onGoogleButtonPress() {
    console.log("Validando Google");
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    //return auth().signInWithCredential(googleCredential);
    const userSignIn = auth().signInWithCredential(googleCredential);
    userSignIn
      .then((user) => {
        console.log("Signed in with Google! User: ", user);
      })
      .catch((error) => {
        console.log("Error signing in with Google! Error: ", error);
      });
  }
  const [password, onChangePassword] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
        <View style={{ paddingHorizontal: 25 }}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: "500",
              color: "#1a2c32",
              marginBottom: 30,
            }}
          >
            Login
          </Text>
          <InputField
            label={"Email ID"}
            icon={
              <MaterialIcons
                name="alternate-email"
                size={20}
                color="#438e96"
                style={{ marginRight: 5 }}
              />
            }
            keyboardType="email-address"
            valueEmail={email}
            onChangeEmail={onChangeEmail}
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
            fieldButtonLabel={"Forgot?"}
            fieldButtonFunction={() => {}}
            valuePassword={password}
            onChangePassword={onChangePassword}
          />
          <CustomButton
            label={"Login"}
            onPress={() => {
              //obtener el valor de los inputFiels
              console.log("Email: ", email);
              console.log("Password: ", password);
            }}
          />
          <Text
            style={{ textAlign: "center", color: "#666", marginBottom: 30 }}
          >
            Or, login with ...
          </Text>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <TouchableOpacity onPress={() => console.log("Hola perra")}
                            style={{
                                width: 50,
                                height: 50,
                                //borderRadius: '50%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: 10,
                                backgroundColor: '#fff',
                                shadowColor: 'black',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.3,
                                elevation: 5,
                            }}>
                            <Google name="google" size={30} color="#D92929" />
                        </TouchableOpacity> */}

            <Button
              title="Google Sign-In"
              onPress={() =>
                onGoogleButtonPress().then(() =>
                  console.log("Signed in with Google!")
                )
              }
            />
          </View>
          <Text style={{ textAlign: "center", color: "#666", marginTop: 50 }}>
            Don’t have account ?{" "}
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text
                style={{
                  color: "#438e96",
                  fontWeight: "700",
                  marginBottom: -3,
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default LoginScreen;
