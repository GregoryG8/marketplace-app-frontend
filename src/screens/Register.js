import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Colors from "../styles/Colors";
import InputField from "../components/InputtField";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomButton from "../components/CustomButton";
import { Picker } from "@react-native-picker/picker";

export default function Register({ navigation }) {
  const [isTrainer, setIsTrainer] = React.useState(false);
  const [countries, setCountries] = React.useState([]);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [location, setLocation] = React.useState("");

  React.useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const countryNames = data.map((country) => country.name.common);
        setCountries(countryNames.sort());
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  const registrar = async () => {
    const url = "https://api-marketplace-t5ok.onrender.com/v1/auth/register";
    const userData = {
      name,
      email,
      password,
      location,
    };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const result = await res.json();
      console.log(result);
      console.log(userData);
      Alert.alert("Success", "Registration successful!");
    } catch (error) {
      console.error("Error posting data:", error);
      Alert.alert("Error", "Failed to register. Please try again.");
    }
  };

  const handleSignUp = () => {
    console.log("handleSignUp called");

    // Verificar que los campos no estén vacíos
    if (!name || !email || !password || !confirmPassword || !location) {
      console.log("Error: All fields are required");
      Alert.alert("Error", "All fields are required");
      return;
    }

    // Verificar que las contraseñas coincidan
    if (password !== confirmPassword) {
      console.log("Error: Passwords do not match");
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    // Aquí llamamos a la función registrar si las validaciones son correctas
    registrar();
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
        <View style={{ paddingHorizontal: 25 }}>
          <Text style={styles.titleRegister}>Register</Text>

          {isTrainer ? (
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
          ) : (
            <>
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
                valueEmail={name}
                onChangeEmail={setName}
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
                valueEmail={email}
                onChangeEmail={setEmail}
              />
              <Picker
                selectedValue={location}
                onValueChange={(itemValue, itemIndex) => setLocation(itemValue)}
                style={styles.selectCountry}
              >
                {countries.map((country, index) => (
                  <Picker.Item key={index} label={country} value={country} />
                ))}
              </Picker>
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
                valuePassword={password}
                onChangePassword={setPassword}
              />
              <InputField
                label={"Confirm Password"}
                icon={
                  <Ionicons
                    name="lock-closed-outline"
                    size={20}
                    color="#438e96"
                    style={{ marginRight: 5 }}
                  />
                }
                inputType="password"
                valuePassword={confirmPassword}
                onChangePassword={setConfirmPassword}
              />
            </>
          )}

          <CustomButton label={"Sign Up"} onPress={handleSignUp} />

          {isTrainer ? (
            <>
              <TouchableOpacity onPress={() => setIsTrainer(false)}>
                <Text style={styles.textRegister}>Soy Usuario</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TouchableOpacity onPress={() => setIsTrainer(true)}>
                <Text style={styles.textRegister}>Soy Entrenador</Text>
              </TouchableOpacity>
            </>
          )}

          <Text
            style={{ textAlign: "center", color: "#1a2c32", marginTop: 50 }}
          >
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

  textRegister: {
    textAlign: "center",
    color: Colors.primaryColor,
    fontSize: 18,
  },

  selectCountry: {
    marginBottom: 20,
    color: Colors.textColor,
  },
});
