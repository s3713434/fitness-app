import React from 'react'
import { NextPage } from 'next'
import Background from '@/components/layout/Background'
import Introduction from '@/components/Introduction'
import Featrues from '@/components/Featrues/Featrues'

const HomePage: NextPage = () => {
  return (
    <Background>
      <Introduction />
      <Featrues />
    </Background>
  )
}

export default HomePage
