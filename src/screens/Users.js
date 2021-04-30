import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, StyleSheet, View } from 'react-native';

import { getUsers } from '../api/api';
import { Header } from '../components/Header';
import { UserCardsList } from '../components/UserCardsList';

const Users = () => {
    const [dataUsers, setDataUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [refreshUsers, setRefreshUsers] = useState(false);

    useEffect(() => {
        getUsers(setDataUsers, setLoading, alertHandler);
    }, [refreshUsers]);

    const alertHandler = error =>
        Alert.alert(
            `${error}`,
            'Repeat the request?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => setRefreshUsers(!refreshUsers) },
            ],
            { cancelable: false },
        );
    if (isLoading) {
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
