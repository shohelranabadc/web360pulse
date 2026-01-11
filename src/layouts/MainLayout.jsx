import React from 'react'
import Header from '../components/mainComponents/Header'
import { Outlet } from 'react-router'
import Footer from '../components/mainComponents/Footer'

const MainLayout = () => {
  return (
    <div>
        <Header />
        <main>
            <Outlet />
        </main>

        <Footer />
    </div>
  )
}

export default MainLayout