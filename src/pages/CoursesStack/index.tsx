import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CoursesPage from './CoursesPage'

export interface CoursesStackParamList {
  CoursesPage: undefined
}

const CoursesStack: React.FC = () => {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="CoursesPage" component={CoursesPage} />
    </Stack.Navigator>
  )
}

export default CoursesStack
