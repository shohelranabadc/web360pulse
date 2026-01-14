import React from 'react'
import Hero from './Hero'

const Home = () => {
  return (
    <div>
     <Hero />

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