import React from 'react'
import Typed from "react-typed"

const About = () => {
  return (
    <>
        <div name='about' className='text-[#D1C5C0] w-full h-screen bg-gradient-to-b from-black via-black to-neutral-900'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right pb-8 px-1'>
                        <h1 className='text-4xl font-bebas inline border-b-4 text-[#37EBF3] border-[#710000]'>
                            About
                        </h1>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl text-[#FDF500] font-cyber font-semibold'>
                        <Typed strings={["Hi, I'm Rence, nice to meet you. Feel free to look around."] } typeSpeed={120}/>
                    </div>
                    <div className='font-cyber'>
                        <p>
                            I'm a Information Technology graduate and highly motivated Full
                            Stack Developer with a focus on web development, backed by
                            professional experience and training. I specialize in creating
                            software for clients ranging from individuals and small-businesses
                            all the way to large enterprise corporations. Adept at both
                            independent and collaborative projects.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About