import React from 'react'

function SearchAndFilter({ search, setSearch, filter, setFilter, sortCountries }) {

   return (
      <div className='flex justify-between flex-wrap items-center w-full md:w-[70%]'>
         <input type="text" placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} className='p-2 w-[90%] md:w-[40%] bg-slate-700 text-white rounded-md outline-none m-2 ' />

         <button onClick={() => sortCountries('asc')} className='p-2 rounded-md bg-slate-700 text-white outline-none'>ASC</button>

         <button onClick={() => sortCountries('dec')} className='p-2 rounded-md bg-slate-700 text-white outline-none'>DESC</button>

         <select value={filter} onChange={(e) => setFilter(e.target.value)} className='p-2 rounded-md bg-slate-700 text-white outline-none'>
            <option value="all">All</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="oceania">Oceania</option>
         </select>
      </div>
   )
}

export default SearchAndFilter