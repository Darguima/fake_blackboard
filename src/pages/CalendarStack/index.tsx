import React from 'react';

import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import CalendarPage from "./CalendarPage"

export type CalendarStackParamList = {
	CalendarPage: undefined,
}

const CalendarStack:React.FC = () => {
  const Stack = createNativeStackNavigator();

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

export const useNavigationCalendarStack = () => useNavigation<NativeStackNavigationProp<CalendarStackParamList>>()

export default CalendarStack
