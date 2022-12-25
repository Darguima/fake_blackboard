import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MorePage from "./MorePage"
import ProfilePage from "./ProfilePage"

export type MoreStackParamList = {
	MorePage: undefined,
	ProfilePage: undefined,
}

const MoreStack:React.FC = () => {
  const Stack = createNativeStackNavigator<MoreStackParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="MorePage" component={MorePage} />
      <Stack.Screen name="ProfilePage" component={ProfilePage} />
    </Stack.Navigator>
  )
}


export default MoreStack
