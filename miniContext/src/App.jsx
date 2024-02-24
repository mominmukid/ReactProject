import UserContextProvider from "./Context/UserContextProvider"
import Login from "./components/Login"
import Profile from "./components/Profile"

function App() {
 
  return (
    <UserContextProvider>
    
     <Login/>
    </UserContextProvider>
  )
}

export default App
