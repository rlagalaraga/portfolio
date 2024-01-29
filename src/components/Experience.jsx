import React, {useState} from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import asta from "../assets/images/ASTA.jpg"


const Experience = () => {
  const [details, setDetails] = useState(false)
  const handleDetails = () => setDetails(!details)  
  return (
    <>
        <div name='experience' className='w-full h-[60vh] flex flex-col justify-center items-center text-[#D1C5C0] font-cyber bg-neutral-900'>
          <h1 className='text-4xl font-bebas inline border-b-4 text-[#37EBF3] border-[#710000]'>Experience</h1>
          <div className='mx-auto max-w-[750px] w-full pt-3 px-4 lg:px-0'>
            <div className='w-full'>
              
              {/* Clickable */}
              <div onClick={handleDetails} className='bg-[#fdf500] flex justify-between font-bebas text-black text-xl px-3 py-2 m-2 hover:cursor-pointer rounded-md'>
                <h1>Full Stack Developer @ ASTA Softwares</h1>
                <div className='flex items-center'>
                  <h2 className='pr-5 hidden md:block'>Jan 2023 - Oct 2023</h2>
                  {!details ? <FaPlus/> : <FaMinus/>}
                </div>
              </div>
              
              {/* Details */}
              <div className={!details ? 'h-0 duration-500' : 'bg-[#fdf500c2] rounded-md translate-y-1 md:flex justify-between font-cyber text-black h-auto md:h-40 text-lg px-3 py-2 m-2 duration-500'}>
                {details && (
                  <>
                    <div className='flex flex-col w-full'>
                      <div className='flex items-center'>
                        <FaMapLocationDot/>
                        <p className='px-4'>Davao, Philippines</p>
                        <a href="https://www.facebook.com/astasoftwares">
                          <FaExternalLinkSquareAlt/>
                        </a>
                      </div>
                      <div className='flex flex-col items-center font-bold'>
                        <p>Developing front-end and backend features while maintaining older company projects</p>
                      </div>
                    </div>
                    <div className='flex justify-center items-center pt-4 md:pt-0'>
                      <img className='max-w-[100px] rounded-[50%]' src={asta} alt="Logo" />
                    </div>
                  </>
                )}
              </div>

            </div>
          </div>
        </div>
    </>
  )
}

export default Experience