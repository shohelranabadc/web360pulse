import React from 'react'
import Header from '../components/mainComponents/Header'
import { Outlet } from 'react-router'
import Footer from '../components/mainComponents/Footer'

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Header />
        <main className='flex-grow'>
            <Outlet />
        </main>

        <Footer />
    </div>
  )
}

export default MainLayout