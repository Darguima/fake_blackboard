import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

const CalendarPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./calendarPagePayload.jpg')}
        style={styles.payloadImage}
        resizeMode="stretch"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  payloadImage: {
    width: '100%',
    height: '100%'
  }
})

export default CalendarPage
