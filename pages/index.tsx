import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import Background from '@/components/layout/Background'
import Introduction from '@/components/Introduction'
import Features from '@/components/Features/Features'
import { FeatureProps } from '@/interfaces/featureProps'
import featrueAPI from '@/api/featuresAPI'

interface HomePageProps {
  features: FeatureProps[]
}

const HomePage: NextPage<HomePageProps> = ({ features }) => {
  return (
    <Background>
      <Introduction />
      <Features features={features} />
    </Background>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // Validate the data
  const features: FeatureProps[] = featrueAPI.filter(
    (feature) => feature !== undefined
  )

  return {
    props: {
      features,
    },
  }
}

export default HomePage
