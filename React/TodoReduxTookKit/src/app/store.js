
import {configureStore}from '@reduxjs/toolkit'
import { todoreducer,  } from '../feature/TodoSlice'

export const store=configureStore({
   reducer:todoreducer
})