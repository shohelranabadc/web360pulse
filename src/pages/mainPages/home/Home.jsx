import React from 'react'

const Home = () => {
  return (
    <div>
      {/* Hero section */}
      <section className='w-full bg-emerald-700'>
        <h1>hero section</h1>

      </section>

      {/* Donor List section */}
      <section id='Donar-List-section' className=''>
        <div className=''>
          <div>Title</div>
          <div id='Donars-card' className='flex'>
            <div className='card shadow-2xl'>Card</div>
            <div className='card'>Card</div>
            <div className='card'>Card</div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Home