import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';
import { Header } from '../components/Header';

const secureObject = {
    login: 'admin',
    password: 'admin',
};

export const Login = () => {
    console.log('LOGIN!!!!!');

    const animateRef = useRef(null);
    const [animationTrigger, setAnimationTrigger] = useState(false);
    const [valueLogin, setValueLogin] = useState('');
    const [valuePassword, setValuePassword] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        animateRef.current.animate('rotate', 500);
    }, [animationTrigger]);

    const saveToStorage = async value => {
        try {
            await AsyncStorage.setItem('AUTHORIZED', value);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = () => {
        if (valueLogin.toLowerCase() !== secureObject.login || valuePassword.toLowerCase() !== secureObject.password) {
            // alertHandler('Please, enter correct credentials')
            setAnimationTrigger(!animationTrigger);
        }
        if (valueLogin.toLowerCase() === secureObject.login && valuePassword.toLowerCase() === secureObject.password) {
            saveToStorage('true');
            alertHandler('Correct');
            setTimeout(() => navigation.navigate('Gallery'), 1000);
        }
        return null;
    };

    const alertHandler = x => Alert.alert(x, { cancelable: false });

    return (
        <View style={styles.root}>
            <Header titleScreen="Login" />
            <View style={styles.scrollStyle}>
                <Animatable.View style={{ width: '90%' }} ref={animateRef}>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Enter your Login"
                        value={valueLogin}
                        onChangeText={setValueLogin}
                    />
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Enter your Password"
                        value={valuePassword}
                        onChangeText={setValuePassword}
                    />
                </Animatable.View>
                <TouchableOpacity style={styles.buttonStyle} onPress={handleSubmit}>
                    <Text style={styles.buttonTextStyle}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 25,
        flex: 1,
    },
    scrollStyle: {
        flex: 1,
        paddingTop: 250,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputStyle: {
        width: '100%',
        height: 55,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: 'grey',
        paddingLeft: 30,
        borderRadius: 20,
        fontSize: 18,
    },
    buttonStyle: {
        width: '75%',
        borderRadius: 25,
        paddingHorizontal: 15,
        height: 50,
        marginVertical: 5,
        backgroundColor: '#00ADD3',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '80%',
    },
    buttonTextStyle: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
        textAlign: 'center',
    },
});
