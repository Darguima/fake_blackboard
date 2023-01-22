import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'

import Header from '../../components/Header'
import WarningComponent from './components/WarningComponent'

import getWarnings from './warning'

const LandingPage: React.FC = () => {
  const warnings = getWarnings()
  return (
    <View style={styles.container}>
      <Header title='Fluxo de atividades'/>

      <FlatList
        data={warnings}
        renderItem={WarningComponent}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default LandingPage
