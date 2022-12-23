import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfilePage from "./ProfilePage"

const ProfileStack:React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="ProfilePage" component={ProfilePage} />
    </Stack.Navigator>
  )
}

export default ProfileStack
