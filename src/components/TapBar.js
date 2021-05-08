import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppState } from '@react-native-community/hooks';

export const TapBar = ({ navigation, state }) => {
    const [isAuthorized, setAuthorized] = useState(false);
    const currentAppState = useAppState();

    const clearStorage = async () => {
        try {
            await AsyncStorage.removeItem('AUTHORIZED');
        } catch (error) {
            console.log(error);
        }
    };

    const getFromStorage = async () => {
        try {
            const value = await AsyncStorage.getItem('AUTHORIZED');
            setAuthorized(Boolean(value));
        } catch (error) {
            console.log(error);
        }
    };

    const handleNavigate = item => {
        console.log('::: item = ', item);
        console.log('::: isAuthorized = ', isAuthorized);

        if (isAuthorized && item.name === 'Login') {
            navigation.navigate('Login', { screen: 'Gallery' });
        }
        if (!isAuthorized && item.name === 'Login') {
            navigation.navigate('Login', { screen: 'Login' });
        }
        if (!isAuthorized && item.name === 'Users') {
            navigation.navigate(item.name);
        }
        // if (!isAuthorized) {
        //     navigation.navigate(item.name);
        // }
    };

    useEffect(() => {
        if (currentAppState === ('background' || 'inactive')) {
            clearStorage();
        }
    }, [currentAppState]);

    useEffect(() => {
        getFromStorage();
    });

    if (state?.index === 1) {
        return null;
    }
    return (
        <View style={styles.root}>
            {state?.routes.map((item, index) => (
                <TouchableOpacity key={index} style={styles.buttonStyle} onPress={() => handleNavigate(item)}>
                    <Text style={styles.headerText}>{item.name.toUpperCase()}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#0A0A0A',
        width: '100%',
        height: 50,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    headerText: {
        fontSize: 15,
        fontWeight: '700',
        color: '#FFFFFF',
        textAlign: 'center',
    },
    buttonStyle: {
        flex: 1,
    },
});
