import React from 'react'
import { FaArrowRight } from "react-icons/fa";
// import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function CountryCard({country}) {
  const navigate=useNavigate();
  return (
    <div className='w-[80%] md:w-[29%] h-[23rem] bg-slate-800  py-4 px-1 border-2 border-slate-700 shadow-lg shadow-slate-500/30 rounded-tr-[2rem] rounded-bl-[2rem] mb-4 '>
      <div className='w-full h-full flex flex-col justify-center items-center'>
        <img src={country.flags.svg} alt={country.name.common} className='w-1/2 h-1/2 mb-4' />
        <h1 className='text-2xl font-bold'>{country.name.common}</h1>
        <p className='text-lg'> population: {country.population}</p>
        <p className='text-lg'> capital: {country.capital}</p>
        <p className='text-lg'> region: {country.region}</p>
        <button 
        onClick={()=>{
          navigate(`/country/${country.name.common}`)
        }}
        className='w-[60%]  py-2 h-10 mt-4 bg-slate-700/20 border-2 border-slate-500 hover:border-slate-300 font-bold text-white rounded-lg gap-1 hover:gap-2 flex justify-center items-center'>View More <FaArrowRight/></button>
      </div>
     
    </div>
  )
}

export default CountryCard