import React from 'react'
import { NextPage } from 'next'
import Background from '@/components/layout/Background'
import Image from 'next/image'
import Introduction from '@/components/Introduction'

const HomePage: NextPage = () => {
  return (
    <Background>
      <Introduction />
    </Background>
  )
}

export default HomePage
