import React from 'react'
import { useState, useEffect } from 'react';
import { Button } from '../components'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import productsItemList from '../../Api/productsItemList';
import { decereseProduct, increaseProduct, removeToCart } from '../store/ecomSlice';
function CartPage() {
   const dispatch = useDispatch();
   const [lsData, setlsData] = useState([])
   const [total, settotal] = useState(0)
   const cartProduct = useSelector(state => state.ecom.products);
   
   const handelinc=(id)=>{

         dispatch(increaseProduct(id))
   }
   const handelDnc=(id)=>{
     
      dispatch(decereseProduct(id));
   }
      const handelremove=(id)=>{
         dispatch(removeToCart(id))
      }
   useEffect(()=>{
      let value=0;
      cartProduct.map((item)=>{
         value+=(item.price*item.quaninty)
      })
     settotal(value);
   },[handelinc,handelDnc,handelremove])

   useEffect(() => {
      let todos = JSON.parse(localStorage.getItem('products'));
      if (todos && todos.length > 0) {
         setlsData(todos)
         console.log(todos);
         
      }
   }, [])

   useEffect(() => {
      localStorage.setItem('products', JSON.stringify(cartProduct));
   }, [cartProduct])

   return (
      <div className='w-full  flex flex-col justify-center min-h-28 items-center'>
         <div className='w-[80%] mt-[8rem] mb-11 gap-7 flex flex-col justify-start items-center'>
            {
              lsData?.map((item) =>
                  item.id !== 0 ?
                     (<ul key={item.id} className=' w-full  border  border-black h-[5rem]  flex  justify-between p-7 items-center '>
                        <li className='w-[10%]'>
                           <div className='w-fit px-3 text-lg flex bg-pink-400 border rounded-full border-slate-300'> {item.category}</div>
                        </li>
                        <li className='w-[20%] justify-center items-center flex'>
                           <img src={item.image} className='w-full h-[4rem] object-contain' alt="" />
                        </li>
                        <li className='w-[10%] ml-4 mr-10'>
                           <p className='text-2xl font-semibold'>{item.name}</p>
                        </li>
                        <li className='w-[10%]'>
                           <p className='text-xl'>{item.totalprice}</p>
                        </li>

                        <li className='w-[15%] border py-2 flex justify-around items-center'>
                           <button className='px-2 w-[35%]  font-bold bg-gray-700 rounded-full flex justify-center items-center'
                           onClick={()=>{handelDnc(item.id)}} > ➖ </button>
                           <p>{item.quaninty}</p>
                           <button className='px-2 w-[35%] font-sm font-bold bg-gray-700 rounded-full flex justify-center items-center'  
                           onClick={()=>{handelinc(item.id)}} > ➕ </button>
                        </li>
                        <li>
                           <div className='px-3  flex
              justify-center items-center'>
                              <Button content='Remove ❌'
                                 onClick={()=>{handelremove(item.id)}} />
                           </div>
                        </li>
                     </ul>
                     ) : null
               )
            }
         </div>

         <div className='w-[80%] flex justify-end '>
            <div className='min-h-[10rem] min-w-[17rem] border-4 flex-col justify-center items-center border-black  p-5'>
               <p className='mb-4'>Selected Offer Summary</p>
               <div className='flex justify-between mb-3 items-center'>
                  <p className='text-gray-600'>sub Total :</p>
                  <p className='font-bold '>{total}</p>
               </div>
               <div className='flex justify-between items-center'>
                  <p className='text-gray-600'>Tax (GST) :</p>
                  <p className='font-bold '>18%</p>
               </div>
               <hr className='h-px my-3 bg-gray-200 border-0 dark:bg-gray-700' />
               <div className='flex justify-between items-center'>
                  <p className='text-gray-600'>Total :</p>
                  <p className='font-bold '>{Math.floor(total+(total*(18/100)))}</p>
               </div>

            </div>
         </div>
      </div>
   )
}

export default CartPage