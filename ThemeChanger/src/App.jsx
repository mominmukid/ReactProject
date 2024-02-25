import { useEffect, useState } from "react"
import { ThemeProvider } from "./context/theme"
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themode,setthemode]=useState("light");

  const LightTheme=()=>{
    setthemode("light");
  }
  const DarkTheme=()=>{
    setthemode("dark");
  }
    useEffect(() => {
      document.querySelector('html').classList.remove("light","dark");
      document.querySelector('html').classList.add(themode);
    },[themode])
    

  return (
    <ThemeProvider value={{themode,DarkTheme,LightTheme}}>
    <>

      <div
							className="flex
							flex-wrap min-h-screen items-center">
        <div
							className="w-full">
          <div
							className="w-full
							max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div
							className="w-full
							max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>

    </>
    </ThemeProvider>
  )
}

export default App
