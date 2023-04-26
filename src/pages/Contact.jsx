import { AtSymbolIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <main className='pb-40'>
      <section>
        <div className='flex flex-wrap-reverse justify-around items-center'>
          <div className='text-center w-[350px]'>
            <h1 className='text-4xl py-3 '>Contactanos</h1>
            <p className='text-xl text-center font-light'>
              Siempre estamos disponibles para cualquier duda, nos puedes
              contactar por cualquier red sociales
            </p>
            <div className='flex pt-5 gap-4 justify-center'>
              <a className='hover:bg-blue-500 p-2 border rounded-lg'>
                <img src='facebook.png' alt='' className='w-10 h-10' />
              </a>
              <a className='hover:bg-red-500 p-2 border rounded-lg'>
                <img src='insta.png' alt='' className='w-10 h-10' />
              </a>
              <a className='hover:bg-blue-300 p-2 border rounded-lg'>
                <img src='twitter.png' alt='' className='w-10 h-10' />
              </a>
            </div>
          </div>
          <img src='contact.webp' alt='' className='w-[50%]' />
        </div>
      </section>
      {/* form para contactar */}
      <section className=''>
        <div className='text-center'>
          <h1 className='text-4xl py-3 '>Envia un Mensaje</h1>
          <p className='font-light'>
            Puedes enviarnos un mensaje con detalles de lo que gustes.
          </p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3  py-10 justify-around'>
          <div className='col-span-2  lg:w-[70%] lg:pl-14 '>
            <form className='flex flex-col gap-4 p-5'>
              <label htmlFor=''>Nombre y Apellidos</label>
              <input
                type='text'
                placeholder='Nombre'
                className='border p-2 rounded-lg'
              />
              <label htmlFor=''>Telefono</label>
              <input
                type='text'
                placeholder='Telefono'
                className='border p-2 rounded-lg'
              />
              <label htmlFor=''>Correo</label>
              <input
                type='email'
                placeholder='Email'
                className='border p-2 rounded-lg'
              />
              <label htmlFor=''>Mensaje</label>
              <textarea
                name=''
                id=''
                cols='30'
                rows='10'
                placeholder='Mensaje'
                className='border p-2 rounded-lg'
              ></textarea>
              <button className='bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg'>
                Enviar
              </button>
            </form>
          </div>
          <div className='col-span-1 p-5 flex flex-col justify-center '>
            <Link to={'/'}>
              <h1 className='text-black text-2xl font-light '>
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
            <div className='pt-10'>
            <img src="contact2.webp" alt="" className='rounded-xl' />
          </div>
          </div>
          
        </div>
      </section>
    </main>
  )
}

export default Contact
