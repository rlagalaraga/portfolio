import React, {useState} from 'react'
import {FaBars, FaTimes, FaLinkedin, FaGithub} from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)
    return (
        <>
            <div className='fixed w-full bg-black h-auto flex justify-between items-center px-4 z-10'>
                <h1 className='text-left text-[#FDF500] font-cyber font-bold text-3xl'>{"<RLG/>"}</h1>
                {/*menu*/}
                <ul className='hidden font-bebas md:flex text-[#37EBF3] text-xl'>
                    <li className='m-5'>home</li>
                    <li className='m-5'>skills</li>
                    <li className='m-5'>work</li>
                    <li className='m-5'>experience</li>
                    <li className='m-5'>contact</li> 
                </ul>

                {/*icon*/}
                <div onClick={handleNav} className='md:hidden text-[#37EBF3] w-full z-20 m-5 text-xl flex justify-end'>
                    {!nav ? <FaBars/> : <FaTimes/>}
                </div>

                {/*mobile*/}
                <ul className={!nav ? 'hidden' : 'absolute font-bebas text-2xl text-[#37EBF3] top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center'}>
                    <li className='m-2'>home</li>
                    <li className='m-2'>skills</li>
                    <li className='m-2'>work</li>
                    <li className='m-2'>experience</li>
                    <li className='m-2'>contact</li> 
                </ul>

                {/*social*/}
                <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
                    <ul className='font-cyber font-bold'>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077b5]'>
                            <a className='flex justify-between items-center h-full w-full text-gray-300 px-5' href="https://www.linkedin.com/in/rence-lennard-galaraga-043451238/">
                                Linkedin <FaLinkedin size={30}/>
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]'>
                            <a className='flex justify-between items-center h-full w-full text-gray-300 px-5' href="https://github.com/rlagalaraga">
                                Github <FaGithub size={30}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
        
    )
}

export default Navbar