import React from 'react'

export default  function Footer() {
     return (
       <section className="relative overflow-hidden bg-slate-400 py-10">
        
         <div className="relative z-10 pt-3 mx-auto max-w-7xl px-4">
           <div className="-m-6 flex flex-wrap">
             <div className="w-full p-6 md:w-1/2 lg:w-5/12">
               <div className="flex h-full flex-col justify-between">
                 <div className="mb-4 flex items-center  justify-center">
                  
                   <span className="mt-8 text-lg font-bold">Logo</span>
                 </div>
                 <div>
                   <p className="text-sm text-gray-600">
                     &copy; Copyright 2022. All Rights Reserved by MominMukid.
                   </p>
                 </div>
               </div>
             </div>
             <div className="w-full p-6 md:w-1/2 lg:w-2/12">
               <div className="h-full">
                 <h3 className="tracking-px mb-9  text-xs font-bold uppercase text-black">
                   Company
                 </h3>
                 <ul>
                   <li className="mb-4">
                     <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                       Features
                     </a>
                   </li>
                   <li className="mb-4">
                     <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                       Pricing
                     </a>
                   </li>
                   <li className="mb-4">
                     <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                       Affiliate Program
                     </a>
                   </li>
                   <li>
                     <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                       Press Kit
                     </a>
                   </li>
                 </ul>
               </div>
             </div>
             <div className="w-full p-6 md:w-1/2 lg:w-2/12">
               <div className="h-full">
                 <h3 className="tracking-px mb-9  text-xs font-bold uppercase text-black">
                   Support
                 </h3>
                 <ul>
                   <li className="mb-4">
                     <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                       Account
                     </a>
                   </li>
                   <li className="mb-4">
                     <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                       Help
                     </a>
                   </li>
                   <li className="mb-4">
                     <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                       Contact Us
                     </a>
                   </li>
                   <li>
                     <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                       Customer Support
                     </a>
                   </li>
                 </ul>
               </div>
             </div>
             <div className="w-full p-6 md:w-1/2 lg:w-3/12">
               <div className="h-full">
                 <h3 className="tracking-px mb-9  text-xs font-bold uppercase text-black">
                   Legals
                 </h3>
                 <ul>
                   <li className="mb-4">
                     <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                       Terms &amp; Conditions
                     </a>
                   </li>
                   <li className="mb-4">
                     <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                       Privacy Policy
                     </a>
                   </li>
                   <li>
                     <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                       Licensing
                     </a>
                   </li>
                 </ul>
               </div>
             </div>
           </div>
         </div>
       </section>
     )
   }
