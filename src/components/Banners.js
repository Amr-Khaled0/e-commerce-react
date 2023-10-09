import React, { useState } from 'react'
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";


const Banners = () => {
    const [currentSlide ,setCurrentSlide] = useState(0)
    const data =[
        "https://media.extra.com/i/aurora/iPhone15Pro_PreOrder_HS-ar-d.webp",
        "https://media.extra.com/i/aurora/iPhone15_PreOrder_HS-ar-d.webp",
        "https://media.extra.com/i/aurora/Galaxy_ZFold5_ZFlip5_BuynTry_HS_A.webp",
    ]

    const prevSlide=()=>{
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
    }
    const nextSlide=()=>{
        setCurrentSlide(currentSlide === 2 ? 0:(prev) => prev + 1)
    }
  return (
    <div className='w-full h-auto overflow-x-hidden'>
        <div className='w-screen-h-[650px] relative'>
            <div style={{transform:`translateX(-${currentSlide * 100}vw)`}} 
            className='w-[400vw] h-full flex transition-transform duration-1000'>
            <img 
                className='w-screen h-full object-cover'
                src={data[0]}
                 alt='imgone'
                 loading='priority'
                 />
                 <img 
                 className='w-screen h-full object-cover'
                 src={data[1]}
                  alt='imgtwo'
                  loading='priority'
                  />
                  <img 
                  className='w-screen h-full object-cover   '
                  src={data[2]}
                   alt='imgthree'
                   loading='priority'
                   />
            </div>
            
            <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 inset-y-[450px]'>
                <div onClick={prevSlide} className="w-14 h-12 bg-black border-[3px] border-gray-900 flex items-center
                    justify-center text-white hover:cursor-pointer hover:bg-transparent hover:text-white
                    active:bg-gray-900 duration-300">
                    <HiArrowLeft />
                </div>
                <div onClick={nextSlide} className="w-14 h-12 bg-black border-[3px] border-gray-900 flex items-center
                    justify-center text-white hover:cursor-pointer hover:bg-transparent hover:text-white
                    active:bg-gray-900 duration-300">
                    <HiArrowRight />
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Banners