import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ButtonCircle } from './ButtonCircle';
import { useNavigation } from '@react-navigation/native';

export const Header = ({ titleScreen }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.root}>
            {titleScreen !== 'Contacts' && <ButtonCircle onPress={() => navigation.navigate('Users')} />}
            <Text style={[styles.titleText, { color: titleScreen === 'Gallery' ? '#FFFFFF' : '#0A0A0A' }]}>
                {titleScreen}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    titleText: {
        fontSize: 42,
        fontWeight: 'normal',
    },
    root: {
        paddingTop: 35,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 42,
        fontWeight: 'normal',
    },
});
