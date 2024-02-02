import { ActivityIndicator, Alert, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
type PostDetailProps = NativeStackScreenProps<RootStackParamList, 'PostDetailsScreen'>

type PostData = {
    id: string,
    title: string,
    body: string
}
function PostDetailsScreen({ route } : PostDetailProps) {

    
    const [isLoading, setLoading] = useState(false);
    const [postDetail, setPostDetail] = useState<PostData>();
    
    async function getPostDetail() {
        try {
            setLoading(true);

            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`);
            const json = await response.json();

            setPostDetail(json);
            setLoading(false);
        } catch (error) {
            Alert.alert(`${error}`);
            setLoading(false);
        }
    }
    useEffect(() => {
        getPostDetail()
    },[])
    return (
        <View>
            {
                isLoading ? <ActivityIndicator style={{alignContent:'center'}}/>: 
                <View style={styles.cardStyle}>
                <Text style={styles.titleStyle}>{postDetail?.title}</Text>
                <Text style={styles.bodyStyle}>{postDetail?.body}</Text>
                </View>
            }
        </View>
    )
}
export default PostDetailsScreen;
const styles = StyleSheet.create({
    cardStyle:{
        margin:16,
        padding:16,
        backgroundColor:'azure',
        borderRadius:8
    },
    titleStyle:{
        fontSize:18,
        fontWeight:'900',
        color:'black',
        marginTop:8
    },
    bodyStyle:{
        fontSize:16,
    },
})