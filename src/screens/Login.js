import React, { useState, useEffect, useRef } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text,
    Alert,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
import { useKeyboard, useDimensions } from '@react-native-community/hooks';

import { useNavigation } from '@react-navigation/native';
import { Header } from '../components/Header';

const secureObject = {
    login: 'admin',
    password: 'admin',
};

export const Login = () => {
    const keyboard = useKeyboard();
    const { height } = useDimensions().window;
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
            setAnimationTrigger(!animationTrigger);
        }
        if (valueLogin.toLowerCase() === secureObject.login && valuePassword.toLowerCase() === secureObject.password) {
            saveToStorage('true');
            Alert.alert('Correct');
            setTimeout(() => navigation.navigate('Gallery'), 1000);
        }
        return null;
    };

    return (
        <View style={styles.root}>
            <Header title="Log In" />
            <View
                style={[
                    styles.rootBox,
                    { height: keyboard.keyboardShown ? height - 150 - keyboard.keyboardHeight : height - 150 },
                ]}
            >
                <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
                    <View style={[styles.contentBox, { paddingTop: keyboard.keyboardShown ? '50%' : '80%' }]}>
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
                                onEndEditing={() => {
                                    Keyboard.dismiss();
                                    handleSubmit();
                                }}
                            />
                        </Animatable.View>
                        <TouchableOpacity style={styles.buttonStyle} onPress={handleSubmit}>
                            <Text style={styles.buttonTextStyle}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 25,
        flex: 1,
        justifyContent: 'flex-start',
    },
    rootBox: {},
    contentBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    inputStyle: {
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
    },
    buttonTextStyle: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
        textAlign: 'center',
    },
});
