import React from 'react'
import { NextPage } from 'next'

const HomePage:NextPage = ()=>{
  return(<div className='flex flex-col justify-cotent align-center h-screen'>
    <h1 className='text-center text-4xl'>Welcome to <span>LuvFitness</span>!</h1>
  </div>)
}

export default HomePage