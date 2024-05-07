import { Alert, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'
import Icon from 'react-native-vector-icons/Feather'
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons'

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
    const [isGameDraw, setIsGameDraw] = useState(false);
    const size = Dimensions.get('window')
    useEffect(() => {
        restartGame()
    }, [])
    function restartGame(): void {
        boxIdList.forEach((item) => {
            item.icon = '';
            item.token = "";
        });
        setOUserTurn(null);
        setIsGameOver(false);
        setIsGameDraw(false);
    }

    function onGameOver() {
        setIsGameOver(true);
        Alert.alert("Game is Over");
    }

    function onGameDraw() {
        setIsGameOver(true);
        Alert.alert("Game is Draw");
    }
    function checkGameStatus() {
        if (boxIdList[0].token === boxIdList[1].token && boxIdList[1].token === boxIdList[2].token && boxIdList[0].token !== "") {
            onGameOver();
        }
        else if (boxIdList[3].token === boxIdList[4].token && boxIdList[4].token === boxIdList[5].token && boxIdList[3].token !== "") {
            onGameOver();
        }
        else if (boxIdList[6].token === boxIdList[7].token && boxIdList[7].token === boxIdList[8].token && boxIdList[6].token !== "") {
            onGameOver();
        }
        else if (boxIdList[0].token === boxIdList[3].token && boxIdList[3].token === boxIdList[6].token && boxIdList[0].token !== "") {
            onGameOver();
        }
        else if (boxIdList[1].token === boxIdList[4].token && boxIdList[4].token === boxIdList[7].token && boxIdList[1].token !== "") {
            onGameOver();
        }
        else if (boxIdList[2].token === boxIdList[5].token && boxIdList[5].token === boxIdList[8].token && boxIdList[2].token !== "") {
            onGameOver();
        }
        else if (boxIdList[0].token === boxIdList[4].token && boxIdList[4].token === boxIdList[8].token && boxIdList[0].token !== "") {
            onGameOver();
        }
        else if (boxIdList[2].token === boxIdList[4].token && boxIdList[4].token === boxIdList[6].token && boxIdList[2].token !== "") {
            onGameOver();
        } else {
            const isGameDraw = boxIdList.every((item) => item.token !== "");
            console.log(isGameDraw);
            if (isGameDraw === true) {
                setIsGameDraw(true)
                onGameDraw();
            } else {
                setIsGameDraw(false)
            }
        }
    }
    const title = `Player  ${userTurn === 0 || userTurn === null ? "O" : 'X'}'s Turn`;
    return (
        <View style={styles.container}>
            <View style={[styles.userTurnStyle, {}]}>
                <Text style={styles.textStyle}>{isGameDraw ? "Game Is Draw" : isGameOver ? `Game Over Winner is ${userTurn === 0 || userTurn === null ? "X" : 'O'} 😊` : title}</Text>
            </View>
            <View style={styles.gameBoard}>
                {boxIdList.map((item, index) =>
                (
                    <TouchableOpacity key={index} style={[styles.boxContainer,
                    {
                        height: size.width * 0.3,
                        width: size.width * 0.3,
                        borderWidth: 1,
                        // borderColor: 'black',
                        borderLeftColor: index == 0 || index == 3 || index == 6 ? 'white' : 'black',
                        borderRightColor: index == 2 || index == 5 || index == 8 ? 'white' : 'black',
                        borderTopColor: index == 0 || index == 1 || index == 2 ? 'white' : 'black',
                        borderBottomColor: index == 6 || index == 7 || index == 8 ? 'white' : 'black',
                    }
                    ]}
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
                            {boxIdList[index].icon == '' ? <MIcon name='blank' size={44} ></MIcon> : <Icon name={boxIdList[index].icon} size={44} />}
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
        marginTop: 32,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    boxContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxStyle: {
        height: 56,
        width: 56,
        borderRadius: 6,
        margin: 8,
        // borderWidth: 1,
        // borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        alignItems: 'center',
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