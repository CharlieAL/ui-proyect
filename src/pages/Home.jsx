import Carrusel from '../components/Carrusel'

// Objetivo: Página principal de la aplicación
function Home() {
  const slides = [
    {
      url: 'tienda1.webp'
    },
    {
      url: 'tienda2.webp'
    },
    {
      url: 'tienda3.webp'
    },
    {
      url: 'tienda4.webp'
    },
    {
      url: 'tienda5.jpeg '
    }
  ]
  return (
    <main className=''>
      {/* carrusel */}
      <Carrusel slides={slides} />
      {/* categorias */}
      <section className=' w-full pb-24 md:px-32 px-10 '>
        <h2 className='text-2xl  text-center my-4 '>CATEGORIAS</h2>
        <p className='text-center px-10 mb-10 text-gray-400'>
          Ofrecemos 3 tipos de categoria que son las siguientes Blog,
          E-commercve e informativa, todas pueden contar con metodo de pago
          seguros
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 '>
          <div className='col-span-1  shadow-lg px-4 bg-gray-100 rounded-xl'>
            <h3 className='text-center py-2 text-xl border-b border-gray-300'>
              Blog
            </h3>
            <div className='py-5'>
              <p className='text-gray-700'>
                Podemos crear un blog profesional y personalizado para su
                negocio que le permita compartir contenido y conectarse con su
                audiencia en línea. Nuestros servicios incluyen la creación de
                una interfaz de usuario fácil de usar, la optimización del blog
                para el SEO, la integración de formularios de suscripción y la
                configuración de herramientas de análisis web para rastrear el
                rendimiento de su blog.
              </p>
            </div>
            <button className='bg-red-500 text-white px-5 py-2 my-2 rounded-md'>
              Mas Info...
            </button>
          </div>
          <div className='col-span-1  shadow-lg px-4 bg-gray-100 rounded-xl'>
            <h3 className='text-center py-2 text-xl border-b border-gray-300'>
              E-Commerce
            </h3>
            <div className='py-5'>
              <p className='text-gray-700'>
                Podemos crear una tienda en línea profesional y personalizada
                para su negocio que le permita vender productos o servicios en
                línea. Nuestros servicios incluyen la creación de una interfaz
                de usuario fácil de usar, la integración de pasarelas de pago
                seguras y la optimización de la tienda para el SEO.
              </p>
            </div>
            <button className='bg-red-500 text-white px-5 py-2 my-2 rounded-md'>
              Mas Info...
            </button>
          </div>
          <div className='col-span-1 justify-center shadow-lg px-4 bg-gray-100 rounded-xl'>
            <h3 className='text-center py-2 text-xl border-b border-gray-300'>
              Informativa
            </h3>
            <div className='py-5'>
              <p className='text-gray-700'>
                Podemos crear un sitio web profesional y personalizado para su
                negocio que le permita mostrar información relevante a su
                audiencia en línea. Nuestros servicios incluyen la creación de
                una interfaz de usuario fácil de usar, la optimización del sitio
                web para el SEO y la integración de formularios de contacto para
                que sus visitantes puedan ponerse en contacto con usted
                fácilmente.
              </p>
            </div>
            <button className='bg-red-500 text-white px-5 py-2 my-2 rounded-md'>
              Mas Info...
            </button>
          </div>
        </div>
      </section>
      {/* sistemas de pago */}
      <section className='my-10 pb-24 md:px-32 px-10 '>
        <h2 className='text-2xl  text-center my-4 text-gray-700'>
          SISTEMAS DE PAGO
        </h2>
        <p className='text-center px-10 mb-10 text-gray-400'>
          Ofrecemos 3 tipos de sistemas de pago que son los siguientes Paypal,
          Stripe y Mercado Pago, todos pueden contar con metodo de pago seguros
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 '>
          <div className='col-span-1  shadow-lg px-4 bg-blue-600 rounded-xl'>
            <div className='flex justify-center py-4'>
              <img
                src='Paypal.png'
                alt='logo'
                className='border-b  rounded-md  object-cover w-[70%] '
              />
            </div>
            <div className='py-2'>
              <p className='text-gray-200'>
                PPayPal permite a los usuarios realizar transacciones en línea
                de manera segura y fácil sin necesidad de compartir información
                financiera confidencial con los destinatarios de los pagos.
              </p>
            </div>
            <button className='bg-white text-black px-5 py-2 my-2 rounded-md'>
              Mas Info...
            </button>
          </div>
          <div className='col-span-1  shadow-lg px-4 bg-purple-400 rounded-xl'>
            <div className='flex justify-center py-4'>
              <img
                src='stripe.png'
                alt='logo'
                className='border-b   object-cover w-[70%] '
              />
            </div>
            <div className='py-2'>
              <p className='text-gray-200'>
                Stripe es una plataforma de pagos en línea que permite a
                empresas y particulares aceptar y procesar pagos por Internet.
                Fundada en 2010, Stripe se ha convertido en una de las
                plataformas de pagos en línea más populares y ampliamente
                utilizadas en todo el mundo.
              </p>
            </div>
            <button className='bg-white text-black  px-5 py-2 my-2 rounded-md'>
              Mas Info...
            </button>
          </div>
          <div className='col-span-1  shadow-lg px-4 bg-[#00C0EF] rounded-xl'>
            <div className='flex justify-center py-4'>
              <img
                src='mercadopago.jpeg'
                alt='logo'
                className='border-b  rounded-md  object-cover w-[70%] '
              />
            </div>
            <div className='py-2'>
              <p className='text-gray-200'>
                Mercado Pago es un servicio de pagos en línea creado por Mercado
                Libre, la plataforma de comercio electrónico líder en América
                Latina. Mercado Pago permite a los usuarios realizar
                transacciones seguras y confiables en línea,
              </p>
            </div>
            <button className='bg-white text-black  px-5 py-2 my-2 rounded-md'>
              Mas Info...
            </button>
          </div>
        </div>
      </section>
      {/* productos card */}
      <section className='my-10 pb-24 md:px-32 px-10 '>
        <h2 className='text-2xl  text-center my-4 text-gray-700'>
          PAGINAS DE CLIENTES ANTERIORES
        </h2>
        <p className='text-center px-10 mb-10 text-gray-400'>
          Estas son algunas de las paginas que hemos creado para nuestros
          clientes anteriores
        </p>
        <div className='flex flex-wrap justify-between gap-4'>
          <div className='w-[400px]'>
            <img src='tienda2.webp' alt='' className='lg:w-full rounded-t-lg'  />
            <p className='bg-gray-100  py-2 rounded-b-lg px-4'> Esta pagina fue creada para vender dulces. con implementacion de mercado pago. </p>
          </div>
          <div className='w-[400px]'>
            <img src='tienda1.webp' alt='' className='lg:w-full rounded-t-lg'  />
            <p className='bg-gray-100 py-2 rounded-b-lg px-4'> Esta pagina fue creada para vender dulces. con implementacion de mercado pago. </p>
          </div>
          <div className='w-[400px]'> 
            <img src='tienda3.webp' alt='' className='lg:w-full rounded-t-lg'  />
            <p className='bg-gray-100  py-2 rounded-b-lg px-4'> Esta pagina fue creada para vender dulces. con implementacion de mercado pago. </p>
          </div>
          <div className='w-[400px]'>
            <img src='tienda4.webp' alt='' className='lg:w-full rounded-t-lg'  />
            <p className='bg-gray-100  py-2 rounded-b-lg px-4'> Esta pagina fue creada para vender dulces. con implementacion de mercado pago. </p>
          </div>
          <div className='w-[400px]'>
            <img src='tienda5.jpeg' alt='' className='lg:w-full rounded-t-lg'  />
            <p className='bg-gray-100 py-2 rounded-b-lg px-4'> Esta pagina fue creada para vender dulces. con implementacion de mercado pago. </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
