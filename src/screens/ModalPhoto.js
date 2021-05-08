import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { Header } from '../components/Header';

const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
};

export const ModalPhoto = ({ isModalPhotoVisible, setIsModalPhotoVisible, currentAlbum, swipeRight, swipeLeft }) => {
    return (
        <GestureRecognizer
            onSwipeLeft={swipeLeft}
            onSwipeRight={swipeRight}
            onSwipeDown={() => setIsModalPhotoVisible()}
            config={config}
            style={[
                styles.modalStyle,
                {
                    position: 'absolute',
                    zIndex: isModalPhotoVisible ? 5 : -5,
                    width: isModalPhotoVisible ? '100%' : 0,
                    height: isModalPhotoVisible ? '100%' : 0,
                    opacity: isModalPhotoVisible ? 1 : 0,
                },
            ]}
        >
            <View style={styles.modalBox}>
                <Header setIsModalVisible={setIsModalPhotoVisible} />
                <View style={styles.textBox}>
                    <Image style={styles.imgStyle} source={currentAlbum.url} />
                </View>
            </View>
        </GestureRecognizer>
    );
};

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
    imgStyle: {
        width: '100%',
        height: '100%',
        borderWidth: 1,
        borderColor: '#444444',
        borderRadius: 5,
    },
});
