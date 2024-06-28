import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '@/components/layout/NavBar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='flex flex-col justify-cotent align-center h-screen overflow-hidden box-border'>
      <NavBar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
