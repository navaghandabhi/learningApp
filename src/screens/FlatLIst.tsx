import { ActivityIndicator,FlatList, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import FAB from '../Components/FAB';
import { scrollTo } from 'react-native-reanimated';

const openUrl = (url: string) => {
    Linking.openURL(url);
}
const UserItem = ({ item }: { item: UserModel }) => {
    return (<View style={styles.itemStyle} key={item.id}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.username}>{item.username}</Text>
        <Text style={styles.phone}>Phone : {item.phone}</Text>
        <Text style={styles.phone}>Email : {item.email}</Text>
        {/* <Text style={styles.website}>Website : {item.website}</Text> */}
        <Text >
            {<Text >Website : </Text>}
            {
                <TouchableOpacity onPress={() => { openUrl('https://reactnative.dev/docs/flatlist') }}>
                    <Text style={styles.website}>{item.website}</Text>
                </TouchableOpacity>
            }
        </Text>
    </View>);
}
const FlatLIst = () => {
    const [isLoading, setLoading] = useState(false);
    const [userList, setUserList] = useState<UserModel[]>([]);

    const flatListRef = useRef(null)
    async function geUsers() {
        try {
            setLoading(true);
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const json = await response.json();
            setUserList(json);
            setLoading(false);
        } catch (error) {
            console.log(`ERROR : ${error}`);
            setLoading(false);
        }
    }
    useEffect(() => {
        geUsers();
    }, []);
    return (
        <View style={styles.container}>
            {!isLoading ? 
            <FlatList 
            ref={flatListRef}
            data={userList} renderItem={
                ({ item }: { item: UserModel }) => (
                    <UserItem item={item} />
                )
            }></FlatList> : <ActivityIndicator size={'large'}></ActivityIndicator>}
            <FAB 
            onPress={() => flatListRef.current.scrollToIndex({ animated: false, index: 2 })}
             title='Scroll'/>
        </View>
    )
}

export default FlatLIst

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    itemStyle: {
        margin: 8,
        shadowColor: 'black',
        padding: 16,
        borderRadius: 12,
        elevation: 7,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    website: {
        color: 'blue'
    },
    username: {

    },
    phone: {

    },
})