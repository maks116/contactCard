import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { AlbumCardsList } from '../components/AlbumCardsList';
import { getAlbums } from '../api/api';

const Gallery = () => {
    const [dataAlbums, setDataAlbums] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [refreshAlbums, setRefreshAlbums] = useState(false);

    useEffect(() => {
        getAlbums(setDataAlbums, setLoading, alertHandler);
    }, [refreshAlbums]);

    const alertHandler = error =>
        Alert.alert(
            `${error}`,
            'Repeat the request?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => setRefreshAlbums(!refreshAlbums) },
            ],
            { cancelable: false },
        );
    if (isLoading) {
        return <ActivityIndicator style={styles.indicator} size="large" color="black" />;
    }

    return (
        <View style={styles.rootStyle}>
            <Header titleScreen="Gallery" />
            <AlbumCardsList data={dataAlbums} />
        </View>
    );
};

const styles = StyleSheet.create({
    rootStyle: {
        paddingHorizontal: 25,
        flex: 1,
        backgroundColor: '#0A0A0A',
    },
    scrollStyle: {
        flex: 1,
    },
    indicator: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default Gallery;
