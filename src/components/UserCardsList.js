import React from 'react';
import { ScrollView, StyleSheet } from 'react-native'
import { UserCard } from './UserCard';

export const UserCardsList = ({ data }) => (
    <ScrollView style={styles.scrollStyle} contentContainerStyle={styles.scrollContainer}>
        {data.map(item => (
            <UserCard
                userName={`${item.name.title}. ${item.name.last} ${item.name.first}`}
                userPhone={item.phone}
                userPic={{ uri: item.picture.large }}
                userAddress={`${item.location.country}, ${item.location.state}, ${item.location.city}`}
                userMail={item.email}
            />
        ))}
    </ScrollView>
)

const styles = StyleSheet.create({
    scrollStyle: {
        flex: 1
    },
    scrollContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})
