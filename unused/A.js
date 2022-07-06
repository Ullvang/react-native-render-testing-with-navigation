import React from 'react'
import { Pressable, Text, View } from 'react-native'

export default function A({number, setNumber}) {
    console.log("A rendered")
  return (
    <View style={{borderColor: "red", borderWidth: 2, margin: 5}}>
        <Pressable onPress={() => setNumber(prev => prev + 1)}>
        <Text>I'm pressable (A)</Text>
        </Pressable>
        <Text>A {number}</Text>
    </View>
  )
}

