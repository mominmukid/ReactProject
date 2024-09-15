import { configureStore } from "@reduxjs/toolkit";
import ecomSlice from "./ecomSlice";

const store=configureStore({
   reducer:{
      ecom:ecomSlice,
   }
})

export default store;