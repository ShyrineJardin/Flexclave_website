'use client';
import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

const testimonials = [
    {
        text: "As a beginner, I was nervous about starting yoga, but the Hatha Yoga class was perfect! The instructor was patient, and the slower pace helped me build confidence in my movements. After just a few sessions, I already feel more flexible and relaxed!",
        name: "Emma R.",
    },
    {
        text: "I love how the Vinyasa Yoga class keeps me moving and flowing with my breath. It’s both challenging and refreshing. After a few weeks, I’ve noticed an improvement in my endurance and balance. Highly recommend it!",
        name: "James T.",
    },
    {
        text: "Practicing Bikram Yoga in a heated room was a game-changer for me! The sessions were intense, but I felt amazing afterward. My flexibility and strength have improved significantly, and I always leave feeling detoxified and energized.",
        name: "Sophia L.",
    },
    {
        text: "This class was exactly what I needed after long workdays. The deep relaxation techniques and supported poses helped me release tension and sleep better at night. It’s like a reset for my body and mind!",
        name: "Daniel K.",
    }
];

const Testimony = () => {
    return (
        <div id='testimony' className='mt-20 mb-20 px-4 bg-pink-50'>
            <h1 className='text-center font-semibold text-5xl pt-20 pb-10'>Members Testimonials</h1>
            <div className='mt-20 mx-auto w-full max-w-6xl'>
                <Carousel
                    arrows={false}
                    autoPlay
                    autoPlaySpeed={5000}
                    infinite
                    responsive={responsive}
                    showDots
                >
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={index} 
                            className='w-full h-[300px] flex flex-col justify-center items-center bg-white shadow-lg rounded-lg px-8 py-6 relative mb-20'
                        >
                            <FaQuoteLeft className='w-12 h-12 text-gray-300 absolute top-5 left-5 opacity-30' />
                            <p className='text-xl italic text-gray-800 text-center max-w-3xl'> {testimonial.text} </p>
                            <span className='font-semibold text-gray-900 mt-4'>- {testimonial.name}</span>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Testimony;
