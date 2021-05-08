import React, { useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { AlbumCard } from './AlbumCard';
import { SelectAlbumModal } from './SelectAlbumModal';

export const AlbumCardsList = ({ data, setPhotoIndex, setIsModalPhotoVisible, setPageHandler }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedAlbum, setSelectedAlbum] = useState(1);

    return (
        <>
            <SelectAlbumModal
                modalVisible={modalVisible}
                setModalVisible={() => setModalVisible(!modalVisible)}
                setSelectedAlbum={setSelectedAlbum}
            />

            <TouchableOpacity style={styles.selectStyle} onPress={() => setModalVisible(true)}>
                <Text style={styles.headerText}>Select album </Text>
                <View style={styles.numberContainer}>
                    <Text style={styles.albumNumberStyle}>{selectedAlbum}</Text>
                </View>
            </TouchableOpacity>

            <FlatList
                data={data}
                renderItem={({ item, index }) =>
                    selectedAlbum === 1 && (
                        <AlbumCard
                            // key={item.id}
                            albumName={item.title}
                            albumNumber={item.albumId}
                            albumPhoto={item.url}
                            setIsModalPhotoVisible={() => setIsModalPhotoVisible()}
                            setPhotoIndex={() => setPhotoIndex(index)}
                        />
                    )
                }
                keyExtractor={(item, index) => index}
                onEndReached={() => setPageHandler()}
                onEndReachedThreshold={0.1}
            />
        </>
    );
};

const styles = StyleSheet.create({
    headerText: {
        fontSize: 20,
        fontWeight: 'normal',
        color: '#00ADD3',
        textDecorationLine: 'underline',
    },
    selectStyle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        marginTop: 45,
        right: 0,
    },
    numberContainer: {
        backgroundColor: '#00ADD3',
        width: 38,
        height: 38,
        borderRadius: 19,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '8%',
    },
    albumNumberStyle: {
        fontSize: 25,
        fontWeight: '100',
        color: '#FFFFFF',
        flex: 1,
    },
});
