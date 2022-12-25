import React from 'react'
import { StyleSheet, Image } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import LandingStack from '../pages/LandingStack'
import CoursesStack from '../pages/CoursesStack'
import CalendarStack from '../pages/CalendarStack'
import MoreStack from '../pages/MoreStack'

const tabIcons = {
  landing: {
    active: require('../assets/icons/landingActive.jpg'),
    inactive: require('../assets/icons/landingInactive.jpg')
  },

  courses: {
    active: require('../assets/icons/coursesActive.jpg'),
    inactive: require('../assets/icons/coursesInactive.jpg')
  },

  calendar: {
    active: require('../assets/icons/calendarActive.jpg'),
    inactive: require('../assets/icons/calendarInactive.jpg')
  },

  more: {
    active: require('../assets/icons/moreActive.jpg'),
    inactive: require('../assets/icons/moreInactive.jpg')
  }
}

const imagePicker = (name: 'landing' | 'courses' | 'calendar' | 'more', focused: boolean) => {
  const status = focused ? 'active' : 'inactive'
  return <Image style={styles.tab} source={tabIcons[name][status]} />
}

const AppTabNavigator: React.FC = () => {
  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.bottomTabContainer
        }}
      >

        <Tab.Screen
          name="LandingTab"
          component={LandingStack}
          options={{
            title: 'Fluxo',
            tabBarLabel: '',
            tabBarIcon: ({ focused }) => imagePicker('landing', focused)
          }}
        />

        <Tab.Screen
          name="CoursesTab"
          component={CoursesStack}
          options={{
            title: 'Cursos',
            tabBarLabel: '',
            tabBarIcon: ({ focused }) => imagePicker('courses', focused)
          }}
        />

        <Tab.Screen
          name="CalendarTab"
          component={CalendarStack}
          options={{
            title: 'Calendário',
            tabBarLabel: '',
            tabBarIcon: ({ focused }) => imagePicker('calendar', focused)
          }}
        />

        <Tab.Screen
          name="MoreTab"
          component={MoreStack}
          options={{
            title: 'Mais',
            tabBarLabel: '',
            tabBarIcon: ({ focused }) => imagePicker('more', focused)
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>

  )
}

const styles = StyleSheet.create({
  bottomTabContainer: {
    height: 78,
    backgroundColor: '#fff',

    borderTopWidth: 1,
    borderTopColor: '#cdcdcd'
  },

  tab: {
    position: 'absolute',
    top: 0,
    height: 77,
    width: '100%'
  }
})

export default AppTabNavigator
