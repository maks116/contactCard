const usersUrl = 'https://randomuser.me/api/?results=10&page=';
const albumsUrl = 'https://jsonplaceholder.typicode.com/photos?_limit=10&page=';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUsers = async (setData, page, setLoading, alertHandler) => {
    try {
        const response = await fetch(usersUrl + page);
        const users = await response.json();
        setData(users.results);
        setLoading(false);
    } catch (error) {
        setLoading(false);
        alertHandler(error);
    }
};

export const getAlbums = async (setData, page, setLoading, alertHandler) => {
    try {
        const response = await fetch(albumsUrl + page);
        const albums = await response.json();
        setData(albums);
        setLoading(false);
    } catch (error) {
        setLoading(false);
        alertHandler(error);
    }
};

export const getFromStorage = async callback => {
    try {
        const value = await AsyncStorage.getItem('AUTORIZED');
        callback(Boolean(value));
    } catch (error) {
        console.log(error);
    }
};
