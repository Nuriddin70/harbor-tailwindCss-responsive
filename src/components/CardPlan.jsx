import React from 'react'
import CardImg from './Assets/cardImg1.png'
import { AiFillGolden } from "react-icons/ai";

const CardPlan = () => {
  return (
    <div className='flex flex-col justify-center'>
      <div className=' max-w-[645px] mx-auto w-full h-screen text-center flex flex-col justify-center'>
        <h2 className='text-5xl text-[#28514F] font-medium'>The right plan for when things don't go as planned</h2>
        <p className='text-gray-500 text-[21px] leading-8 text-center mt-9'>
          Not prepared? You're not alone. Emergency planning
          is overwhelming. We work with experts to make the hard
          parts easy, so you can have confidence when it matters most.
        </p>
      </div>

      <div>
        <div className=' flex max-w-[940px] mx-auto items-end  '>
          <div className='p-12 bg-[#DAE1F4] rounded-2xl mr-5'>
            <input className='mb-10' type="image" src={CardImg} alt="Card Image"/>
            <AiFillGolden size={24}/>
            <h2 className='text-[2.4rem] font-bold mt-4 mb-8 '>Create your family's emergency plan</h2>
            <p> 
              Our app is tailored to you, your family and 
              your little dog, too. We tell you what you need 
              to stay safe from hurricanes to wildfires and everything in between.
            </p>
          </div>

          <div className='p-12 bg-[#D0E6F3] rounded-2xl'>
          <AiFillGolden size={24}/>
          <h2 className='text-[2.4rem] font-bold mb-3 mt-4'>
            Access and share important information, even offline
          </h2>
          <p className='mb-8'>
          View critical information, family plans, and documents at the push 
          of a button, both online and offline - no worries if cell towers go out.
          </p>
          <input  type="image" src={CardImg} alt="Card Image"/>
          </div>
      </div>

      <div className='flex max-w-[940px] mx-auto items-start mt-3 '>
        <div className='p-12 bg-[#E0F0E6] rounded-2xl mr-5'>
          <AiFillGolden size={24}/>
          <h2 className='text-[2.4rem] font-bold mb-3 mt-4'>
            Access and share important information, even offline
          </h2>
          <p className='mb-8'>
          View critical information, family plans, and documents at the push 
          of a button, both online and offline - no worries if cell towers go out.
          </p>
          <input  type="image" src={CardImg} alt="Card Image"/>
        </div>

          <div className='p-12 bg-[#F4F0E9] rounded-2xl '>
            <input className='mb-10' type="image" src={CardImg} alt="Card Image"/>
            <AiFillGolden size={24}/>
            <h2 className='text-[2.4rem] font-bold mt-4 mb-8 '>Create your family's emergency plan</h2>
            <p> 
              Our app is tailored to you, your family and 
              your little dog, too. We tell you what you need 
              to stay safe from hurricanes to wildfires and everything in between.
            </p>
          </div>
      </div>
    </div>
    <div className='bg-[#AEB4B6] rounded-[40px] mt-10 w-40 h-1 mx-auto'>
    </div>  
    </div>
  )
}

export default CardPlan