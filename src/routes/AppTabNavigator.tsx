import React from 'react'
import { StyleSheet, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import LandingStack from '../pages/LandingStack'
import CoursesStack from '../pages/CoursesStack'
import CalendarStack from '../pages/CalendarStack'
import MoreStack from '../pages/MoreStack'

import LandingIcon from '../assets/icons/bottomMenu/landingIcon.svg'
import CoursesIcon from '../assets/icons/bottomMenu/coursesIcon.svg'
import CalendarIcon from '../assets/icons/bottomMenu/calendarIcon.svg'
import MoreIcon from '../assets/icons/bottomMenu/moreIcon.svg'

const AppTabNavigator: React.FC = () => {
  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,

          tabBarStyle: styles.bottomTabContainer,

          tabBarLabelStyle: styles.tabText,

          tabBarActiveBackgroundColor: '#fbf4fc',
          tabBarInactiveBackgroundColor: '#fff',

          tabBarActiveTintColor: '#a334b6',
          tabBarInactiveTintColor: '#666'
        }}
      >

        <Tab.Screen
          name="LandingTab"
          component={LandingStack}
          options={{
            title: 'Fluxo',

            tabBarIcon: ({ focused, color }) => (
              <View style={[styles.tab, focused ? styles.tabFocused : {}]}>
                <LandingIcon color={color} style={styles.tabIcon} height={24} width={24} />
              </View>
            )
          }}
        />

        <Tab.Screen
          name="CoursesTab"
          component={CoursesStack}
          options={{
            title: 'Cursos',

            tabBarIcon: ({ focused, color }) => (
              <View style={[styles.tab, focused ? styles.tabFocused : {}]}>
                <CoursesIcon color={color} style={styles.tabIcon} height={24} width={24} />
              </View>
            )
          }}
        />

        <Tab.Screen
          name="CalendarTab"
          component={CalendarStack}
          options={{
            title: 'Calendário',

            tabBarIcon: ({ focused, color }) => (
              <View style={[styles.tab, focused ? styles.tabFocused : {}]}>
                <CalendarIcon color={color} style={styles.tabIcon} height={24} width={24} />
              </View>
            )
          }}
        />

        <Tab.Screen
          name="MoreTab"
          component={MoreStack}
          options={{
            title: 'Mais',

            tabBarIcon: ({ focused, color }) => (
              <View style={[styles.tab, focused ? styles.tabFocused : {}]}>
                <MoreIcon color={color} style={styles.tabIcon} height={24} width={24} />
              </View>
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>

  )
}

const styles = StyleSheet.create({
  bottomTabContainer: {
    height: 78,

    borderTopWidth: 1,
    borderTopColor: '#cdcdcd'
  },

  tab: {
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    height: '100%',

    borderTopWidth: 4,
    borderTopColor: '#00000000'
  },

  tabFocused: {
    borderTopColor: '#a334b6'
  },

  tabIcon: {
    marginBottom: 16
  },

  tabText: {
    fontSize: 11,
    position: 'absolute',
    bottom: 12
  }
})

export default AppTabNavigator
