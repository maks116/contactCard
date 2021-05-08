import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, StyleSheet, View } from 'react-native';

import { ModalPhoto } from './ModalPhoto';
import { Header } from '../components/Header';
import { AlbumCardsList } from '../components/AlbumCardsList';
import { getAlbums } from '../api/api';

const Gallery = () => {
    const [dataAlbums, setDataAlbums] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [refreshAlbums, setRefreshAlbums] = useState(false);

    const [isModalPhotoVisible, setIsModalPhotoVisible] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(null);
    const [currentAlbum, setCurrentAlbum] = useState({});

    const [page, setPage] = useState(1);
    const [updateDataAlbums, setUpdateDataAlbums] = useState([]);

    const swipeLeft = () => {
        photoIndex + 1 >= updateDataAlbums.length ? Alert.alert("It's a Finishing") : setPhotoIndex(photoIndex + 1);
    };
    const swipeRight = () => {
        photoIndex - 1 < 0 ? Alert.alert("It's a Beginning") : setPhotoIndex(photoIndex - 1);
    };

    useEffect(() => {
        getAlbums(setDataAlbums, page, setLoading, alertHandler);
    }, []);

    const setPageHandler = () => {
        if (page < 5) {
            setPage(page + 1);
        } else {
            null;
        }
    };

    useEffect(() => {
        if (page === 1) {
            setUpdateDataAlbums(dataAlbums);
        } else {
            setUpdateDataAlbums(updateDataAlbums.concat(dataAlbums));
        }
        setUpdateDataAlbums(updateDataAlbums.concat(dataAlbums));
    }, [dataAlbums, page]);

    useEffect(() => {
        console.log(photoIndex);
        if (photoIndex !== null) {
            const { url } = updateDataAlbums[photoIndex];
            const albumData = {
                url: { uri: url },
            };
            setCurrentAlbum(albumData);
        }
    }, [updateDataAlbums, photoIndex]);

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
        <>
            <ModalPhoto
                isModalPhotoVisible={isModalPhotoVisible}
                setIsModalPhotoVisible={() => setIsModalPhotoVisible(!isModalPhotoVisible)}
                currentAlbum={currentAlbum}
                swipeLeft={swipeLeft}
                swipeRight={swipeRight}
            />
            <View style={styles.rootStyle}>
                <Header titleScreen="Gallery" />
                <AlbumCardsList
                    data={updateDataAlbums}
                    setPhotoIndex={setPhotoIndex}
                    setIsModalPhotoVisible={() => setIsModalPhotoVisible(!isModalPhotoVisible)}
                    setPageHandler={setPageHandler}
                />
            </View>
        </>
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
