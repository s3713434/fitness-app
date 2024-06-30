import React from 'react'
import { IntroProps } from '@/interfaces/IntroProps'

const Background: React.FC<IntroProps> = ({ children }) => {
  return <div className='bg-neutral-950 relative z-10'>{children}</div>
}

export default Background
