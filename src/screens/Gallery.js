import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, StyleSheet, View } from 'react-native';
import { Header } from '../components/Header';
import { AlbumCardsList } from '../components/AlbumCardsList';

const urlAlbums = 'https://jsonplaceholder.typicode.com/photos?_limit=30';

const Gallery = () => {
    const [dataAlbums, setDataAlbums] = useState([]);
    const [isloading, setLoading] = useState(true);
    const [refreshAlbums, setRefreshAlbums] = useState(false);

    useEffect(() => {
        getAlbums();
    }, [refreshAlbums]);

    const getAlbums = async () => {
        try {
            const response = await fetch(urlAlbums);
            const albums = await response.json();
            setDataAlbums(albums);
            setLoading(false);
        } catch (error) {
            alertHandler(error, 'Repeat the request all albums?', setRefreshAlbums, refreshAlbums);
        }
    };

    const alertHandler = (error, message, func, param) =>
        Alert.alert(
            `${error}`,
            message,
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => func(!param) },
            ],
            { cancelable: false },
        );

    if (isloading) {
        return <ActivityIndicator style={styles.indicator} size="large" color="black" />;
    }

    let headerStyle = { fontSize: 42, fontWeight: 'normal', color: '#0A0A0A' };
    // let rootStyle = { paddingHorizontal: 25, flex: 1, backgroundColor: '#FFFFFF' };
    // switch (activeScreen) {
    //     case 2:
    //         headerStyle = { fontSize: 42, fontWeight: 'normal', color: '#FFFFFF' };
    //         rootStyle = { paddingHorizontal: 25, flex: 1, backgroundColor: '#0A0A0A' };
    //         break;

    //     default:
    //         headerStyle = { fontSize: 42, fontWeight: 'normal', color: '#0A0A0A' };
    //         rootStyle = { paddingHorizontal: 25, flex: 1, backgroundColor: '#FFFFFF' };
    //         break;
    // }

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
