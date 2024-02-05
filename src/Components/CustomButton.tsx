import { StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ColorsCode } from '../data/theme/Colors'

const CustomButton = ({ title, onPress }: { title: string, onPress: () => void }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.btnStyle}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    btnStyle: {
        height: 56,
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: ColorsCode.primaryColor,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 12
    },
    title: {
        color: 'white',
    }
})