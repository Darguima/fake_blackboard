import React, { createContext, ReactNode, useContext, useState } from 'react'

interface UserInfoContextData {
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
  studentNumber: string
  setStudentNumber: React.Dispatch<React.SetStateAction<string>>
  schoolDomain: string
  setSchoolDomain: React.Dispatch<React.SetStateAction<string>>
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const UserInfoContext = createContext<UserInfoContextData>({
  name: '',
  studentNumber: '',
  schoolDomain: ''
} as UserInfoContextData)

export const UserInfoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [name, setName] = useState('')
  const [studentNumber, setStudentNumber] = useState('')
  const [schoolDomain, setSchoolDomain] = useState('')

  return (
    <UserInfoContext.Provider value={{
      name,
      setName,
      studentNumber,
      setStudentNumber,
      schoolDomain,
      setSchoolDomain
    }}>
    {children}
    </UserInfoContext.Provider>
  )
}

export default function useUserInfo () {
  return useContext(UserInfoContext)
}
