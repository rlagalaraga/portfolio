import React from 'react'

const Contact = () => {
  return (
    <>
        <div name='contact' className='w-full h-[75vh] bg-black font-cyber text-[#D1C5C0] flex flex-col justify-center items-center'>
            <div className='max-w-[1000px] w-full h-full flex flex-col text-center justify-center items-center px-4'>
                <h1 className='text-4xl font-bebas inline border-b-4 text-[#37EBF3] border-[#710000]'>Available for job opportunities</h1>
                <h2 className='font-bold pt-2 text-[#fdf500]'>
                    Have an exciting project you need help with?
                    Send me an email or contact me via instant message!
                </h2>
                <h1 className='py-10 text-4xl'>rlagalaraga@gmail.com</h1>
                
                <ul className='py-4 text-2xl font-bebas'>
                    <a href="https://www.linkedin.com/in/rence-lennard-galaraga-043451238/" className='hover:text-[#9370db]'><li className=' pb-2'>Linkedin</li></a>
                    <a href="https://github.com/rlagalaraga" className='hover:text-[#9370db]'><li className=' pb-2'>Github</li></a>
                    <a href="https://drive.google.com/file/d/1IxatSHbhNBTohWUuw1miDJmThSJTC1QC/view?usp=sharing" className='hover:text-[#9370db]'><li className=' pb-2'>Resume</li></a>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Contact