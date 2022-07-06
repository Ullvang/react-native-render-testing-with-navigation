import React, {useState} from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import {addComponent} from "../store/actions/componentAction.js"

export default function ScreenC({ navigation }) {
  const components = useSelector(state => state.components)
  const dispatch = useDispatch()

  const [first, setfirst] = useState(1)

  console.log("ScreenC rendered")

  return (
    <View style={styles.container}>
        <Text>ScreenC</Text>
        {components.map((component, i) => {
            // console.log("components render in ScreenC")
            return <Text key={i}>{component}</Text>
            })
        }
        <Pressable style={styles.button} onPress={() => setfirst(prev => prev + 1)}>
            <Text>Update ScreenC State</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => dispatch(addComponent("yes"))}>
            <Text>Update Redux State{"\n"}Also used by ScreenMain</Text>
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