import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import arrow from '../assets/images/arrow.png';

export const ButtonCircle = ({ onPress }) => (
    <TouchableOpacity style={styles.buttonCircle} onPress={() => onPress()}>
        <Image style={styles.iconStyle} source={arrow} />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: '#00ADD3',
        borderRadius: 20,
        marginRight: 15,
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconStyle: {
        height: 20,
        width: 15,
    },
});
