import { Rating } from '@mui/material';
import React from 'react'
import AppleIconn from './Assets/Icons/appleIcon.png'

export const Comments = () => {
  return (
    <div className='my-40 max-w-5xl mx-auto text-center flex flex-col justify-center '>
      
        <h2 className='text-5xl text-[#28514F] font-medium'>We're ready, are you?</h2>
        <p className='text-gray-500 text-[21px] leading-8 text-center mt-9'>
        Here's what people are saying about harbor.
        </p>
      
      <div className='max-w-[922px] mx-auto flex flex-col md:flex-row justify-center items-center mt-24 '>
        <div className=' w-72 p-8 bg-slate-500 rounded-2xl text-white text-left m-2 ' >
          <p className='text-sm mb-5'>
            It's beautiful, easy to use, and is genuinely growing my confidence for crisis preparation.
          </p>
          <Rating
            name="simple-controlled"
          />
          <div className='flex items-center mt-5 '>
            <img src={AppleIconn} alt="Apple Icon" />
            <div className='ml-3'>
              <h5 className='text-base' > Antonea</h5>
              <p className='' >
                iOS Beta Tester
              </p>
            </div>
          </div>
        </div>

        <div className=' w-72 p-8 bg-slate-500 rounded-2xl text-white text-left m-2' >
          <p className='text-sm mb-5'>
            It's beautiful, easy to use, and is genuinely growing my confidence for crisis preparation.
          </p>
          <Rating
            name="simple-controlled"
          />
          <div className='flex items-center mt-5 '>
            <img src={AppleIconn} alt="Apple Icon" />
            <div className='ml-3'>
              <h5 className='text-base' > Antonea</h5>
              <p className='' >
                iOS Beta Tester
              </p>
            </div>
          </div>
        </div>

        <div className=' w-72 p-8 bg-slate-500 rounded-2xl text-white text-left m-2 ' >
          <p className='text-sm mb-5'>
            It's beautiful, easy to use, and is genuinely growing my confidence for crisis preparation.
          </p>
          <Rating
            name="simple-controlled"
          />
          <div className='flex items-center mt-5 '>
            <img src={AppleIconn} alt="Apple Icon" />
            <div className='ml-3'>
              <h5 className='text-base' > Antonea</h5>
              <p className='' >
                iOS Beta Tester
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
