import React from "react"

import { Button, Text, TextInput, View } from "react-native"
const ExamComponent = () => {
  const [inputValue, setInputValue] = React.useState("")
  const [oddNumber, setOddNumber] = React.useState(false)

  const acceptNumber = (value) => {
    if (value && isNaN(value)) {
      return
    }
    console.log()
    setInputValue(value)
    setOddNumber(false)
  }
  const checkOddNumber = () => {
    let number_type =
      inputValue % 2 === 0 ? "This is a even number" : "This is a odd number"
    setOddNumber(number_type)
  }

  return (
    <View>
      <Text>ExamComponent</Text>
      <TextInput
        inputMode="numeric"
        type="number"
        placeholder="Enter Number"
        onChangeText={(value) => acceptNumber(value)}
        value={inputValue}
      />
      <Button title="Check Number" onPress={checkOddNumber} />

      {oddNumber && inputValue && (
        <View>
          <Text>{oddNumber}</Text>
        </View>
      )}
    </View>
  )
}

export default ExamComponent
