import Link from 'next/link'

const NavBar: React.FC = () => {
  return (
    <nav className='p-3 bg-neutral-950 shadow-lg text-white z-20'>
      <div className='flex justify-between items-center'>
        <h1>
          <Link href='/' className='text-3xl font-bold'>
            LuvFitness
          </Link>
        </h1>
        <div className='flex space-x-4'>
          <Link href='/auth/login'>Login</Link>
          <p className='font-medium'>|</p>
          <Link href='/auth/register'>Sign Up</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
