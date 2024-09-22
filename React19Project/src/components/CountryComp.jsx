import React from 'react'
import { useEffect, useState } from 'react'
import { getAllCountryData } from '../Api/CountryDataApi'
import { useTransition } from 'react'
import Loader from './Loder'
import CountryCard from './CountryCard'
import SearchAndFilter from './SearchAndFilter'


function CountryComp() {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  
  useEffect(() => {
    startTransition(async()=>{
      const res = await getAllCountryData();
      setCountries(res.data);
    
    })
  }, []);

  const searchCountry = (country) => {
    if(search){
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return true;
  }

  const FiterReginCountry = (country) => {
    if(filter === 'all'){
      return true;
    }
    return country.region.toLowerCase().includes(filter.toLowerCase());
  }

 const filteredCountries = countries.filter((country) => searchCountry(country) && FiterReginCountry(country)); 
  

 const sortCountries = (order) => {
  const sortedCountries = [...countries];
  if(order === 'asc'){
    sortedCountries.sort((a,b)=>a.name.common.localeCompare(b.name.common));
  }else{
    sortedCountries.sort((a,b)=>b.name.common.localeCompare(a.name.common));
  }
  setCountries(sortedCountries);
 }
 

  if (isPending) {
    return <Loader />
  }

  return (
    <div className='w-full min-h-screen bg-slate-900 text-white flex flex-col justify-start items-center mt-10'>
      <SearchAndFilter
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          sortCountries={sortCountries}
        />
      <ul className='w-[100%] md:w-[80%] h-full flex flex-col md:flex-row  flex-wrap justify-center items-center gap-4 p-4 '>
        
        {filteredCountries.map((country,index)=>{
          return(
            <CountryCard key={index} country={country} />
          )
        })}
      </ul>

    </div>

  )
}

export default CountryComp