import React from 'react';

import LoginPage from "../pages/LoginPage"
import ProfilePage from "../pages/ProfilePage"

import useUserInfo from '../contexts/userInfo';

const Routes:React.FC = () => {
  const {name, studentNumber, schoolDomain} = useUserInfo()

  return (
      <>
        {
          name == "" || studentNumber == "" || schoolDomain == "" ?
          <LoginPage/>
          :
          <ProfilePage/>
        }
      </>
  )
}

export default Routes
