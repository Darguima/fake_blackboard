import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const CoursesPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>CoursesPage</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CoursesPage
