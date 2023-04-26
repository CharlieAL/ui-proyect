import { Link } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
      <nav
        className={`bg-white min-w-full h-[6vh] flex justify-between px-5 items-center z-50 sticky  transition-all `}
      >
        <div>
          <Link to={'/'}>
            <h1 className='text-gray-800 text-2xl font-light '>
              <span className='text-red-600 font-bold'>V-</span>
              <span className='text-red-600 font-bold'> E-</span>commerce
            </h1>
          </Link>
        </div>
        <div className='flex-grow hidden md:block'>
          <ul className='flex justify-center items-center gap-6'>
            <li className='text-gray-500'>
              <Link to={'/'}>Home</Link>
            </li>
            <li className='text-gray-500'>
              <Link to={'/about'}>About</Link>
            </li>
            <li className='text-gray-500'>
              <Link to={'/contact'}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className='hidden md:block'>
          <Link to={'/login'}>
            <button className='text-white bg-red-500 py-1 px-4 rounded-lg'>
              Login
            </button>
          </Link>
        </div>
        <div className=''>
          <button
            onClick={() => {
              setShowMenu(!showMenu)
            }}
            className='md:hidden border border-gray-400 py-2 px-3 rounded-lg '
          >
            {showMenu ? (
              <XMarkIcon className='w-5 text-black' />
            ) : (
              <Bars3Icon className='w-5 text-black' />
            )}
          </button>
        </div>
      </nav>
      <div
        className={`md:hidden bg-white w-full transition-all duration-300 absolute  ${
          showMenu ? 'top-[6vh]' : '-top-full'
        } z-20 `}
      >
        <div className='text-center '>
          <ul className='flex flex-col '>
            <li className='text-gray-600 border-y border-gray-200 py-2'>
              <Link
                className='w-full '
                onClick={() => setShowMenu(!showMenu)}
                to={'/'}
              >
                <p>Home</p>
              </Link>
            </li>
            <li className='text-gray-600 border-b border-gray-200 py-2'>
              <Link
                className='w-full '
                onClick={() => setShowMenu(!showMenu)}
                to={'/about'}
              >
                <p>About</p>
              </Link>
            </li>
            <li className='text-gray-600 border-b border-gray-200 py-2'>
              <Link
                className='w-full '
                onClick={() => setShowMenu(!showMenu)}
                to={'/contact'}
              >
                <p>Contact</p>
              </Link>
            </li>
            <li className='text-gray-600 border-b border-gray-200 py-2'>
              <Link
                className='w-full '
                onClick={() => setShowMenu(!showMenu)}
                to={'/login'}
              >
                <p>Login</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
