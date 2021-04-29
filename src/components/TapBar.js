import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export const TapBar = ({ navigation, state }) => {
    if (state?.index === 1) {
        return null;
    }
    return (
        <View style={styles.root}>
            {state?.routes.map((item, index) => (
                <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate(item.name)}>
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
