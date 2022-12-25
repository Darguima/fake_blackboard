import React from 'react';

import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import CoursesPage from "./CoursesPage"

export type CoursesStackParamList = {
	CoursesPage: undefined,
}

const CoursesStack:React.FC = () => {
  const Stack = createNativeStackNavigator();

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

export const useNavigationCoursesStack = () => useNavigation<NativeStackNavigationProp<CoursesStackParamList>>()

export default CoursesStack
