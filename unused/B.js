import React from 'react'
import { Text, View, Pressable } from 'react-native'

export default function B({setNumber}) {
    console.log("B rendered")
  return (
    <View style={{borderColor: "red", borderWidth: 2, margin: 5}}>
        <Pressable onPress={() => setNumber(prev => prev + 1)}>
        <Text>I'm pressable (B)</Text>
        </Pressable>
        <Text>B</Text>
    </View>
  )
}
