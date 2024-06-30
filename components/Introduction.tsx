import React from 'react'
import Image from 'next/image'

const Introduction: React.FC = () => {
  return (
    <section className='flex justify-between p-6 size-9/12 w-full h-full bg-gradient-to-b from-transparent via-neutral-800 to-neutral-900 mt-6 text-white'>
      <div>
        <Image
          className=''
          src='/images/Intro-Image.png'
          layout='fill'
          objectFit='cover'
          alt='Running woman'
        />
      </div>
      <div className='flex justify-center items-start flex-col min-h-[600px] z-20 text-center text-shadow-black transform 2xl:-translate-x-56'>
        <h1 className='text-7xl'>Unleash</h1>
        <h1 className='text-5xl -translate-x-8'>Your Inner</h1>
        <h1 className='text-7xl underline decoration-4 translate-x-4'>
          Strength&nbsp;&nbsp;
        </h1>
      </div>
    </section>
  )
}

export default Introduction
