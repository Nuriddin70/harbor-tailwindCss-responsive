import React from 'react'
import AppleIcon from './Assets/Icons/appleIcon.png'
import PlayStoreIcon from './Assets/Icons/playStoreIcon.png'
import Phone2 from './Assets/phone2.png'

const OurApp = () => {
  return (
    <div className='bg-white py-12 px-10 w-full'>
      <div className='max-w-[940px] mx-auto px-12 pt-8 text-center bg-[#F8E6BE] flex flex-col  items-center md:flex-row md:items-center'>
        <div className='max-w-[400px]'>
          <h1 className='text-5xl text-[#333333] mb-9 '  >Stay one step ahead with harbor</h1>
          <div className='flex justify-center mt-11'>
          <div className='flex  items-center px-7 py-4 bg-[#28514F] rounded-[50px] text-white hover:bg-teal-800 mr-5 '>
            <img className='mr-2' src={AppleIcon} alt="Apple Icon" />
            <p>App Store</p>
          </div>
          <div className='flex  items-center px-7 py-4 bg-[#AEB4B6] rounded-[50px] text-white hover:bg-slate-400'>
            <img className='mr-2' src={PlayStoreIcon} alt="Play Store Icon" />
            <p>Play Store</p>
            <p className='hidden hover:block absolute hover:-bottom-6 '>Join the Waitlist</p>
          </div>
      </div>
      </div>
        <div>
          <img src={Phone2} alt="/" />
        </div>
      </div>
    </div>
  )
}

export default OurApp