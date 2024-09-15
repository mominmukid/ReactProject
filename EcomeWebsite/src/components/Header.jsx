
import { useNavigate } from 'react-router';
import Cart from './Cart';
function Header() {
   const navigate = useNavigate();
   const navItems = [
      {
         id: 1,
         name: "Home",
         path: "/"
      },

      {
         id: 2,
         name: "About",
         path: "/about"
      },

      {
         id: 3,
         name: "products",
         path: "/products"
      },
      {
         id: 4,
         name: "Contact",
         path: "/contact"
      },
   ]
   return (
      <div className='w-full p-3 shadow-2xl bg-slate-400  shadow-black-500/50 fixed z-50 '>
         <div className=' font-bold w-full flex justify-between items-center'>
            <div className='w-[40%] '>
               logo
            </div>
            <div className='w-[40%] '>
               <ul className='md:flex hidden md:block md:flex-wrap justify-between items-center'>
                  {navItems.map((item) => (
                     <li key={item.id}
                        onClick={() => navigate(item.path)}
                        className=' cursor-pointer'
                     >
                        {item.name}
                     </li>
                  ))}
               </ul>
            </div>
            <div>
              <Cart/>
            </div>

         </div>
      </div >
   )
}

export default Header