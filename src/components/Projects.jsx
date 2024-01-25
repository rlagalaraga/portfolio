import React from 'react'
import dbpc from '../assets/images/DBPC.png'

const Projects = () => {
  return (
    <>
        <div className='w-full h-full md:h-screen flex flex-col justify-center items-center text-[#D1C5C0] font-cyber bg-neutral-900'>
            <div className='mx-auto max-w-[1000px] w-full px-4 lg:px-0'>
                <h1 className='text-4xl font-bebas inline border-b-4 text-[#37EBF3] border-[#710000]'>Projects</h1>
                <p className='py-4 font-bold'>Projects I've worked on</p>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-center py-8'>
                  
                  <div style={{ backgroundImage: `url(${dbpc})` }}
                  className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                      <span className='text-2xl font-bebas tracking-wider text-[#FDF500]'>PC-commerce</span>
                      <div className='pt-8 text-center text-[#37EBF3] font-cyber'>
                        <a href="/">
                          <button className='text-center font-bold border-solid border-2 border-[#710000] bg-black px-4 py-3 m-2'>
                            Demo
                          </button>
                        </a>
                        <a href="https://github.com/rlagalaraga/pc-commerce">
                          <button className='text-center font-bold border-solid border-2 border-[#710000] bg-black px-4 py-3 m-2'>
                            Code
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                </div>
            </div>
        </div>
    </>
  )
}

export default Projects