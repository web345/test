import React, {useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'
import Form2 from "./form2"
export default function App() {


  const [gioitinh, setGioitinh]= useState("Female");
  const [text1, settext1]= useState(" ");

  const changeGender=()=>{
    setGioitinh("Male");
  }

  const changeText=(val)=>{
    settext1(val);
  }
  return (
    <SafeAreaView>
      <View style={style.form1}>
    <Text style={style.text} >Gender: {gioitinh}aaaa</Text>
    <TouchableOpacity style={style.button} onPress={changeGender}><Text style={style.text}>Change gender</Text></TouchableOpacity>
    <Text style={style.text} >Text của màn con: {text1}</Text>
    </View>
    <Form2 gioitinh={gioitinh} text3={changeText}/>
    </SafeAreaView>
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
    margin: 10,
  },
  form1: {
    marginBottom: 30,
  },
});
