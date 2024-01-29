import React from 'react'
import Typed from "react-typed"

const Hero = () => {
  return (
    <>
        <div name='hero' className='text-[#D1C5C0] w-full h-screen'>
            <div className='mx-auto px-8 absolute flex flex-col justify-center items-center w-full h-full bg-black/50'>
                <h1 className='text-4xl md:text-6xl font-bebas mb-5 text-transparent  bg-clip-text bg-gradient-to-r from-[#FDF500] to-[#37EBF3]'>Rence Lennard Galaraga</h1>
                <Typed className='text-2xl md:text-3xl font-cyber font-bold' strings={['Full Stack Developer']} typeSpeed={120}/>
            </div>
        </div>
    </>
  )
}

export default Hero