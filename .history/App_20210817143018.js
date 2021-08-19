import React, {useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

export default function App() {


  const [gioitinh, setGioitinh]= useState("chưa xác minh");
  const [text1, settext1]= useState(" ");
  return (
    <View>
    <Text style={style.text} >Gender: {gioitinh}</Text>
    <TouchableOpacity style={style.button}><Text>Change gender</Text></TouchableOpacity>
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
    padding: 20,
    borderColor: "red",
    marginLeft: 10,
    marginRight: 10,
  },
});
