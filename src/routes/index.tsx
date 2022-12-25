import React from 'react'

import LoginPage from '../pages/LoginPage'
import AppTabNavigator from './AppTabNavigator'

import useUserInfo from '../contexts/userInfo'

const Routes: React.FC = () => {
  const { name, studentNumber, schoolDomain } = useUserInfo()

  return (
      <>
        {
          name === '' || studentNumber === '' || schoolDomain === ''
            ? <LoginPage/>
            : <AppTabNavigator/>
        }
      </>
  )
}

export default Routes
