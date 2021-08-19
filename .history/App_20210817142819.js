import React, {useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

export default function App() {


  const [gioitinh, setGioitinh]= useState("chưa xác minh");
  return (
    <View>
    <Text style={style.text} >Gender: {gioitinh}</Text>
    <TouchableOpacity style={style.button}>Change gender</TouchableOpacity>
    <Text>Text của màn con: {text1}</Text>
    </View>
  )
}

const style =StyleSheet.create({
  text: {
    fontSize: 18,
    margin: 10,
  },
  button: {
    borderWidth: 1,
    padding: 10,
    borderColor: "red",
  },
});
