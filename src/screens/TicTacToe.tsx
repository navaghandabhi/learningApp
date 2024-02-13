import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'
import Icon from 'react-native-vector-icons/Feather'

type Props = NativeStackScreenProps<RootStackParamList, "TicTacToe">
const boxIdList = [
    {
        id: '1',
        token: '',
        icon: '',
    },
    {
        id: '2',
        token: '',
        icon: '',
    },
    {
        id: '3',
        token: '',
        icon: '',
    },
    {
        id: '4',
        token: '',
        icon: '',
    },
    {
        id: '5',
        token: '',
        icon: '',
    },
    {
        id: '6',
        token: '',
        icon: '',
    },
    {
        id: '7',
        token: '',
        icon: '',
    },
    {
        id: '8',
        token: '',
        icon: '',
    },
    {
        id: '9',
        token: '',
        icon: '',
    },
]
const TicTacToe = () => {
    const [userTurn, setOUserTurn] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);

    useEffect(()=>{
        restartGame()
    },[])
    function restartGame(): void {
        boxIdList.forEach((item) => {
            item.icon = "";
            item.token = "";
        });
        setOUserTurn(null);
        setIsGameOver(false);
    }

    function onGameOver(){
        setIsGameOver(true);
        Alert.alert("Game is Over")
    }
    function checkGameStatus() {
        if (boxIdList[0].token === boxIdList[1].token && boxIdList[1].token === boxIdList[2].token && boxIdList[0].token !== "") {
            onGameOver();
        }
        else  if (boxIdList[3].token === boxIdList[4].token && boxIdList[4].token === boxIdList[5].token && boxIdList[3].token !== "") {
            onGameOver();
        }
        else  if (boxIdList[6].token === boxIdList[7].token && boxIdList[7].token === boxIdList[8].token && boxIdList[6].token !== "") {
            onGameOver();
        }
        else  if (boxIdList[0].token === boxIdList[3].token && boxIdList[3].token === boxIdList[6].token && boxIdList[0].token !== "") {
            onGameOver();
        }
        else  if (boxIdList[1].token === boxIdList[4].token && boxIdList[4].token === boxIdList[7].token && boxIdList[1].token !== "") {
            onGameOver();
        }
        else  if (boxIdList[2].token === boxIdList[5].token && boxIdList[5].token === boxIdList[8].token && boxIdList[2].token !== "") {
            onGameOver();
        }
        else  if (boxIdList[0].token === boxIdList[4].token && boxIdList[4].token === boxIdList[8].token && boxIdList[0].token !== "") {
            onGameOver();
        }
        else  if (boxIdList[2].token === boxIdList[4].token && boxIdList[4].token === boxIdList[6].token && boxIdList[2].token !== "") {
            onGameOver();
        }
    }
    const title = `Player  ${userTurn === 0 || userTurn === null ? "O" : 'X'}'s Turn`;
    return (
        <View style={styles.container}>
            <View style={[styles.userTurnStyle, {}]}>
                <Text style={styles.textStyle}>{isGameOver ? `Game Over Winner is ${userTurn === 0 || userTurn === null ? "X" : 'O'}` : title}</Text>
            </View>
            <View style={styles.gameBoard}>
                {boxIdList.map((item, index) =>
                (
                    <TouchableOpacity key={index} style={styles.boxContainer}
                        onPress={() => {
                            if (item.token === "" && !isGameOver) {
                                if (userTurn === 0 || userTurn === null) {
                                    boxIdList[index].icon = "circle"
                                    boxIdList[index].token = "O"
                                } else {
                                    boxIdList[index].icon = "x"
                                    boxIdList[index].token = "X"
                                }
                                setOUserTurn(userTurn === 0 || userTurn === null ? 1 : 0);
                                checkGameStatus();
                            }

                        }
                        }>
                        <View style={styles.boxStyle}>
                            <Icon name={boxIdList[index].icon} size={44} />
                        </View>
                    </TouchableOpacity>
                )
                )}
            </View>
            <TouchableOpacity style={[styles.restartBtn, {}]}
                onPress={restartGame}>
                <Text style={styles.textStyle}>Restart The Game</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TicTacToe

const styles = StyleSheet.create({
    gameBoard: {
        margin: 16,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    boxContainer: {
        width: '33.33%',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxStyle: {
        height: 56,
        width: 56,
        borderRadius: 6,
        borderWidth: 1,
        marginTop: 4,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        alignItems: 'center'
    },
    textStyle: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600'
    },
    userTurnStyle: {
        width: "90%",
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        marginTop: 16,
        borderRadius: 12
    },
    restartBtn: {
        width: "90%",
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        marginTop: 16,
        borderRadius: 12
    },
})