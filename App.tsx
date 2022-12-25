import React from 'react'
import { View, StyleSheet } from 'react-native'

import Constants from 'expo-constants'
import { StatusBar } from 'expo-status-bar'

import Routes from './src/routes'

import { UserInfoProvider } from './src/contexts/userInfo'

export default function App () {
  return (
    <View style={styles.container}>
      <UserInfoProvider>
          <StatusBar style="light" backgroundColor='#212121'/>

          <Routes />
      </UserInfoProvider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff'
  }
})
