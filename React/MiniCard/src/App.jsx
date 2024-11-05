
import React from 'react'
import UserContextProvider from './context/userContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
      <UserContextProvider>
        <Login/>
      </UserContextProvider>
  )
}

export default App