import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import { getAllCountryData } from '../Api/CountryDataApi'
function Home() {
  const [countryData, setCountryData] = useState([])
  useEffect(()=>{
    getAllCountryData().then((data)=>{
      setCountryData(data)
      console.log(data);
    })
  },[])

  return (
    <div className='w-full min-h-screen bg-slate-900 text-white flex flex-col justify-start items-center '

    >
     <Hero/>
     <About/>
    </div>
  )

}

export default Home