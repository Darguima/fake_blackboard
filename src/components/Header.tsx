import React from "react"
import { View, StyleSheet, Text } from 'react-native';

interface HeaderProps {
  title: string,
}

const Header:React.FC<HeaderProps> = ({title}) => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: 52,
    
    backgroundColor: "#262626",
  },

  title: {
    color: "#fff",
    fontSize: 18
  }
})

export default Header
