import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contect/Contect.jsx'
import User from './components/User/User.jsx'
import Github, { Gitinfo } from './components/GitHub/Github.jsx'

// const router=createBrowserRouter(
//  [
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"/contect",
//         element:<Contact/>
//       },
      
//     ]
//   }
//  ]
// )
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Contect' element={<Contact/>}/>
    <Route
    loader={Gitinfo}
    path='/Github' 
    element={<Github/>}/>
    <Route path='user/:id' element={<User/>}/>
    </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
