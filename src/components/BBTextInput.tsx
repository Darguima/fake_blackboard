import React from 'react'
import { View, StyleSheet, Text, TextInput, TextInputProps } from 'react-native'

interface BBTextInputProps extends TextInputProps {
  description?: string
}

const BBTextInput: React.FC<BBTextInputProps> = ({ description = '', ...inputProps }) => {
  return (
    <View style={styles.container}>

      {description !== '' &&
        <Text style={styles.textInputTitle}>{description}</Text>
      }

      <TextInput
        style={styles.textInput}
        {...inputProps}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center'
  },

  textInputTitle: {
    width: '90%',
    textAlign: 'left'
  },

  textInput: {
    width: '90%',
    height: 40,

    marginVertical: 4,
    paddingHorizontal: 4,

    backgroundColor: '#fff',

    borderColor: '#8c8c8c',
    borderWidth: 2,
    borderRadius: 1
  }
})

export default BBTextInput
