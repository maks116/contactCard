import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, StyleSheet, View } from 'react-native';

import { ModalContact } from './ModalContact';
import { getUsers } from '../api/api';
import { Header } from '../components/Header';
import { UserCardsList } from '../components/UserCardsList';

const Users = () => {
    const [dataUsers, setDataUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [refreshUsers, setRefreshUsers] = useState(false);

    const [isModalContactVisible, setIsModalContactVisible] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [userIndex, setUserIndex] = useState(null);

    const [page, setPage] = useState(1);
    const [updateDataUsers, setUpdateDataUsers] = useState([]);

    const swipeLeft = () => {
        userIndex + 1 >= updateDataUsers.length ? Alert.alert("It's a Finishing") : setUserIndex(userIndex + 1);
    };
    const swipeRight = () => {
        userIndex - 1 < 0 ? Alert.alert("It's a Beginning") : setUserIndex(userIndex - 1);
    };

    useEffect(() => {
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
        getUsers(setDataUsers, page, setLoading, alertHandler);
    }, []);

    const setPageHandler = () => {
        if (page < 5) {
            setPage(page + 1);
        } else {
            null;
        }
    };

    useEffect(() => {
        if (page === 1) {
            setUpdateDataUsers(dataUsers);
        } else {
            setUpdateDataUsers(updateDataUsers.concat(dataUsers));
        }
        setUpdateDataUsers(updateDataUsers.concat(dataUsers));
    }, [dataUsers, page]);

    useEffect(() => {
        if (userIndex !== null) {
            const { name, phone } = updateDataUsers[userIndex];
            const userData = {
                userName: `${name.title}. ${name.last} ${name.first}`,
                userPhone: phone,
            };
            setCurrentUser(userData);
        }
    }, [updateDataUsers, userIndex]);

    if (isLoading) {
        return <ActivityIndicator style={styles.indicator} size="large" color="black" />;
    }

    return (
        <>
            <ModalContact
                isModalContactVisible={isModalContactVisible}
                setIsModalContactVisible={() => setIsModalContactVisible(!isModalContactVisible)}
                currentUser={currentUser}
                swipeLeft={swipeLeft}
                swipeRight={swipeRight}
            />
            <View style={styles.rootStyle}>
                <Header titleScreen="Contacts" />
                <UserCardsList
                    data={updateDataUsers}
                    setUserIndex={setUserIndex}
                    setIsModalContactVisible={() => setIsModalContactVisible(!isModalContactVisible)}
                    setPageHandler={setPageHandler}
                />
            </View>
        </>
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
