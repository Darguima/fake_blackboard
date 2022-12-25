import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CalendarPage from './CalendarPage'

export interface CalendarStackParamList {
  CalendarPage: undefined
}

const CalendarStack: React.FC = () => {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="CalendarPage" component={CalendarPage} />
    </Stack.Navigator>
  )
}

export default CalendarStack
