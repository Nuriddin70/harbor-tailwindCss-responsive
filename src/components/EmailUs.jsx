import React from 'react'
import Yard from './Assets/yard.png' 

const EmailUs = () => {
  return (
    <div className='w-full bg-[#28514F]'>
      <div className='max-w-[650px] mx-auto flex flex-col justify-center items-center text-center'>
        <h1 className='text-5xl text-white mt-60'>
          Our mission is to encourage readiness for all
        </h1>
        <p className='text-xl text-white mt-9 '>
          It's our dream that one day, everyday readiness will be 
          quite ordinary - like brushing your teeth.
        </p>
        <p className='text-xl text-white leading-8'>
          A little bit of effort with a big payoff.
        </p>
        <button className='py-4 px-8 mt-14 bg-white rounded-full text-base text-[#28514F]'>
          Learn more about us
        </button>
        
      </div>
      <img className='mx-auto w-full' src={Yard} alt="/" />
    </div>
  )
}

export default EmailUs