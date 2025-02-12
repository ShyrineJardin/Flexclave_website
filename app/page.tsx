'use client'
import About from '@/components/About'
import Class from '@/components/Class'
import Hero from '@/components/Hero'
import Testimony from '@/components/Testimony'
import WhyUs from '@/components/WhyUs'
import Location from '@/components/Location'
import React, { useEffect } from 'react'
import Closing from '@/components/Closing'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const page = () => {

  useEffect(()=>{
    const initAOS =async () =>{
      await import('aos');
      AOS.init({
        duration: 1000,
        easing:'ease',
        once: true,
        anchorPlacement:'top-bottom'
      });
    };
    initAOS();
  },[]);


  return (
    <div>
      <Hero/>
      <About/>
      <WhyUs/>
      <Class/>
      <Testimony/>
      <Location/>
      <Closing/>
    </div>
  )
};

export default page