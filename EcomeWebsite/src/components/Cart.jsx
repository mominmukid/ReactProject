import React, { useEffect ,useState} from 'react'
import Button from './Button';
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';


function Cart() {
   const cartproducts=useSelector(state=>state.ecom.products);
   const [products, setproducts] = useState(0)
   useEffect(()=>{
      let value=0;
      value=cartproducts.length-1;
      setproducts(value)
   })
   return (
      <Link to={`/cart`}>
       <Button content={`🛒 ${[products]}`}/>
      </Link>
     
   )
}

export default Cart