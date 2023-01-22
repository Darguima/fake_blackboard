import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text, TouchableOpacityProps, ViewStyle } from 'react-native'

interface BBButtonProps extends TouchableOpacityProps {
  text: string
  darkMode?: boolean

  containerStyle?: ViewStyle
}

const BBButton: React.FC<BBButtonProps> = ({ text, darkMode = false, containerStyle = {}, ...touchableOpacityProps }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        style={[styles.button, darkMode ? styles.buttonDark : {}]}
        {...touchableOpacityProps}
      >
        <Text style={[styles.buttonText, darkMode ? styles.buttonTextDark : {}]}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%'
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: 4,

    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 4,

    minWidth: 100,
    height: 36
  },

  buttonDark: {
    backgroundColor: '#262626',
    borderColor: '#fff'
  },

  buttonText: {
    color: '#000',
    fontSize: 12
  },

  buttonTextDark: {
    color: '#fff'
  }
})

export default BBButton
