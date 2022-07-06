import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

export default function ScreenC({ navigation }) {
const numbers = useSelector(state => state.numbers)
// const components = useSelector(state => state.components)
const dispatch = useDispatch()


  console.log("ScreenMain rendered")
  const [first, setfirst] = useState(1)

  return (
    <View style={styles.container}>
        <Text>ScreenMain</Text>
        {numbers.map((numbers, i) => {
            // console.log("numberss render in ScreenC")
            return <Text key={i}>{numbers}</Text>
            })
        }
        {/* {components.map((component, i) => {
            // console.log("components render in ScreenC")
            return <Text key={i}>{component}</Text>
            })
        } */}
        <Pressable style={styles.button} onPress={() => setfirst(prev => prev + 1)}>
            <Text>Update ScreenMain State</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => navigation.navigate('ScreenA')}>
            <Text>Go to ScreenA</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate('ScreenB')}>
            <Text>Go to ScreenB</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate('ScreenC')}>
            <Text>Go to ScreenC</Text>
        </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        margin: 10,
        borderColor: "blue",
        borderWidth: 3,
        padding: 5
    }
})