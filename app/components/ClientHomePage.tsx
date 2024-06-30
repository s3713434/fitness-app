'use client' // This directive tells Next.js that this is a client component

import React, { useEffect, useState } from 'react'
import Background from '@/components/layout/Background'
import Introduction from '@/components/Introduction'
import Features from '@/components/Features/Features'
import { FeatureProps } from '@/interfaces/featureProps'
import featrueAPI from '@/api/featuresAPI'

const fetchFeatures = async (): Promise<FeatureProps[]> => {
  // Simulate fetching data from an API
  const features: FeatureProps[] = featrueAPI.filter(
    (feature) => feature !== undefined
  )
  return features
}

const ClientHomePage = () => {
  const [features, setFeatures] = useState<FeatureProps[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getFeatures = async () => {
      const fetchedFeatures = await fetchFeatures()
      setFeatures(fetchedFeatures)
      setLoading(false)
    }

    getFeatures()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <Background>
      <Introduction />
      <Features features={features} />
    </Background>
  )
}

export default ClientHomePage
