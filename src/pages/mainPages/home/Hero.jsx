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
                    <h1 className="text-5xl font-bold mb-4">প্রত্যেকটি রক্তের ফোটাই অমূল্য</h1>
                    <p className="text-xl">আমাদের কমিউনিটিতে স্বাগতম</p>
                </div>
                <div className='py-5 space-x-5'>
                    <NavLink to="/register" className="py-4 px-5 bg-red-700 rounded-full text-xl hover:bg-red-800">ডোনার হিসেবে নাম লেখুন</NavLink>
                    <NavLink to="/donor" className="py-4 px-5 bg-white text-black rounded-full text-xl">ডোনার খুজুন</NavLink>
                </div>
            </div>
    </section>

    </>
  )
}

export default Hero