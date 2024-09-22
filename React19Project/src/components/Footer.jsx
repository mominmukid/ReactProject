import React from 'react'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { RxDiscordLogo } from "react-icons/rx";

function Footer() {
  return (
    <>
     <footer className="w-full min-h-52 flex justify-center items-center bg-[#273240] flex-wrap">
      <div className="w-[80%] flex justify-around items-center  flex-col md:flex-row">
         <div className="w-auto h-auto text-white mode text-lg font-semibold" >call us : <br/>8010195946</div>
         <div className="w-auto h-auto text-white mode text-lg font-semibold text-center mt-2 md:mt-0">Email us : <br/> mominmukid@gmail.com</div>

        </div>

        
         <div className="w-full md:w-[30%]  md:mt-0 flex h-auto  justify-evenly items-center">

            <div className="text-white font-semibold text-xl  md:mr-7 cursor-pointer">
            <FaGithub/></div>
            <div className="text-white font-semibold text-xl md:mr-7  cursor-pointer">
              <CiLinkedin/>
            </div>
            <div className="text-white font-semibold text-xl md:mr-7 cursor-pointer">
              <RxDiscordLogo/>
            </div>
         
            </div>
    </footer>

    <p className='text-gray-500 bg-[#273240] text-center font-semibold text-sm  md:mr-7 cursor-pointer'>Copyright © 2024  All rights reserved <span className='text-blue-500'>
    Momin Mukid</span></p>

    </>


  )
}

export default Footer