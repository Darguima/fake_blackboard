import React, { useState } from "react"
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';

interface InputsProps {
  setName: React.Dispatch<React.SetStateAction<string>>
  setImage: React.Dispatch<React.SetStateAction<string>>
}

const Inputs:React.FC<InputsProps> = ({setName, setImage}) => {
  const [newName, setNewName] = useState("")

  return(
    <View style={styles.container}>
      <View style={styles.subContainer}>
      <Text>Name:</Text>
      <TextInput onChangeText={setNewName} value={newName} style={styles.nameInput}/>
      </View>

      <TouchableOpacity onPress={() => setName(newName)} style={styles.button}>
        <Text>Clica em mim para Continuar</Text>        
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1
  },

  subContainer: {
    width: "100%",
    alignItems: "center"
  },

  nameInput: {
    backgroundColor: "grey",
    width: "80%"
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    width: "80%",
    height: 36
  }
})

export default Inputs
