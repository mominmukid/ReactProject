import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
   <div className='min-h-screen w-full bg-gray-900 flex flex-wrap content-between'>
        <div className='w-full block ' >
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />

        </div>
      </div>
    </>
  )
}

export default App