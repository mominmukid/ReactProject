import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Header() {
 
   const navigate = useNavigate();
   const navItems = [
     {
       name: 'Home',
       slug: "/",
       active: true
     }, 
     {
       name: "Login",
       slug: "/login",
       active: true,
   },
   {
       name: "Signup",
       slug: "/signup",
       active: true,
   },
   {
       name: "All Posts",
       slug: "/all-posts",
       active: true,
   },
   {
       name: "Add Post",
       slug: "/add-post",
       active: true,
   },
   ]
 
   
   // console.log(navItems[0].name);
   const show =()=>{
     navItems.map((item)=>{
       console.log(item.active);
       
     })
   }
  show()
   
 
   return(
      <header className='py-3 shadow bg-gray-500'>
     <nav className='flex'>
       <div className='mr-4'>
         <Link to='/'>
           <div>Logo</div>
 
           </Link>
       </div>
       <ul className='flex ml-auto'>
         {navItems.map((item) => 
         item.active ? (
           <li key={item.name}>
             <button
             onClick={() => navigate(item.slug)}
             className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
             >{item.name}</button>
           </li>
         ) : null
         )}
         
           <li>
             <button>alksndlsad</button>
           </li>
         
       </ul>
     </nav>
    
 </header>
 );
}

export default Header