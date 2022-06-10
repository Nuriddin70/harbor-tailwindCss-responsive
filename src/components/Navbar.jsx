import React from 'react'
import  { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export const Navbar = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1200px] mx-auto'>
      <h1 className='text-[#28514F] font-bold text-2xl'>
        harbor
      </h1>
      <ul className='hidden md:flex text-[#65727B]'>
        <li className='px-5 py-2 text-base cursor-pointer hover:bg-gray-400 hover:rounded-[30px] hover:text-[#28514F]'> Home</li>
        <li className='px-5 py-2 text-base cursor-pointer hover:bg-gray-400 hover:rounded-[30px] hover:text-[#28514F]'>About</li>
        <li className='px-5 py-2 text-base cursor-pointer hover:bg-gray-400 hover:rounded-[30px] hover:text-[#28514F]'>Know Your Risks</li>
        <li className='px-5 py-2 text-base cursor-pointer hover:bg-gray-400 hover:rounded-[30px] hover:text-[#28514F]'>For Work</li>
        <li className='px-5 py-2 text-base cursor-pointer hover:bg-gray-400 hover:rounded-[30px] hover:text-[#28514F]'>Journal</li>
        <li className='px-5 py-2 text-base cursor-pointer hover:bg-gray-400 hover:rounded-[30px] hover:text-[#28514F]'>Shop</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>

      <ul className={nav ?'fixed left-0 top-0 h-full w-[35%] border-r border-r-gray-900 bg-teal-600 ease-in-out duration-500' : ' ease-in-out duration-500 fixed  left-[-100%]'}>
        <h1 className='text-[#28514F] font-bold text-2xl m-4'>
          harbor
        </h1>
        <li className='p-4 border-b border-gray-600 text-gray-400 cursor-pointer hover:bg-teal-700' >Home</li>
        <li className='p-4 border-b border-gray-600 text-gray-400 cursor-pointer hover:bg-teal-700'> About</li>
        <li className='p-4 border-b border-gray-600 text-gray-400 cursor-pointer hover:bg-teal-700'>Know Your Risks</li>
        <li className='p-4 border-b border-gray-600 text-gray-400 cursor-pointer hover:bg-teal-700'>For Work</li>
        <li className='p-4 border-b border-gray-600 text-gray-400 cursor-pointer hover:bg-teal-700'>Journal</li>
        <li className='p-4 border-b border-gray-600 text-gray-400 cursor-pointer hover:bg-teal-700'>Shop</li>
      </ul>
    </div>
  )
}

export default Navbar