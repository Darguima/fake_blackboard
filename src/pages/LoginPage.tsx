import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'

import Header from '../components/Header'
import BBTextInput from '../components/BBTextInput'
import BBButton from '../components/BBButton'

import useUserInfo from '../contexts/userInfo'

const LoginPage: React.FC = () => {
  const { setName, setStudentNumber, setSchoolDomain } = useUserInfo()

  const [inputName, setInputName] = useState('')
  const [inputStudentNumber, setInputStudentNumber] = useState('')
  const [inputDomain, setInputDomain] = useState('alunos.uminho.pt')

  return (
    <View style={styles.container}>
      <Header title="Fake Blackboard"/>

      <View style={styles.content}>
        <View style={styles.textInputContainer}>
          <BBTextInput
            description="Nome:"
            placeholder="Insere o teu nome"
            value={inputName}
            onChangeText={setInputName}
          />
        </View>

        <View style={styles.textInputContainer}>
          <BBTextInput
            description="Número de aluno:"
            placeholder="Inventa um número de estudante"
            value={inputStudentNumber}
            onChangeText={setInputStudentNumber}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.textInputContainer}>
          <BBTextInput
            description="Domínio Universidade:"
            placeholder="Domínio da 'tua' universidade"
            value={inputDomain}
            onChangeText={setInputDomain}
            autoCapitalize="none"
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <BBButton
          text="Continuar"
          darkMode={true}
          onPress={() => {
            setName(inputName)
            setStudentNumber(inputStudentNumber)
            setSchoolDomain(inputDomain)
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  textInputContainer: {
    alignItems: 'center',

    width: '100%',
    padding: 8

  },

  buttonContainer: {
    height: 128
  }
})

export default LoginPage
