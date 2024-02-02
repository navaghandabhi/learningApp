import { ActivityIndicator, Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Video from 'react-native-video';



const VideoViewer = () => {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator size={56}/> : <View />}
            <Video
                resizeMode={'contain'}
                source={{ uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" }}
                style={[styles.backgroundVideo]}
                controls={true}
                onLoadStart={() => setIsLoading(true)}
                onLoad={() => setIsLoading(false)}
            />
        </View>
    )
}

export default VideoViewer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundVideo: {
        height: 'auto',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
})