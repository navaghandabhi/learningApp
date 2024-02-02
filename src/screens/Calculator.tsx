import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Calculator() {
  const [result, setResult] = useState('')
  const [answer, setAnswer] = useState('')
  const calculate = (title: string) => {
    if (title === "AC") {
      setResult('')
      setAnswer('')
    }
    else if (title === "DL") {
      if (result.length >1) {
        setResult(result.substring(0, result.length - 1));
        setAnswer('')
        // if (!isNaN(parseFloat(result[result.length - 1]))) {
        //   const ans = Number(eval(result).toFixed(3)).toString();
        //   setAnswer(ans);
        // }
      }else{
        setResult('');
        setAnswer('')
      }
    }
    else if (title === "=") {
      if (result != "") {
        setAnswer(eval(result));
      }
    } else {
      setResult(result + title);
      setAnswer('')
      // if (!isNaN(parseFloat(result[result.length - 1]))) {
      //   const ans = Number(eval(result).toFixed(3)).toString();
      //   setAnswer(ans);
      // }
    }
  }
  const KeyButton = ({ title, type }: { title: string, type: string }) => {
    return (

      <TouchableOpacity onPress={() => { calculate(title) }}>
        <View style={styles.btnStyle}>
          <Text style={[styles.btnTextStyle, { color: type === "number" ? 'black' : "#6C22A6", }]}>{title}</Text>
        </View>
      </TouchableOpacity>

    );
  }
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.answerStyle}>{answer}</Text>
      <Text style={styles.resultStyle}>{result}</Text>
      <View style={styles.btnBox}>
        <KeyButton type="action" title="AC" />
        <KeyButton type="action" title="%" />
        <KeyButton type="action" title="/" />
        <KeyButton type="action" title="DL" />
        <KeyButton type="number" title="1" />
        <KeyButton type="number" title="2" />
        <KeyButton type="number" title="3" />
        <KeyButton type="action" title="*" />
        <KeyButton type="number" title="4" />
        <KeyButton type="number" title="5" />
        <KeyButton type="number" title="6" />
        <KeyButton type="action" title="-" />
        <KeyButton type="number" title="7" />
        <KeyButton type="number" title="8" />
        <KeyButton type="number" title="9" />
        <KeyButton type="action" title="+" />
        <KeyButton type="action" title="00" />
        <KeyButton type="number" title="0" />
        <KeyButton type="action" title="." />
        <KeyButton type="action" title="=" />
      </View>

    </View>
  )
}




const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  resultStyle: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'right',
    paddingRight: 16,
  },
  answerStyle: {
    fontSize: 42,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'right',
    paddingRight: 16,
  },
  btnBox: {
    backgroundColor: '#D4E7C5',
    paddingHorizontal: 8,
    paddingVertical: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    justifyContent: 'space-around',
  },
  btnTextStyle: {
    fontSize: 26,
    textAlign: 'center',
  },
  btnStyle: {
    height: 70,
    width: 70,
    margin: 8,
    // elevation: 8,
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: '#FFA447',
    justifyContent: 'center',
  },
})