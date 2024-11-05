import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import store from './store/store.js'
import { Provider } from 'react-redux'
import AuthLayout from './components/AuthLayout.jsx'
import Home from './pages/Home.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx';
import AddPost from './pages/AddPost.jsx'
import Post from './pages/Post.jsx'
import AllPost from './pages/AllPosts.jsx'
import EditPost from './pages/EditPost.jsx';


const router=createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: '/',
      element:<Home/>
    },
    {
      path:'/login',
      element:(
        <AuthLayout authentication={false}>
          <Login/>
         </AuthLayout>
      )
    },
    {
      path:'/signup',
      element:(
        <AuthLayout authentication={false}>
         <Signup/>
        </AuthLayout>
      )
    },
    {
      path:'/all-posts',
      element:(
        <AuthLayout authentication={true}>
         <AllPost/>
        </AuthLayout>
      )
    },
    {
      path:'/add-post',
      element:(
        <AuthLayout authentication={true}>
         <AddPost/>
        </AuthLayout>
      )
    },
    {
      path:'/edit-post/slug',
      element:(
        <AuthLayout authentication={true}>
         <EditPost/>
        </AuthLayout>
      )
    },
    {
      path:'/post-post/slug',
      element:(
        <AuthLayout authentication={true}>
         <Post/>
        </AuthLayout>
      )
    },
  ]
}])

createRoot(document.getElementById('root')).render(
 
    <Provider store={store}>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
    </Provider>
  // </StrictMode>,
)
