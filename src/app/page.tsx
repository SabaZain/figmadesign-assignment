import React from 'react'
import Navbar from '@/components/Navbar/Navbar';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className='h-screen flex'>
        <div className='w-1/2 flex flex-col justify-center align items-start ml-11'>
          <h2 className='text-[#000000] text-3xl sm:text-3xl font-serif font-bold w-[496px] h-[189px] '>IMPECCABLE CRAFTSMANSHIP AND FINESSE</h2>
          <p className='w-full sm:w-[902px] sm:h-[147px] sm:text-2xl text-xl font-extralight font-sans -mt-12'>An example of intricate workmanship and detail, 
          elegant <br/> necklaces and long and short chains form a part of our <br/> desirable collection.</p>
          <button className='bg-[#A29875] text-[#FFFFFF] text-lg font-serif 
          font-semibold p-[10px] border rounded-[10px] gap-[10px] pl-6 pr-6 -mt-6'>Explore Now</button>
        </div>
        <div className='w-1/2 flex mt-11'>
          <Image 
          src={"/Image/figmaheropic.svg"}
          alt={"Hero Image"}
          width={462}
          height={647}
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage;