import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'
import moment from 'moment'

const CustomDatePicker = ({ value,onConfirm }:{ value: Date,onConfirm:((date: Date) => void) }) => {
    const [date, setDate] = useState(value)
    const [isOpen, setIsOpen] = useState(false)
    return (
        <View>
            <TextInput placeholder="Custom Date Pick" style={styles.datePickerStyle} onGestureEvent={() => { setIsOpen(true) }} readOnly={true} value={moment(date).format('DD/MM/yyyy dddd')}></TextInput>
            {/* <DatePicker date={date} mode="datetime" /> */}
            <DatePicker
                modal
                open={isOpen}
                onCancel={() => {
                    setIsOpen(false)
                }}
                onConfirm={date => {
                    setDate(date);
                    setIsOpen(false);
                    onConfirm(date);
                }}
                date={date}
                mode={'date'}
                title={"select message date"}
                androidVariant="nativeAndroid"
            />
        </View>
    )
}

export default CustomDatePicker

const styles = StyleSheet.create({
    datePickerStyle: {
        height: 56,
        width: "auto",
        borderWidth: 1,
        marginHorizontal: 16,
        marginTop: 16,
        borderRadius: 8,
        color: 'black',
        paddingHorizontal: 16,
        fontSize: 18
    }
})