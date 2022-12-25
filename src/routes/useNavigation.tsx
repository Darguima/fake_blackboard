import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { LandingStackParamList } from '../pages/LandingStack'
import { CoursesStackParamList } from '../pages/CoursesStack'
import { CalendarStackParamList } from '../pages/CalendarStack'
import { MoreStackParamList } from '../pages/MoreStack'

export const useNavigationLandingStack = () => useNavigation<NativeStackNavigationProp<LandingStackParamList>>()
export const useNavigationCoursesStack = () => useNavigation<NativeStackNavigationProp<CoursesStackParamList>>()
export const useNavigationCalendarStack = () => useNavigation<NativeStackNavigationProp<CalendarStackParamList>>()
export const useNavigationMoreStack = () => useNavigation<NativeStackNavigationProp<MoreStackParamList>>()
