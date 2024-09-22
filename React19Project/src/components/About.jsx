import React from 'react'
import CardData from '../Api/CountryData.json'

function About() {

  return (
    <div className='w-full min-h-fit  bg-zink-900 text-white flex flex-col justify-start items-center mt-[7rem] border-slate-700'>
      <div className='text-4xl font-bold text-center  mb-[4rem]'>Here are the intersting Facts<br/> we are proud of</div>


      <div className='w-[90%] md:w-[70%] h-fit flex flex-col md:flex-row  flex-shrink-0 flex-wrap  justify-between items-center text-center text-white gap-[10px]  '>
      
         {


          CardData.map((item)=>{
            const{id,countryName,capital,population,interestingFact}=item
            return(
              <div className='w-[90%] md:w-[30%]  min-h-[15rem] 
              border-[1px] border-yellow-200
             bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900  rounded-tr-[1.5rem] rounded-bl-[1.5rem] p-5 cursor-pointer flex flex-col justify-start gap-2 items-start mb-[1rem] shadow-lg shadow-slate-500/30' key={id}>



           <p className='text-2xl text-left font-bold '>{countryName}</p>
           <p>Capital:{capital}</p>
           <p>Population:{population}</p>
           <p>{interestingFact}
           </p>
      </div>
            )
         })
        }


      </div>


    </div>

  )


}

export default About