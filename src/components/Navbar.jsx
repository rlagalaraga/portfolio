import React, {useState} from 'react'
import {FaBars, FaTimes, FaLinkedin, FaGithub} from 'react-icons/fa'
import { IoDocumentText } from "react-icons/io5";
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)
    return (
        <>
            <div className='fixed w-full bg-black h-auto flex justify-between items-center px-4 z-10'>
                <a href='/' className='text-left text-[#FDF500] font-cyber font-bold text-3xl'>{"<RLG/>"}</a>
                {/*menu*/}
                <ul className='hidden font-bebas md:flex text-[#37EBF3] text-xl'>
                    <li className='m-5 hover:cursor-pointer'>
                        <Link to='hero' smooth={true} duration={500}>
                            home
                        </Link>
                    </li>
                    <li className='m-5 hover:cursor-pointer'>
                        <Link to='about' smooth={true} duration={500}>
                            about
                        </Link>
                    </li>
                    <li className='m-5 hover:cursor-pointer'>
                        <Link to='skills' smooth={true} duration={500}>
                            skills
                        </Link>
                    </li>
                    <li className='m-5 hover:cursor-pointer'>
                        <Link to='projects' smooth={true} duration={500}>
                            projects
                        </Link>
                    </li>
                    <li className='m-5 hover:cursor-pointer'>
                        <Link to='experience' smooth={true} duration={500}>
                            experience
                        </Link>
                    </li> 
                    <li className='m-5 hover:cursor-pointer'>
                        <Link to='contact' smooth={true} duration={500}>
                            info
                        </Link>
                    </li> 
                </ul>

                {/*icon*/}
                <div onClick={handleNav} className='md:hidden text-[#37EBF3] w-full z-20 m-5 text-xl flex justify-end'>
                    {!nav ? <FaBars/> : <FaTimes/>}
                </div>

                {/*mobile*/}
                <ul className={!nav ? 'hidden' : 'absolute font-bebas text-2xl text-[#37EBF3] top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center'}>
                    <li className='m-2 hover:cursor-pointer'>
                        <Link onClick={handleNav} to='hero' smooth={true} duration={500}>
                            home
                        </Link>
                    </li>
                    <li className='m-2 hover:cursor-pointer'>
                        <Link onClick={handleNav} to='about' smooth={true} duration={500}>
                            about
                        </Link>
                    </li>
                    <li className='m-2 hover:cursor-pointer'>
                        <Link onClick={handleNav} to='skills' smooth={true} duration={500}>
                            skills
                        </Link>
                    </li>
                    <li className='m-2 hover:cursor-pointer'>
                        <Link onClick={handleNav} to='projects' smooth={true} duration={500}>
                            projects
                        </Link>
                    </li>
                    <li className='m-2 hover:cursor-pointer'>
                        <Link onClick={handleNav} to='experience' smooth={true} duration={500}>
                            experience
                        </Link>
                    </li> 
                    <li className='m-2 hover:cursor-pointer'>
                        <Link onClick={handleNav} to='contact' smooth={true} duration={500}>
                            info
                        </Link>
                    </li>
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
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1ac5b0]'>
                            <a className='flex justify-between items-center h-full w-full text-gray-300 px-5' href="https://drive.google.com/file/d/1IxatSHbhNBTohWUuw1miDJmThSJTC1QC/view?usp=sharing">
                                Resume <IoDocumentText size={30}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
        
    )
}

export default Navbar