import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.js'
import Home from './pages/Home.jsx'
import CartPage from './pages/CartPage.jsx'
import Contact from './pages/ContactUs.jsx'
import Products from './pages/Products.jsx'
import About from './pages/About.jsx'
const router=createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '/',
        element:<Home/>
      },
      {
        path: '/cart',
        element:<CartPage/>
      },
      {
        path: '/contact',
        element:<Contact/>
      },
      {
        path: '/products',
        element:<Products/>
      },
      {
        path: '/about',
        element:<About/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
    </Provider>
  </StrictMode>,
)
