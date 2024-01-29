import { StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { RoundButton } from './StopwatchView'
export default function TimerView() {
  const [minutes, setMinutes] = useState('0');
  const [seconds, setSeconds] = useState('0');
  const [time, setTime] = useState('00:00:000');
  const [isPlaying, setIsPlaying] = useState(false);

  const timer = useRef()
  let ms = 0
  function starTimer() {
    let time = 0;
    if(ms<=0){
      time = (Number(minutes) * 60000) + (Number(seconds) * 1000)
      ms = (Number(minutes) * 60000) + (Number(seconds) * 1000)
      
    }
    if(time>0){
      setSeconds("0")
      setMinutes("0")
      setIsPlaying(true);
      timer.current = setInterval(() => {
        time = time - 100
        ms= time
        if(time>0){
          const timestamp = format(time)
          setTime(timestamp);
        }else{
          setIsPlaying(false);
          setTime('00:00:000');
        }   
      }, 100);
    }
  }

  function stopTimer() {
    setIsPlaying(false);
    setTime("00:00:000");
    ms = 0
    clearInterval(timer.current);
  }

  function pauseTimer() {
    clearInterval(timer.current);
    setIsPlaying(false);
  }

  function format(time) {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliSeconds = Math.floor((time % 1000) / 10);
    return minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0") + ":" + milliSeconds.toString().padStart(3, "000")
  }
  return (
    <View style={styles.mainContainer}>
      {<Text style={styles.timerTextStyle}>{time}</Text>}
      {<Text style={styles.timerTextStyle}>{ms}</Text>}
      <View style={styles.controllers}>
        {!isPlaying ?
          <TextInput
            style={styles.inputStyle}
            placeholder='00'
            maxLength={2}
            keyboardType='number-pad'
            onChangeText={(val) => {
              setMinutes(val)
              if (val.length == 2) {
              }
            }}
          ></TextInput> : <View />}
        {!isPlaying ? <TextInput

          style={styles.inputStyle}
          placeholder='00'
          maxLength={2}
          keyboardType='number-pad'
          onChangeText={setSeconds}
        ></TextInput> : <View />}
      </View>
      <View style={styles.controllers}>
        {!isPlaying? <RoundButton name="play" onPress={() => starTimer()}></RoundButton> : <RoundButton name="pause" onPress={() => pauseTimer()}></RoundButton>}
        <RoundButton name="stop" onPress={() => { stopTimer(); }}></RoundButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginVertical: 26,
    justifyContent: 'space-between'
  },
  timerTextStyle: {
    textAlign: 'center',
    fontSize: 42,
    fontWeight: 'bold'
  },
  controllers: {
    alignSelf: 'center',
    flexDirection: 'row'
  },
  inputStyle: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 16,
    padding: 8,
    borderRadius: 8,
    width: 42,
    fontSize: 20,
  }
})