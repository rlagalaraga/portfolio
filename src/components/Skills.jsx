import React from 'react'
import { IoLogoHtml5, IoLogoCss3, IoLogoGithub, IoLogoReact, IoLogoJavascript } from "react-icons/io5";
import { BiLogoDjango, BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";

const Skills = () => {
  return (
    <>
      <div className='w-full md:h-screen flex flex-col justify-center items-center text-[#D1C5C0] font-cyber bg-neutral-900'>
        <div className='mx-auto max-w-[1000px] w-full px-4 lg:px-0'>
          <h1 className='text-4xl font-bebas inline border-b-4 text-[#37EBF3] border-[#710000]'>Skills</h1>
          <p className='py-4 font-bold'>Technologies I've worked with</p>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-8'>
            <div className=' border-solid border-2 border-[#710000] bg-black hover:scale-110 duration-500'>
              <IoLogoHtml5 className='mx-auto mt-4 w-20 text-9xl text-[#f06529]' />
              <p className='my-4 text-xl font-bold text-[#37EBF3]'>HTML</p>
            </div>
            <div className=' border-solid border-2 border-[#710000] bg-black hover:scale-110 duration-500'>
              <IoLogoCss3 className='mx-auto mt-4 w-20 text-9xl text-[#2965f1]' />
              <p className='my-4 text-xl font-bold text-[#37EBF3]'>CSS</p>
            </div>
            <div className=' border-solid border-2 border-[#710000] bg-black hover:scale-110 duration-500'>
              <IoLogoJavascript className='mx-auto mt-4 w-20 text-9xl text-[#F0DB4F]' />
              <p className='my-4 text-xl font-bold text-[#37EBF3]'>Javascript</p>
            </div>
            <div className=' border-solid border-2 border-[#710000] bg-black hover:scale-110 duration-500'>
              <IoLogoReact className='mx-auto mt-4 w-20 text-9xl text-[#61dbfb]' />
              <p className='my-4 text-xl font-bold text-[#37EBF3]'>React</p>
            </div>
            <div className=' border-solid border-2 border-[#710000] bg-black hover:scale-110 duration-500'>
              <BiLogoDjango className='mx-auto mt-4 w-20 text-9xl text-[#092e20]' />
              <p className='my-4 text-xl font-bold text-[#37EBF3]'>Django</p>
            </div>
            <div className=' border-solid border-2 border-[#710000] bg-black hover:scale-110 duration-500'>
              <BiLogoPostgresql className='mx-auto mt-4 w-20 text-9xl text-[#336791]' />
              <p className='my-4 text-xl font-bold text-[#37EBF3]'>Postgres</p>
            </div>
            <div className=' border-solid border-2 border-[#710000] bg-black hover:scale-110 duration-500'>
              <GrMysql className='mx-auto mt-4 w-20 text-9xl text-[#f29111]' />
              <p className='my-4 text-xl font-bold text-[#37EBF3]'>MySql</p>
            </div>
            <div className=' border-solid border-2 border-[#710000] bg-black hover:scale-110 duration-500'>
              <IoLogoGithub className='mx-auto mt-4 w-20 text-9xl text-[#4078c0]' />
              <p className='my-4 text-xl font-bold text-[#37EBF3]'>Github</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills