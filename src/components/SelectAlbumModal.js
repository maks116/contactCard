import React, { useState } from "react";
import { Modal, StyleSheet, View, Text } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { PICKERDATA } from '../data'

export const SelectAlbumModal = ({ modalVisible, setModalVisible, setSelectedAlbum }) => {
    const [selectedValue, setSelectedValue] = useState(2);
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={setModalVisible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Picker
                        selectedValue={selectedValue}
                        onValueChange={(itemValue, itemIndex) => {
                            setSelectedAlbum(itemValue);
                            setSelectedValue(itemValue);
                            setModalVisible(!modalVisible);
                        }}
                    >
                        {PICKERDATA.map((item) => (
                            <Picker.Item label={item.label} value={item.value} key={item.value.toString()} />
                        ))}
                    </Picker>
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
    }
});