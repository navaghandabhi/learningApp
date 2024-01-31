import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import DatePicker from 'react-native-date-picker'
import moment from 'moment'
import CustomDatePicker from '../Components/CustomDatePicker'

export default function DateAndTimePickers() {
    const [date, setDate] = useState(new Date())
    const [time, setTime] = useState(new Date())
    const [dateTime, setDateTime] = useState(new Date())
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenTime, setIsOpenTime] = useState(false)
    const [isOpenDateTime, setIsOpenDateTime] = useState(false)
    const [customDate, setCustomDate] = useState(new Date())

    return (
        <View>
            <CustomDatePicker value={customDate} onConfirm={setCustomDate} />
            <Button title='print Date' onPress={() => {
                console.log(customDate.toLocaleDateString());
            }} />
            <TextInput placeholder="Date " style={styles.datePickerStyle} onGestureEvent={() => { setIsOpen(true) }} readOnly={true} value={moment(date).format("DD MMM YYYY")}></TextInput>
            <TextInput placeholder="Time" style={styles.datePickerStyle} onGestureEvent={() => { setIsOpenTime(true) }} readOnly={true} value={moment(time).format("hh:mm a")}></TextInput>
            <TextInput placeholder="DateTime" style={styles.datePickerStyle} onGestureEvent={() => { setIsOpenDateTime(true) }} readOnly={true} value={moment(dateTime).format('DD/MM/yyyy hh:mm a')}></TextInput>
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
                }}
                date={date}
                mode={'date'}
                title={"select message date"}
                androidVariant="nativeAndroid"
            />
            <DatePicker
                modal
                open={isOpenTime}
                onCancel={() => {
                    setIsOpenTime(false)
                }}
                onConfirm={date => {
                    setTime(date);
                    setIsOpenTime(false);
                }}
                date={time}
                mode={'time'}
                title={"select message Time"}
                androidVariant="nativeAndroid"
            />
            <DatePicker
                modal
                open={isOpenDateTime}
                onCancel={() => {
                    setIsOpenDateTime(false)
                }}
                onConfirm={date => {
                    setDateTime(date);
                    setIsOpenDateTime(false);
                }}
                date={dateTime}
                mode={'datetime'}
                title={"select message Date Time"}
                androidVariant="nativeAndroid"
            />
            {/* <Text>{date.toISOString()}</Text> */}
        </View>
    )
}

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