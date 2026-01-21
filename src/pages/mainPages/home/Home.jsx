import React from 'react'
import Hero from './Hero'
import { Droplets, MapPin, Calendar, Phone } from 'lucide-react';
import BloodRequest from '../bloodRequest/BloodRequest';
import DonorList from '../donor/DonorList';
import Events from '../events/Events';

const Home = () => {
  return (
    <>
     <Hero />
     <BloodRequest />


     <DonorList />

     <Events />

      




    </>
  )
}

export default Home