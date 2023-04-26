function Login() {
  return (
    <main className='flex flex-1 justify-center items-center  h-[94vh]'>
      <form className='bg-gray-50 py-20  shadow-xl w-full gap-4 lg:w-96 flex flex-col justify-center px-4'>
        <h1 className='text-gray-800 text-2xl font-light text-center'>
          <span className='text-red-600 font-bold'>V-</span>
          <span className='text-red-600 font-bold'> E-</span>commerce
        </h1>
        <input
          type='text'
          className='py-2 px-2 rounded-lg bg-white border border-gray-300'
          placeholder='Usuario'
        />
        <input
          type='text'
          className='py-2 px-2 rounded-lg bg-white border border-gray-300'
          placeholder='Contraseña'
        />
        <button className='w-full bg-red-500 py-2 rounded-md text-white'>
          Entrar
        </button>
        <p className='font-light text-gray-500 text-center'>
          ¿No tienes cuenta?{' '}
          <a href='#' className='text-red-500'>
            Registrate
          </a>
        </p>
      </form>
    </main>
  )
}

export default Login
