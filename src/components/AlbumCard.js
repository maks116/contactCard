import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export const AlbumCard = ({ albumName, albumNumber, albumPhoto, setPhotoIndex, setIsModalPhotoVisible }) => {
    return (
        <View style={styles.cardStyle}>
            <View style={styles.imgContainer}>
                <TouchableOpacity
                    onPress={() => {
                        setIsModalPhotoVisible();
                        setPhotoIndex();
                    }}
                >
                    <Image style={styles.imgStyle} source={{ uri: albumPhoto }} />
                </TouchableOpacity>
            </View>
            <View style={styles.footerContainer}>
                <Text style={styles.albumNameStyle}>{albumName}</Text>
                <Text style={styles.albumTitleStyle}>ALBUM</Text>
                <View style={styles.numberContainer}>
                    <Text style={styles.albumNumberStyle}>{albumNumber}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardStyle: {
        width: '100%',
        // height: 160,
        borderRadius: 10,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#444444',
    },
    imgContainer: {
        flex: 1,
        width: '92%',
        height: 120,
        marginTop: '4%',
    },

    imgStyle: {
        width: '100%',
        height: '100%',
        borderWidth: 1,
        borderColor: '#444444',
        borderRadius: 5,
    },
    albumNumberStyle: {
        fontSize: 17,
        fontWeight: '100',
        color: '#FFFFFF',
        flex: 1,
    },

    albumTitleStyle: {
        fontSize: 15,
        fontWeight: '100',
        color: '#00ADD3',
        flex: 2,
    },
    footerContainer: {
        flexDirection: 'row',
        marginTop: 2,
        marginBottom: 2,
        alignItems: 'center',
    },
    numberContainer: {
        backgroundColor: '#00ADD3',
        width: 28,
        height: 28,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '4%',
    },
    albumNameStyle: {
        fontSize: 15,
        fontWeight: '100',
        color: '#FFFFFF',
        flex: 8,
        marginLeft: '4%',
    },
});
