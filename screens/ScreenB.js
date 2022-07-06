import React, {useState} from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'


export default function ScreenB({ navigation }) {
    const numbers = useSelector(state => state.numbers)
    const dispatch = useDispatch()
  const [first, setfirst] = useState(1)

  console.log("ScreenB rendered")

  return (
    <View style={styles.container}>
        <Text>ScreenB</Text>
        {numbers.map((number, i) => <Text key={i}>{number}</Text>)}
        <Pressable style={styles.button} onPress={() => setfirst(prev => prev + 1)}>
            <Text>Update ScreenB State</Text>
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