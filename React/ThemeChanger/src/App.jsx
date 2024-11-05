
import React, { useEffect, useState } from 'react'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {
  const [theme,settheme]=useState('light');

  const lightTheme=()=>{
    settheme('light');
  }

  const darkTheme=()=>{
    settheme('dark');
  }
  //actual theme change
  useEffect(()=>{
    let con=document.querySelector('html').classList;
    con.remove('light','dark');
    con.add(theme);
  },[theme])

  return (
   <ThemeProvider value={{lightTheme,darkTheme,theme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
        <ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
        <Card/>
        </div>
      </div>
    </div>
    </ThemeProvider>

  )
}

export default App