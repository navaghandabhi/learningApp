import { StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const StopwatchView = () => {
  const [timer, setTimer] = useState('00:00:00');
  const [isPlaying, setIsPlaying] = useState(false);
  const [flags, setFlags] = useState([]);
  const countRef = useRef();
  const scrollViewRef = useRef();
  function starTimer() {
    setIsPlaying(true);
    let time = 0;
    countRef.current = setInterval(() => {
      time = time + 1;
      const timeStamp = format(time)
      setTimer(timeStamp)
    }, 1000);
  }

  function pauseTimer() {
    clearInterval(countRef.current);
    setIsPlaying(false);
  }
  function stopTimer() {
    setIsPlaying(false);
    setTimer('00:00:00');
    setFlags([])
    clearInterval(countRef.current);
  }

  function format(time) {
    const hours = Math.floor(time / 60 / 24);
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0")
  }

  const addFlag = () => {
    setFlags((prev) => [...prev, timer]);
    scrollViewRef.current?.scrollTo({ y: '70%', animated: true })
  }
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.timerTextStyle}>{timer}</Text>
      <ScrollView ref={scrollViewRef}>
        <View style={styles.flagList}>
          {
            flags.slice().reverse().map((flag) => {
              return (<Text style={styles.flagText}>{flag}</Text>);
            })
          }
        </View>
      </ScrollView>
      <View style={styles.controllers}>
        {!isPlaying ? <View style={{ height: 80, width: 80, }} /> : <RoundButton name="flag" onPress={() => { addFlag(); }}></RoundButton>}
        {!isPlaying ? <RoundButton name="play" onPress={() => starTimer()}></RoundButton> : <RoundButton name="pause" onPress={() => pauseTimer()}></RoundButton>}
        <RoundButton name="stop" onPress={() => { stopTimer(); }}></RoundButton>
      </View>
    </View>
  )
}

export default StopwatchView

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginVertical: 26,
    justifyContent: 'space-between'
  },
  flagList: {
    height: '70%',
    marginHorizontal: 16,

  },
  flagText: {
    fontSize: 22,
    paddingVertical: 2
  },
  controllers: {
    alignSelf: 'center',
    flexDirection: 'row'
  },
  timerTextStyle: {
    textAlign: 'center',
    fontSize: 42,
    fontWeight: 'bold'
  },
  roundBtnStyle: {
    margin: 8,
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    height: 72,
    width: 72,
    borderRadius: 36,
    backgroundColor: 'grey'
  }
})

export const RoundButton = ({ name, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.roundBtnStyle}>
        <Icon name={name} size={42}></Icon>
      </View>
    </TouchableOpacity>
  );
} 