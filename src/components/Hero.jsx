import React from 'react'
import AppleIcon from './Assets/Icons/appleIcon.png'
import PlayStoreIcon from './Assets/Icons/playStoreIcon.png'

const Hero = () => {
  return (
    <div className=' max-w-[656px] mx-auto w-full h-screen text-center flex flex-col justify-center'>
      <h1 className='text-5xl text-[#28514F] font-medium'>Reimagining readiness for life's uncertain moments.</h1>
        
      <p className='text-gray-500 text-[21px] leading-8 text-center mt-9'>
        The app that makes disaster preparedness easy and accessible. Because sometimes 
        tomorrow doesn't look like today.
      </p>
      <div className='flex justify-center mt-11'>
        <div className='flex  items-center px-7 py-4 bg-[#28514F] rounded-[50px] text-white hover:bg-teal-800 mr-5 '>
          <img className='mr-2' src={AppleIcon} alt="Apple Icon" />
          <p>App Store</p>
        </div>
        <div className=' relative flex  items-center px-7 py-4 bg-[#AEB4B6] rounded-[50px] text-white hover:bg-slate-400'>
          <img className='mr-2' src={PlayStoreIcon} alt="Play Store Icon" />
          <p>Play Store</p>
          <p className='hidden hover:block absolute hover:-bottom-6 '>Join the Waitlist</p>
        </div>

      </div>
    </div>
  )
}

export default Hero