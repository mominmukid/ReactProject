import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,  RouterProvider } from 'react-router-dom'
import Home from './Page/Home.jsx'
import About from './Page/AboutPage.jsx'
import Contact from './Page/Contact.jsx'
import Country from './Page/Country.jsx'
import ErrorPage from './Page/ErrorPage.jsx'
import CountryDetails from './Page/CountryDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/country',
        element: <Country />,
      },
      {
        path: '/country/:id',
        element: <CountryDetails/>,
      },

    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} >
  <App />
  </RouterProvider>
  </StrictMode>,
)
