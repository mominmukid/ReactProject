import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import AuthLayout from './components/AuthLayout.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'
import AllPost from './pages/AllPost.jsx'
import Post from './pages/Post.jsx'
import EditPost from './pages/EditPost.jsx'
import Addpost from './pages/Addpost.jsx'
import { RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                
                    <LoginPage />
           
            ),
        },
        {
            path: "/signup",
            element: (
                
                    <SignupPage />
             
            ),
        },
        {
            path: "/all-posts",
            element: (
                
                  
                    <AllPost />
                
            ),
        },
        {
            path: "/add-post",
            element: (
                
                    <Addpost />
              
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
               
                    <EditPost />
               
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} >
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>


)
