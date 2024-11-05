import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import User from './components/User/User'
import Github, { GitdataLodar } from './components/Github/Github'

// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//    children:[
//     {
//       path:'',
//       element:<Home/>
//     },
//     {
//       path:'/Contact',
//       element:<Contact/>
//     },
//     {
//       path:'/About',
//       element:<About/>
//     }
//    ]
//   }
// ]
// )
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>} />
      <Route path="About" element={<About/>} />
      <Route path="Contact" element={<Contact/>} />
      <Route
      loader={GitdataLodar}
       path="Github" element={<Github/>} />
      <Route path="User/:id" element={<User/>} />
      
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
