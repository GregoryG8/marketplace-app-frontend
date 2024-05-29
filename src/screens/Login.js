import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Google from 'react-native-vector-icons/AntDesign';
import CustomButton from '../components/CustomButton';
import InputField from '../components/InputtField';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';

const LoginScreen = () => {
    const [password, onChangePassword] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ paddingHorizontal: 25 }}>
                    <Text
                        style={{
                            fontSize: 28,
                            fontWeight: '500',
                            color: '#333',
                            marginBottom: 30,
                        }}>
                        Login
                    </Text>
                    <InputField
                        label={'Email ID'}
                        icon={
                            <MaterialIcons
                                name="alternate-email"
                                size={20}
                                color="#666"
                                style={{ marginRight: 5 }}
                            />
                        }
                        keyboardType="email-address"
                        valueEmail={email}
                        onChangeEmail={onChangeEmail}
                    />
                    <InputField
                        label={'Password'}
                        icon={
                            <Ionicons
                                name="lock-closed-outline"
                                size={20}
                                color="#666"
                                style={{ marginRight: 5 }}
                            />
                        }
                        inputType="password"
                        fieldButtonLabel={"Forgot?"}
                        fieldButtonFunction={() => { }}
                        valuePassword={password}
                        onChangePassword={onChangePassword}
                    />
                    <CustomButton label={"Login"} onPress={() => {
                        //obtener el valor de los inputFiels
                        console.log("Email: ", email);
                        console.log("Password: ", password);

                    }} />
                    <Text style={{ textAlign: 'center', color: '#666', marginBottom: 30 }}>
                        Or, login with ...
                    </Text>
                    <View style={{
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <TouchableOpacity onPress={() => console.log("Hola perra")}
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
                        </TouchableOpacity>
                    </View>
                    <Text style={{ textAlign: 'center', color: '#666', marginTop: 50 }}>
                        Don’t have account ? <TouchableOpacity onPress={() => console.log("Hola perra")}><Text style={{ color: '#AD40AF', fontWeight: '700', marginBottom: -3 }}>Sign Up</Text></TouchableOpacity>
                    </Text>

                </View>
            </SafeAreaView>
        </GestureHandlerRootView>
    );
};

export default LoginScreen;
