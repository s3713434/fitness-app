import React from 'react'

interface FeatureProps {
  title: string
  description: string
  icon: React.ReactNode
}

const Feature: React.FC<FeatureProps> = ({ title, description, icon }) => {
  return (
    <div className='flex flex-col items-center p-4 m-4 bg-neutral-800 rounded-lg text-center'>
      <div className='text-5xl mb-4'>{icon}</div>
      <h2 className='text-2xl font-bold mb-2'>{title}</h2>
      <p className='text-lg'>{description}</p>
    </div>
  )
}

export default Feature
