import { MapPinIcon, AtSymbolIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-black w-full border-t border-gray-400 px-5 lg:px-24  py-5 grid grid-cols-1 lg:grid-cols-3 gap-4 '>
      <div className='col-span-1 text-gray-200 '>
        <Link to={'/'}>
          <h1 className='text-gray-100 text-2xl font-light '>
            <span className='text-red-600 font-bold'>V-</span>
            <span className='text-red-600 font-bold'> E-</span>commerce
          </h1>
        </Link>
        <div className='flex gap-3  items-center py-3'>
          <PhoneIcon width={20} />
          <p className='text-gray-400 '>631-302-6263</p>
        </div>
        <div className='flex gap-3  items-center py-3'>
          <AtSymbolIcon width={20} />
          <p className='text-gray-400 '>v_ecommerce@gmail.com</p>
        </div>
        <div className='flex gap-3 py-2'>
          <MapPinIcon width={40} />
          <p className='text-gray-400 '>
            Av. 16 de Septiembre 868, Centro, 64000 Monterrey, N.L.
          </p>
        </div>
      </div>
      <div className='col-span-1 h-full grid place-content-center items-center text-white gap-4 text-center'>
        <a
          href='https://facebook.com/'
          className='bg-blue-500 py-2 px-5 rounded-md'
        >
          Faceboock
        </a>
        <a
          href='https://twitter.com/?lang=es'
          className='bg-[#00C0EF] py-2 px-5 rounded-md'
        >
          Twitter
        </a>
        <a
          href='https://www.instagram.com/'
          className='bg-[#FC3030] py-2 px-5 rounded-md'
        >
          Instagram
        </a>
      </div>
      <div className='col-span-1 text-center'>
        <h1 className='text-gray-200 text-2xl font-light '>Links</h1>
        <ul className='text-gray-400'>
          <li className='py-2'>
            <Link to={'/'}>Home</Link>
          </li>
          <li className='py-2'>
            <Link to={'/about'}>About</Link>
          </li>
          <li className='py-2'>
            <Link to={'/contact'}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
