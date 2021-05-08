import React from 'react';
import { FlatList } from 'react-native';
import { UserCard } from './UserCard';

export const UserCardsList = ({ data, setUserIndex, setIsModalContactVisible, setPageHandler }) => {
    const renderItem = ({ item, index }) => (
        <UserCard
            userName={`${item.name.title}. ${item.name.last} ${item.name.first}`}
            userPhone={item.phone}
            userPic={{ uri: item.picture.large }}
            userAddress={`${item.location.country}, ${item.location.state}, ${item.location.city}`}
            userMail={item.email}
            setIsModalContactVisible={() => setIsModalContactVisible()}
            setCurrentUserIndex={() => setUserIndex(index)}
        />
    );

    return (
        <FlatList
            data={data}
            extraData={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index}
            onEndReached={() => setPageHandler()}
            onEndReachedThreshold={0.1}
        />
    );
};

// const styles = StyleSheet.create({
//     scrollStyle: {
//         flex: 1,
//     },
//     scrollContainer: {
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });
