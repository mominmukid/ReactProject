import React from 'react'
import { Link } from 'react-router-dom'
   function About() {
      
      return (
         <div className='w-full min-h-screen flex justify-center items-center flex-col bg-[#dee2e6]'>
            <div className="relative w-full bg-gradient-to-r from-blue-500 to-transparent ">
               <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 ">
                  <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
   
                     <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full p-1">
                        <p className="text-xl font-bold ">Explore the Latest in Tech Industries;</p>
                     </div>
                     <h1 className="mt-5 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
                        Your Destination for Cutting-Edge Gadgets!
                     </h1>
                     <p className="mt-8 text-lg text-white">
                        Welcome to MK eComStore, your ultimate destination for cutting-edge gadgets! Explore the latest in tech innovation and style with us. Shop now and discover a world of possibilities!
                     </p>
                     <form action="" className="mt-8 flex items-start space-x-2">
                        <div>
                           <Link to='/products'>
                              <button
                                 type="button"
                                 className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black cursor-pointer"
                              >
                                 Explore our products
                              </button>
                           </Link>
                        </div>
                     </form>
                  </div>
                  <div className="relative flex justify-center items-center lg:col-span-5 lg:-mr-8 xl:col-span-6">
                     <img
                        className="aspect-[3/2]  object-content lg:aspect-[4/3] lg:h-[500px] xl:aspect-[16/9]"
                        src="./public/images/heroImage.png"
                        alt=""
                     />
                  </div>
   
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

            <div className='w-full mt-24 mb-20 flex justify-center items-center flex-col'>
            <div className='font-bold text-3xl'>
                     Why Choose MK Store
                  </div>
                  <p>Choose MK EduHub for a holistic, enriching learning experience that empowers you to achieve your goals. </p>
            </div>

               {/* <div>
               <div className='mt-[6rem] m-10'>
                  <div className='font-bold text-3xl'>
                     Why Choose MK Store
                  </div>
                  <p>Choose MK EduHub for a holistic, enriching learning experience that empowers you to achieve your goals. </p>
               </div>
            </div>
            </div> */}
   
            {/* Why chose the mk store */}
   
            <div className='w-full  flex justify-center items-center'>
               {/* frist comment */}
               <div className='w-[30%] min-h-72  pl-[7rem] p-3 '>
                  <div className='w-full flex justify-end p-1 items-end '>
                     <div className='w-fit px-3 py-1 mt-1 ml-1 flex justify-center items-center bg-blue-200 rounded-full '>1</div>
                  </div>
                  <div className='w-full flex justify-end p-1 items-end '>
                     <p className='font-bold text-lg'>Wide Selection</p>
                  </div>
                  <div className='w-full flex justify-end p-1 items-end '>
                     <p>MK Store offers a diverse range of gadgets, from smartphones to smart home devices, ensuring you find what you need to elevate your lifestyle and meet your tech requirements. </p>
                  </div>
                  {/* second comment */}
                  <div className='w-full flex justify-end p-1 items-end '>
                     <div className='w-fit px-3 py-1 mt-1 ml-1 flex justify-center items-center bg-blue-200 rounded-full '>2</div>
                  </div>
                  <div className='w-full flex justify-end p-1 items-end '>
                     <p className='font-bold text-lg'>Quality Assurance</p>
                  </div>
                  <div className='w-full flex justify-end p-1 items-end '>
                     <p>Every gadget at MK Store undergoes rigorous quality checks, guaranteeing reliability and performance, so you can shop with confidence knowing you're getting the best. </p>
                  </div>
   
                  {/* third comment */}
   
                  <div className='w-full flex justify-end p-1 items-end '>
                     <div className='w-fit px-3 py-1 mt-1 ml-1 flex justify-center items-center bg-blue-200 rounded-full '>3</div>
                  </div>
                  <div className='w-full flex justify-end p-1 items-end '>
                     <p className='font-bold text-lg'>Competitive Prices</p>
                  </div>
                  <div className='w-full flex justify-end p-1 items-end '>
                     <p>Enjoy great value with MK Store's competitive prices on high-quality gadgets, making top-of-the-line technology accessible to all without compromising on quality or performance.  </p>
                  </div>
               </div>
   
               {/* comment image */}
               <div className='w-[40%]  flex justify-center items-center'>
                  <div className='w-[98%] h-[32rem]   flex justify-center items-center'>
                     <div className='w-[90%] h-[28rem]  shadow-xl  shadow-blue-950/50 
                  rounded-full bg-blue-800'>
                        <img src="./public/images/ecompost.png" alt="loding..." className='bg-contain h-[28rem] w-full' />
                     </div>
                  </div>
               </div>
   
               {/* comment right section */}
   
               <div className='w-[30%]  pr-[7rem] '>
   
                  <div className='w-full p-1  '>
                     <div className='w-fit px-3 py-1 mt-1 ml-1 flex justify-center items-center bg-blue-200 rounded-full '>4</div>
                  </div>
                  <div className='w-full flex  p-1  '>
                     <p className='font-bold text-lg'>Convenient Shopping</p>
                  </div>
                  <div className='w-full flex justify-end p-1 items-end '>
                     <p>With MK Store, shopping for gadgets is easy and convenient. Our user-friendly website and secure payment options ensure a seamless experience from browsing to checkout, all from the comfort of your home.  </p>
                  </div>
                  {/* second comment */}
                  <div className='w-full flex  p-1  '>
                     <div className='w-fit px-3 py-1 mt-1 ml-1 flex justify-center items-center bg-blue-200 rounded-full '>5</div>
                  </div>
                  <div className='w-full flex  p-1  '>
                     <p className='font-bold text-lg'>Expert Guidance</p>
                  </div>
                  <div className='w-full flex justify-end p-1 items-end '>
                     <p>Our knowledgeable staff provides expert guidance, helping you choose the right gadget to meet your needs and preferences, ensuring you make informed decisions every step of the way. </p>
                  </div>
   
                  {/* third comment */}
   
                  <div className='w-full flex  p-1  '>
                     <div className='w-fit px-3 py-1 mt-1 ml-1 flex justify-center items-center bg-blue-200 rounded-full '>6</div>
                  </div>
                  <div className='w-full flex  p-1  '>
                     <p className='font-bold text-lg'>Excellent Service</p>
                  </div>
                  <div className='w-full flex justify-end p-1 items-end '>
                     <p>Mk Store is committed to providing excellent service to our customers. From prompt assistance with inquiries to efficient handling of orders and deliveries, we prioritize your satisfaction every step of the way. </p>
                  </div>
               </div>
   
            </div>
         </div>
      )
   
}

export default About