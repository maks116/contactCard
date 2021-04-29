import React, { useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { AlbumCard } from './AlbumCard';
import { PhotoModal } from './PhotoModal';
import { SelectAlbumModal } from './SelectAlbumModal';

export const AlbumCardsList = ({ data }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalPhotoVisible, setModalPhotoVisible] = useState(false);
    const [selectedAlbum, setSelectedAlbum] = useState(1);
    const [selectedPhoto, setSelectedPhoto] = useState('');
    console.log(':::', selectedPhoto);

    return (
        <>
            <SelectAlbumModal
                modalVisible={modalVisible}
                setModalVisible={() => setModalVisible(!modalVisible)}
                setSelectedAlbum={setSelectedAlbum}
            />

            <PhotoModal
                modalPhotoVisible={modalPhotoVisible}
                setModalPhotoVisible={() => setModalPhotoVisible(!modalPhotoVisible)}
                selectedPhoto={selectedPhoto}
            />

            <TouchableOpacity style={styles.selectStyle} onPress={() => setModalVisible(true)}>
                <Text style={styles.headerText}>Select album </Text>
                <View style={styles.numberContainer}>
                    <Text style={styles.albumNumberStyle}>{selectedAlbum}</Text>
                </View>
            </TouchableOpacity>

            <FlatList
                data={data}
                renderItem={({ item }) =>
                    selectedAlbum === 1 && (
                        <AlbumCard
                            key={item.id}
                            albumName={item.title}
                            albumNumber={item.albumId}
                            albumPhoto={{ uri: item.url }}
                            onPressHandler={() => setModalPhotoVisible(true)}
                            setSelectedPhoto={setSelectedPhoto}
                        />
                    )
                }
                keyExtractor={item => item.id}
            />
        </>
    );
};

const styles = StyleSheet.create({
    headerText: {
        fontSize: 25,
        fontWeight: 'normal',
        color: '#00ADD3',
        textDecorationLine: 'underline',
    },
    selectStyle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        marginTop: 30,
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
