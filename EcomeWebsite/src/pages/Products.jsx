import React from 'react'
   import productsItemList from '../../Api/productsItemList'
   import {Button} from '../components'
   import { useSelector } from 'react-redux'
   import { addTocart } from '../store/ecomSlice'
   import { useDispatch } from 'react-redux'
   
   function Products() {
      const dispatch = useDispatch();
      
      const data = useSelector(state => state.ecom.products)
   
   
      const handelAddtocart = (id) => {
           productsItemList.map((item)=>{
            if(item.id===id){
              dispatch(addTocart({...item}))
              console.log(data);
            }
           })
      }
      return (
         <div className='w-full min-h-screen flex justify-center items-center flex-col bg-[#dee2e6]'>
          
            {/* // other product section offers */}
   
            <div className='mt-[7rem] w-[98%] h-62   flex justify-between items-center'>
               <div className="w-[25rem] flex rounded-md border border-slate-500 ">
                  <div className="p-4">
                     <h1 className="text-lg text-blue-700 font-semibold">New year sale</h1>
                     <p className="mt-3 text-2xl text-black">
                        get and extra 50% off
                     </p>
                     <a href="#" className='hover:text-blue-700 text-black underline'>Show now →</a>
                  </div>
                  <img
                     src="./public/images/laptop.png"
                     alt="Laptop"
                     className="h-52 w-full  bg-content"
                  />
               </div>
   
   
               <div className="w-[25rem] flex rounded-md border border-gray-500">
                  <div className="p-4">
                     <h1 className="text-lg text-blue-700 font-semibold">New year sale</h1>
                     <p className="mt-3 text-2xl text-black">
                        40% discount on speakers
                     </p>
                     <a href="#" className='hover:text-blue-700 text-black underline'>Show now →</a>
                  </div>
                  <img
   
                     src="./public/images/headphoneEcom.png"
                     alt="Laptop"
                     className="h-52 w-full  bg-content"
                  />
               </div>
   
   
               <div className="w-[25rem] flex rounded-md border border-gray-500">
                  <div className="p-4">
                     <h1 className="text-lg text-blue-700 font-semibold">New year sale</h1>
                     <p className="mt-3 text-2xl text-black">
                        get and extra 50% off
                     </p>
                     <a href="#" className='hover:text-blue-700 text-black underline'>Show now →</a>
                  </div>
                  <img
                     src="./public/images/mobiles.png"
                     alt="Laptop"
                     className="h-52 w-full  bg-content"
                  />
               </div>
            </div>
   
   
            {/* ourServices we provided */}
   
   
            <div className='w-[96%] h-[10rem] mt-8  p-1 m-5 flex justify-center items-center gap-1'>
   
   
   
               <div className='w-[23%]  h-full   flex justify-center items-center'>
                  <div className='w-[50%] text-center'>
                     <p className='text-[4rem]' >🚐</p>
                  </div>
                  <div>
                     <p className='text-xl font-semibold'>worldwide shipping</p>
                     <p className='text-sm '>order Above $100</p>
                  </div>
   
               </div>
               <div className='w-[23%] h-full  flex justify-center items-center'>
                  <div className='w-[50%] text-center'>
                     <p className='text-[4rem]' >🎁</p>
                  </div>
                  <div>
                     <p className='text-xl font-semibold'>Easy 30 Day Returns</p>
                     <p className='text-sm '>Back Returns in 7 Days</p>
                  </div>
   
               </div>
               <div className='w-[23%]  h-full  flex justify-center items-center'>
                  <div className='w-[50%] text-center'>
                     <p className='text-[4rem]' >💰</p>
                  </div>
                  <div>
                     <p className='text-xl font-semibold'>
   
                        money back guarantee</p>
                     <p className='text-sm '>guarantee with in 30-Days</p>
                  </div>
               </div>
               <div className='w-[23%]   h-full  flex justify-center items-center'>
                  <div className='w-[50%] text-center'>
                     <p className='text-[4rem]' >🎧</p>
                  </div>
                  <div>
                     <p className='text-xl font-semibold'>Easy online support </p>
                     <p className='text-sm '>24/7 any Time support</p>
                  </div>
               </div>
            </div>
            <h1 className='text-3xl font-bold'>Checkout MK Store</h1>
   
            {/* products section */}
   
            <div className='w-full p-4 mt-5  flex justify-center flex-wrap  gap-6'>
   
               {productsItemList?.map((item) => (
                  <div className='w-[30%] p-3 rounded-xl min-h-[20rem] bg-white' key={item.id}>
                     <div className='w-full '>
                        <div className='w-fit px-3 py-1 mt-1 ml-1 flex justify-center items-center bg-pink-200 rounded-full border border-gray-500'>{item.category}</div>
                     </div>
   
                     <div className='w-full flex justify-center items-center'>
                        <img src={item.image} alt="" className='h-[13rem]' />
                     </div>
   
                     <div className='w-full px-2'>
                        <div className='font-bold text-3xl'>{item.name}</div>
                     </div>
   
                     <div className='w-full mt-2 px-3'>
                        <p> {item.description}</p>
                     </div>
   
                     <div className=' mt-2 w-full flex gap-3 px-4 text-xl font-semibold'>
                        <p>₹{item.price}</p>
                        <p className='line-through px-2'>₹{item.price * 3}</p>
                     </div>
   
                     <div className='px-3'>
                        <p className='font-thin'> Total Stocks Available:<span className='pl-1'>{item.stock}</span></p>
                     </div>
   
                     <div className='px-3 flex
                justify-center items-center mt-3'>
                        <Button content='Add to 🛒'
                           onClick={() => { handelAddtocart(item.id) }} />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      )
      
}

export default Products