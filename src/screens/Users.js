import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, StyleSheet, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Header } from '../components/Header';
import { UserCardsList } from '../components/UserCardsList';

const urlUsers = 'https://randomuser.me/api/?results=50';

const Users = () => {
    const [dataUsers, setDataUsers] = useState([]);
    // const [dataAlbums, setDataAlbums] = useState([]);
    const [isloading, setLoading] = useState(true);
    const [refreshUsers, setRefreshUsers] = useState(false);
    // const [refreshAlbums, setRefreshAlbums] = useState(false);

    useEffect(() => {
        getUsers();
    }, [refreshUsers]);

    const saveToStorage = async value => {
        try {
            await AsyncStorage.setItem('AUTORIZED', value);
        } catch (error) {
            console.log(error);
        }
    };

    const getUsers = async () => {
        try {
            const response = await fetch(urlUsers);
            const users = await response.json();
            setDataUsers(users.results);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            alertHandler(error, 'Repeat the request all users?', setRefreshUsers, refreshUsers);
        }
    };

    const alertHandler = (error, message, func, param) =>
        Alert.alert(
            `${error}`,
            message,
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => func(!param) },
            ],
            { cancelable: false },
        );

    if (isloading) {
        return <ActivityIndicator style={styles.indicator} size="large" color="black" />;
    }

    return (
        <View style={styles.rootStyle}>
            <Header titleScreen="Contacts" />
            <UserCardsList data={dataUsers} />
        </View>
    );
};

const styles = StyleSheet.create({
    rootStyle: {
        paddingHorizontal: 25,
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scrollStyle: {
        flex: 1,
    },
    indicator: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default Users;
