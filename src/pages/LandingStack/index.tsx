import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

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


export default LandingStack
