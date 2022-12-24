import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MorePage from "./MorePage"

const MoreStack:React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="MorePage" component={MorePage} />
    </Stack.Navigator>
  )
}

export default MoreStack
