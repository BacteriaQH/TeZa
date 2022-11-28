import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
export const AuthContext = React.createContext()



const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const navigate = useNavigation()

  return (
    <AuthContext.Provider>{children}</AuthContext.Provider>
  )
}

export default AuthProvider