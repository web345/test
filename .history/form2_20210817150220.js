import React, {useState}from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export default function form2(props) {

    const [text2, setText2]=useState(" "); 
    const getText=()=>{
        props.text3(setText2);
    }
    return (
        <View style={style.container}>
        <TextInput placeholder={"Mời nhập chữ"} style={style.input} onChangeText={(txt)=>setText2(txt)}></TextInput>
        <TouchableOpacity style={style.button} onPress={getText}><Text style={style.text}>Send text</Text></TouchableOpacity>
        <Text style={style.text}>Gender từ màn cha: {props.gioitinh}</Text>
        </View>
    )
}

const style=StyleSheet.create({
    container: {
        marginLeft: 7,
        marginRight: 7,
    },
    text: {
        fontSize: 18,
        margin: 10,
      },
      button: {
        borderWidth: 1,
        padding: 10,
        borderColor: "red",
        margin: 10,
      },
      input: {
          borderWidth: 1,
          padding: 10,
          margin: 10,
      }
})
