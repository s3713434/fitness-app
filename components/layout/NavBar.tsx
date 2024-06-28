import Link from 'next/link'
const NavBar: React.FC = () => {
  return (
    <nav className='p-4 bg-gray-800'>
      <div className='flex justify-between items-center text-white'>
        <div>
          <Link href='/'>LuvFitness</Link>
        </div>
        <div className='flex space-x-4'>
          <Link href='/auth/login'>Login</Link>
          <Link href='/auth/register'>Sign Up</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
