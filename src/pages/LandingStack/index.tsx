import React from 'react';

import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import LandingPage from "./LandingPage"

export type LandingStackParamList = {
	LandingPage: undefined,
}

const LandingStack:React.FC = () => {
  const Stack = createNativeStackNavigator<LandingStackParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="LandingPage" component={LandingPage} />
    </Stack.Navigator>
  )
}

export const useNavigationLandingStack = () => useNavigation<NativeStackNavigationProp<LandingStackParamList>>()

export default LandingStack
