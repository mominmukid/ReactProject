import React from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice';
import { Outlet } from 'react-router-dom';
function App() {
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setloading(false));

  }, []);

  return !loading ? (
    <>
      <div className='min-h-screen w-full bg-gray-900 flex flex-wrap content-between'>
        <div className='w-full block ' >
          <Header />
        
            <Outlet />
          
          <Footer />

        </div>
      </div>
    </>
  ) : null
}

export default App