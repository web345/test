import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export default function form2() {
    return (
        <View style={style.container}>

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
      }
})
