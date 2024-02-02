import { ActivityIndicator, RefreshControl, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';


type ApiProps = NativeStackScreenProps<RootStackParamList, "ApiIntegration">

type Post = {
  id: string,
  title: string,
  body: string
}

export default function ApiIntegration({ navigation }: ApiProps) {
  const [isLoading, setLoading] = useState(false);
  const [postList, setPostList] = useState<Post[]>([]);

  async function getPosts() {
    try {
      setLoading(true);
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      const json = await response.json();
      setPostList(json);
      setLoading(false);
    } catch (error) {
      console.log(`ERROR : ${error}`);
      setLoading(false);
    }
  }
  useEffect(() => {
    getPosts();
  }, [])

  function goToDetail(id: string) {
    navigation.push('PostDetailsScreen', { id: id })
  }

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl 
          tintColor={'#98CE00'}
          progressViewOffset={10}
          progressBackgroundColor={'#0072CF'}
          enabled={true}
          refreshing={isLoading} 
          onRefresh={getPosts} 
          // colors={['#9100CF','#0072CF','#98CE00']}
          />
        }
      >
        {isLoading ? <View /> : postList.map((post) => {
          return (
            <TouchableOpacity key={post.id} onPress={() => goToDetail(post.id)}>
              <View style={styles.postStyle} >
                <Text style={styles.postTitle}>{post.title}</Text>
                <Text style={styles.postBody} numberOfLines={2} ellipsizeMode="tail">{post.body}</Text>
              </View>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
      {isLoading ? <ActivityIndicator size={56} style={styles.loaderStyle} /> : <View />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  loaderStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  postStyle: {
    backgroundColor: 'cornsilk',
    borderRadius: 8,
    marginTop: 8,
    marginHorizontal: 8,
    padding: 8,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'capitalize',
  },
  postBody: {
    fontSize: 16,

  }
})