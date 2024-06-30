import React from 'react'
import { HeaderProps } from '@/interfaces/HeaderProps'

const Background: React.FC<HeaderProps> = ({ children }) => {
  return <div className='bg-neutral-950 relative z-10'>{children}</div>
}

export default Background
