import { configureStore } from "@reduxjs/toolkit";
import authreducer from "./authSlice";
import authSlice from "./authSlice";

const store = configureStore({
  reducer:{
    auth:authSlice,
  }
  
});
export default store;
