import React from 'react';
import { StyleSheet, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LandingStack from '../pages/LandingStack';
import CoursesStack from '../pages/CoursesStack';
import CalendarStack from '../pages/CalendarStack';
import ProfileStack from '../pages/ProfileStack';

const tabIcons = {
  landing: {
    active: require("../assets/icons/landingActive.jpg"),
    inactive: require("../assets/icons/landingInactive.jpg")
  },

  courses: {
    active: require("../assets/icons/coursesActive.jpg"),
    inactive: require("../assets/icons/coursesInactive.jpg")
  },

  calendar: {
    active: require("../assets/icons/calendarActive.jpg"),
    inactive: require("../assets/icons/calendarInactive.jpg")
  },

  profile: {
    active: require("../assets/icons/profileActive.jpg"),
    inactive: require("../assets/icons/profileInactive.jpg")
  },
}

const imagePicker = (name: "landing" | "courses" | "calendar" | "profile", focused: boolean) => {
  const status = focused ? "active" : "inactive"
  return <Image style={styles.tab} source={tabIcons[name][status]} />
}

const AppTabNavigator:React.FC = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.bottomTabContainer,
        }}
      >

        <Tab.Screen
          name="LandingTab"
          component={LandingStack}
          options={{
            title: "Fluxo",
            tabBarLabel: "",
            tabBarIcon: ({ focused }) => imagePicker("landing", focused),
          }}
        />

        <Tab.Screen
          name="CoursesTab"
          component={CoursesStack}
          options={{
            title: "Cursos",
            tabBarLabel: "",
            tabBarIcon: ({ focused }) => imagePicker("courses", focused),
          }}
        />

        <Tab.Screen
          name="CalendarTab"
          component={CalendarStack}
          options={{
            title: "Calendário",
            tabBarLabel: "",
            tabBarIcon: ({ focused }) => imagePicker("calendar", focused),
          }}
        />

        <Tab.Screen
          name="ProfileTab"
          component={ProfileStack}
          options={{
            title: "Mais",
            tabBarLabel: "",
            tabBarIcon: ({ focused }) => imagePicker("profile", focused),
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
    
  )
}

const styles = StyleSheet.create({
  bottomTabContainer: {
    height: 78,
    backgroundColor: "#fff",

    borderTopWidth: 1,
    borderTopColor: "#cdcdcd",
  },

  tab: {
    position: "absolute",
    top: 0,
    height: 77,
    width: "100%"
  }
});


export default AppTabNavigator
