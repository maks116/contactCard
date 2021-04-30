const usersUrl = 'https://randomuser.me/api/?results=50';
const albumsUrl = 'https://jsonplaceholder.typicode.com/photos?_limit=30';

export const getUsers = async (setData, setLoading, alertHandler) => {
    try {
        const response = await fetch(usersUrl);
        const users = await response.json();
        setData(users.results);
        setLoading(false);
    } catch (error) {
        setLoading(false);
        alertHandler(error);
    }
};

export const getAlbums = async (setData, setLoading, alertHandler) => {
    try {
        const response = await fetch(albumsUrl);
        const albums = await response.json();
        setData(albums);
        setLoading(false);
    } catch (error) {
        setLoading(false);
        alertHandler(error);
    }
};
