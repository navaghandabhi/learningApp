import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

export default function ImagePickerView() {
  const [pickedImage, setPickedImage] = useState();
  const [cameraImage, setCameraImage] = useState();

  const imagePick = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
    }, () => { });
    console.log(result.assets?.forEach
      ((item) => {
        // console.log(item.uri);
        setPickedImage(item.uri)
      }
      ));
  }


  const imagePickCamera = async () => {
    const result = await launchCamera({
      mediaType: 'photo',
      saveToPhotos: true,
    }, () => { });
    console.log(result.assets?.forEach
      ((item) => {
        // console.log(item.uri);
        setCameraImage(item.uri);
      }
      ));
  }
  return (
    <View>
      <Button title='Pick Image From Gallery' onPress={imagePick} />
      {pickedImage == null ? <View /> :
        <Image source={{ uri: pickedImage }} style={styles.imageStyle}></Image>}
      <Button title='Pick Image From Camera' onPress={imagePickCamera} />
      {cameraImage == null ? <View /> :
        <Image source={{ uri: cameraImage }} style={styles.imageStyle}></Image>}
    </View>
  )
}

const styles = StyleSheet.create({
  imageStyle: {
    height: '30%',
    width: '30%',
    borderRadius: 12,
    alignSelf: 'center',
    margin: 8
  }
})