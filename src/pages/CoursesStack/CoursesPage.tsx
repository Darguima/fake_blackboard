import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import FullWidthImage from '../../components/FullWidthPicture'

const CoursesPage: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <FullWidthImage
        source={require('./coursePagePayload.jpg')}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default CoursesPage
