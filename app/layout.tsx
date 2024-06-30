import '../styles/globals.css' // Import global styles
import NavBar from '@/components/layout/NavBar' // Import NavBar component
import { ReactNode } from 'react' // Import ReactNode for typing

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body className='flex flex-col justify-content align-center h-screen box-border'>
        <NavBar />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
