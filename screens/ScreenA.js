import React, {useState} from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import { addNumber } from '../store/actions/numbersAction'
import { useSelector, useDispatch } from 'react-redux'

export default function ScreenA({ navigation }) {
  const numbers = useSelector(state => state.numbers)
  const dispatch = useDispatch()
  const [first, setfirst] = useState(1)


  console.log("ScreenA rendered")

  return (
    <View style={styles.container}>
        <Text>ScreenA</Text>
        {numbers.map((number, i) => <Text key={i}>{number}</Text>)}
        <Pressable style={styles.button} onPress={() => setfirst(prev => prev + 1)}>
            <Text>Update ScreenA State</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => dispatch(addNumber(3))}>
            <Text>Update Redux State{"\n"}Also used by{"\n"}ScreenMain and ScreenB </Text>
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