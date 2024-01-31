import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren, useState } from 'react'
import { Button } from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import SummerImage from '../../assets/images/sumer.jpg'
// import SummerImage from 'https://flutterawesome.com/content/images/2021/08/6.jpg'

type ImageProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const CustomImage = ({ imageUrl }: ImageProps) => {
  return (
    <Image style={styles.imageStyle} source={imageUrl} ></Image>
  )
}
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
      <CustomImage imageUrl={SummerImage}/>
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
    height: 200,
    width: 200,
    borderRadius: 12,
    alignSelf: 'center',
    margin: 8
  },

})