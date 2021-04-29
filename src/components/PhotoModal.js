import React, { useState } from "react";
import { Modal, StyleSheet, View, Image } from "react-native";
import { ButtonCircle } from "./ButtonCircle";


export const PhotoModal = ({ modalPhotoVisible, setModalPhotoVisible,selectedPhoto }) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalPhotoVisible}
            onRequestClose={setModalPhotoVisible}
        >
            
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <ButtonCircle onPress={() => setModalPhotoVisible(!modalPhotoVisible)} />
                    <Image style={styles.imgStyle} source={selectedPhoto} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        width: '80%',
        height: 'auto',
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
    },
    imgStyle: {
        width: '100%',
        height: '80%',
        borderWidth: 1,
        borderColor: '#444444',
        borderRadius: 5
      },
});