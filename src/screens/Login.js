import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TextInput, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../components/Header';

export const Login = () => {
    const [valueLogin, setValueLogin] = useState('');
    const [valuePassword, setValuePassword] = useState('');
    const navigation = useNavigation();

    return (
        <View style={styles.rootStyle}>
            <Header titleScreen="Login" />
            <View style={styles.container}>
                <ScrollView style={styles.scrollStyle} contentContainerStyle={styles.scrollContainer}>
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
                </ScrollView>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Gallery')}>
                    <Text style={styles.submitText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    rootStyle: {
        backgroundColor: '#FFFFFF',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputStyle: {
        width: 363,
        height: 55,
        margin: 12,
        borderWidth: 2,
        borderColor: '#E5E5E5',
        paddingLeft: 30,
        borderRadius: 20,
        fontSize: 18,
    },
    scrollStyle: {},
    scrollContainer: {
        width: '100%',
        paddingTop: 180,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonStyle: {
        marginTop: 200,
        borderRadius: 20,
        width: 256,
        height: 60,
        alignSelf: 'center',
        bottom: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00ADD3',
    },
    submitText: {
        fontSize: 25,
        fontWeight: 'normal',
        color: '#FFFFFF',
    },
});
