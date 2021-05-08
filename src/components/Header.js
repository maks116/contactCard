import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ButtonCircle } from './ButtonCircle';
import { useNavigation } from '@react-navigation/native';
import { getFromStorage } from '../api/api';

export const Header = ({ titleScreen, setIsModalVisible }) => {
    const [isAuthorized, setAuthorized] = useState(false);
    const navigation = useNavigation();

    const navigateHandle = () => {
        if (titleScreen === 'Gallery' && isAuthorized) {
            navigation.navigate('Users');
        }
        setIsModalVisible ? setIsModalVisible() : navigation.navigate('Users');
    };

    getFromStorage(setAuthorized);

    return (
        <View style={styles.root}>
            {titleScreen !== 'Contacts' && <ButtonCircle onPress={navigateHandle} />}
            <Text style={[styles.titleText, { color: titleScreen === 'Gallery' ? '#FFFFFF' : '#0A0A0A' }]}>
                {titleScreen}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    titleText: {
        fontSize: 35,
        fontWeight: 'normal',
    },
    root: {
        paddingTop: 40,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 42,
        fontWeight: 'normal',
    },
});
