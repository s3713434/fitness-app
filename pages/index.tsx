import React from 'react'
import { NextPage } from 'next'

const HomePage: NextPage = () => {
  return (
    <section className='flex flex-col justify-center items-center p-6 size-9/12 w-full bg-gradient-to-b from-orange-200 to-transparent mt-6'>
      <h1 className='text-5xl'>Welcome to LuvFitness</h1>
      <p className='text-lg mt-8 text-center size-1/2'>
        LuvFitness is your ultimate companion on your fitness journey.{' '}
        <span>Track your workouts</span>,<span>set goals</span> , and{' '}
        <span>stay motivated</span> with our comprehensive tools. Join our
        community today and transform your life with personalized fitness plans
        and expert advice.
      </p>
    </section>
  )
}

export default HomePage
