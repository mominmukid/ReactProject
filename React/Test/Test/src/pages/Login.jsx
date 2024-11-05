import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Login = () => {
   const [data, setdata] = useState([]);
   const [load, setload] = useState(false);
   const [error, seterror] = useState(null);

   const fechdata = async () => {
      setload(true);
      try {
         const res = await axios.get('/api/data')
         setdata(res)
         console.log(res);
         setload(false);
      } catch (error) {
         seterror(error);
         setload(false)

      }

   }
   useEffect(() => {
      fechdata()
   }, [])

   if(load){
      return <div>Loading...</div>
   }
   if(error){
      return <div>Error: {error.message}</div>
   }

   return (
      <div className='min-h-screen bg-white'>
         {
            data &&
            <div>
               name:{data[0]?.name}
            </div>
         }

      </div>
   )
}

export default Login