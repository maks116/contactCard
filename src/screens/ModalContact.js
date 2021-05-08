import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { Header } from '../components/Header';

const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
};

export const ModalContact = ({
    isModalContactVisible,
    setIsModalContactVisible,
    currentUser,
    swipeRight,
    swipeLeft,
}) => (
    <GestureRecognizer
        onSwipeLeft={swipeLeft}
        onSwipeRight={swipeRight}
        onSwipeDown={() => setIsModalContactVisible()}
        config={config}
        style={[
            styles.modalStyle,
            {
                position: 'absolute',
                zIndex: isModalContactVisible ? 5 : -5,
                width: isModalContactVisible ? '100%' : 0,
                height: isModalContactVisible ? '100%' : 0,
                opacity: isModalContactVisible ? 1 : 0,
            },
        ]}
    >
        <View style={styles.modalBox}>
            <Header setIsModalVisible={setIsModalContactVisible} />
            <View style={styles.textBox}>
                <Text style={styles.userNameText}>{currentUser.userName}</Text>
                <Text style={styles.userPhoneText}>{currentUser.userPhone}</Text>
            </View>
        </View>
    </GestureRecognizer>
);

const styles = StyleSheet.create({
    modalStyle: {},
    modalBox: {
        flex: 1,
        backgroundColor: 'grey',
        opacity: 0.9,
        paddingHorizontal: 25,
    },
    userNameText: {
        fontSize: 43,
        fontWeight: '400',
        color: 'white',
    },
    userPhoneText: {
        fontSize: 26,
        fontWeight: '400',
        color: 'white',
    },
    textBox: {
        height: '70%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
