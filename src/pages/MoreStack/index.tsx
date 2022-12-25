import React from 'react';

import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

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

export const useNavigationMoreStack = () => useNavigation<NativeStackNavigationProp<MoreStackParamList>>()

export default MoreStack
