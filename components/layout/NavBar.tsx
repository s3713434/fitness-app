import Link from 'next/link'
const NavBar: React.FC = () => {
  return (
    <nav className='p-3 bg-orange-100 shadow-lg'>
      <div className='flex justify-between items-center text-black'>
        <h1>
          <Link className='text-3xl font-bold' href='/'>
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
