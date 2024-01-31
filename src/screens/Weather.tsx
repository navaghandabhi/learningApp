import { ActivityIndicator, Alert, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import Geolocation from 'react-native-geolocation-service'
import Geocoder from 'react-native-geocoding'

const Weather = () => {
  Geocoder.init("xxxxxxxxxxxxxxxxxxxxxxxxx");
  const api_key = "d990c9a1840d41329bc95041243001";

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        // console.log(`position : ${position.coords.latitude},${position.coords.longitude}`);
        setLocation(`${position.coords.latitude},${position.coords.longitude}`)
        Geocoder.from(position.coords.latitude,position.coords.longitude)
        .then(response => {
          console.log(response.results[0]);   
        }).catch((error)=>{
          console.log(error);
        })

      },
      (error) => {
        Alert.alert(error.code.toString(), error.message)
        // Alert.prompt(error.code.toString(),error.message)
        // See error code charts below.
        // console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }
  useEffect(() => {
    getLocation();
  }, [])

  const [cityName, setCityName] = useState('')
  const [location, setLocation] = useState('')
  const [loader, setLoader] = useState(false)
  const [weatherData, setWeatherData] = useState({});
  function fetchWeather() {
    setLoader(true);
    const api = `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${cityName}&aqi=no`;
    fetch(api).then(response => response.json())
      .then((json) => {
        setWeatherData(json);
        setLoader(false);
      });
    // console.log('calling fetch weather');
  }
  return (
    <ImageBackground source={require("../../assets/images/cloudyday.jpg")} style={styles.bgImageStyle}>
      <View>
        <TextInput
          placeholder='City Name'
          style={styles.inputStyle}
          placeholderTextColor={'black'}
          onChangeText={setCityName}
          onSubmitEditing={fetchWeather}
        >
        </TextInput>
        {
          weatherData.location != null ?
            <View>
              <Text style={styles.cityName}>{weatherData.location.name} {weatherData.location.region}</Text>
              <Text style={[styles.cityName, { marginTop: 0 }]}>{weatherData.location.country}</Text>
              <Text style={styles.dateStyle}>{weatherData.current.last_updated}</Text>
              <View style={{ flexDirection: 'row', marginLeft: 16, marginTop: 16 }}>
                <Image source={require('../../assets/images/cloud.jpg')} style={styles.currentImage}></Image>
                <View>
                  <Text style={styles.tempStyle}>{weatherData.current.temp_c}°C</Text>
                  <Text style={styles.tempSubtitle}>{weatherData.current.condition.text}</Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={styles.tempSubtitle}>wind kph: {weatherData.current.wind_kph}</Text>
                  <Text style={styles.tempSubtitle}>wind mph: {weatherData.current.wind_mph}</Text>
                  <Text style={styles.tempSubtitle}>humidity: {weatherData.current.humidity}</Text>
                </View>
              </View>
            </View>
            : weatherData.error != null ?
              <Text style={styles.cityName}>{weatherData.error.message}</Text>
              : <View />
        }
        {
          loader ?
            <ActivityIndicator size="large" color="#00ff00" /> : <View />
        }
      </View>

      <View>
        <Text style={styles.location}>{location}</Text>
      </View>
    </ImageBackground>
  )
}

export default Weather

const styles = StyleSheet.create({
  bgImageStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  currentImage: {
    marginTop: 16,
    height: 65,
    width: 65,
    borderRadius: 12,
  },
  location: {
    fontSize: 16,
    marginBottom: 100,
    textAlign: 'center'
  },
  cityName: {
    marginHorizontal: 16,
    marginTop: 16,
    fontSize: 28,
    color: "black",
    fontWeight: 'bold',
    textAlign: 'center'
  },
  dateStyle: {
    marginHorizontal: 16,
    fontSize: 16,
    color: "black",
    textAlign: 'center'
  },
  countryName: {
    marginHorizontal: 16,
    fontSize: 24,
    color: "black",
    fontWeight: 'bold',
    textAlign: 'center'
  },
  tempStyle: {
    marginHorizontal: 16,
    fontSize: 42,
    color: "white",
    fontWeight: 'bold',
    textAlign: 'left'
  },
  tempSubtitle: {
    marginHorizontal: 16,
    fontSize: 18,
    color: "white",
    textAlign: 'left'
  },
  inputStyle: {
    borderWidth: 1,
    margin: 8,
    marginTop: 60,
    borderRadius: 10,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    fontSize: 18,
    color: 'black',
  }
})