import React from 'react'

function SearchBox({
   Search,
 setSearch,
 feachApi
}) {
  return (
   <div className=' w-[95%] md:w-[32%] min-h-20 bg-[#E9EBF8] rounded-t-md flex flex-col justify-center items-center shadow-xl shadow-gray-900 p-5'>

      <label className='text-start'>Enter city name</label>
   <div className='w-full border border-black flex rounded-md '>
      <input type="text" className='w-[90%] px-2 py-2  outline-none  rounded-l-md ' placeholder='Search by city name'
         value={Search}
         onChange={(e) => setSearch(e.target.value)} />
      <button
         onClick={() => feachApi(Search)}
         className='px-2 py-1 rounded-r-md hover:bg-blue-600 font-semibold bg-blue-500'>Search</button>
   </div>
   </div>
  )
}

export default SearchBox