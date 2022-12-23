import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { StatusBar } from 'expo-status-bar';

import LoginPage from "./src/pages/LoginPage"
import ProfilePage from "./src/pages/ProfilePage"

export default function App() {
  const [name, setName] = useState("")
  const [studentNumber, setStudentNumber] = useState("")
  const [schoolDomain, setSchoolDomain] = useState("")

  return (
    <View style={styles.container}>

      <StatusBar style="light" backgroundColor='#212121'/>

      {
        name == "" || studentNumber == "" || schoolDomain == "" ?
        <LoginPage setName={setName} setStudentNumber={setStudentNumber} setSchoolDomain={setSchoolDomain}/>
        :
        <ProfilePage name={name} studentNumber={studentNumber} schoolDomain={schoolDomain} />
      }

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff'
  },
});
