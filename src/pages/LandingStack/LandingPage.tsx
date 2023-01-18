import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import FullWidthImage from '../../components/FullWidthPicture'

const LandingPage: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <FullWidthImage
        source={require('./landingPagePayload.jpg')}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default LandingPage
