import React from 'react'
import heroImage from '../../../assets/hero_section/heroBackground.jpg'
import { NavLink } from 'react-router'

const Hero = () => {
  return (
    <>
    {/* Hero Section */}
    <section className='relative h-screen overflow-hidden'>
        <div className='absolute inset-0 bg-cover bg-center blur-xs scale-105 -z-10' style={{backgroundImage: `url(${heroImage})`}}>
            <div className='absolute inset-0 bg-black/70 z-0'></div>
        </div>
        <div className='relative z-10 h-full flex flex-col items-center justify-center text-white'>
                <div className="text-center">
                    <h1 className="text-xl font-bold mb-4">প্রত্যেকটি রক্তের ফোটাই অমূল্য</h1>
                    <p className="text-sm">আমাদের কমিউনিটিতে স্বাগতম</p>
                </div>
                   
                {/* call to action */}
<div className='flex flex-col md:flex-row w-full justify-center items-center py-8 px-2 space-y-5 md:space-y-0 md:space-x-6'>
    
    {/* Primary Action: ডোনার হিসেবে নাম লেখানো */}
    <NavLink 
        to="/registration" 
        className="w-full md:w-auto text-md font-bold py-4 px-8 bg-red-700 text-white rounded-full hover:bg-red-800 transition-all duration-300 shadow-lg shadow-red-900/20 text-center"
    >
        রক্তদাতা হিসেবে নাম লেখান
    </NavLink>

    {/* Secondary Action: ডোনার খোঁজা (Outline Style) */}
    <NavLink 
        to="/donors" 
        className="w-full md:w-auto text-md font-bold py-4 px-8 border-2 border-white text-white rounded-full hover:bg-white hover:text-red-700 transition-all duration-300 text-center"
    >
        রক্তদাতা খুঁজুন
    </NavLink>
    
</div>
            </div>
            
    </section>

    </>
  )
}

export default Hero