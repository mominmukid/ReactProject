import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from'./Componats/Card.jsx'


function App() {
  const myobj={
    user:"mukid",
    age:22,
  }
  return (
    <>
     <h1 className='font-bold text-[30px] ' >Mukid</h1>
    <Card name="mukid"  btnText="about "/ >
    <Card name="mukid" />

    </>
  )
}

export default App
