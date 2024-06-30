import React from 'react'
import { FeatureProps } from '@/interfaces/featureProps'

interface FeaturesProps {
  features: FeatureProps[]
}

const Features: React.FC<FeaturesProps> = ({ features }) => {
  return (
    <div className='flex flex-col justify-center items-center text-white mt-10 from-neutral-900 via-neutral-800 to-transparent '>
      <h1 className='text-3xl font-bold text-center'>Our Features</h1>
      <ul className='mt-10 flex flex-wrap justify-between text-center bg-neutral-900 rounded'>
        {features.map((feature) => (
          <li className='m-4 bg-neutral-900' key={feature.id}>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Features
