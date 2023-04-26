import Carrusel from '../components/Carrusel'

function About() {
  const slides = [
    {
      url: 'trabajo1.webp'
    },
    {
      url: 'trabajo2.webp'
    },
    {
      url: 'trabajo3.webp'
    },
    {
      url: 'trabajo4.webp'
    },
    {
      url: 'trabajo5.webp '
    }
  ]
  return (
    <main>
      <Carrusel slides={slides} />
      <section className=" w-full pb-24 md:px-32 px-10">
        <h2 className='text-2xl  text-center my-4 '>NOSOTROS</h2>
        <p className='text-center py-2 mb-10 text-gray-400'>
          ¡Encontrar soluciones permanentes es nuestra meta!
        </p>
        <p className='text-center mb-6  text-gray-400'>
          La empresa tiene como objetivos de calidad, el compromiso de
          satisfacción de cada cliente a través de la entrega completa y
          oportuna de los requerimientos, partes maquinadas de precisión y
          manufactura esbelta con calidad, tecnología y precios competitivos.
        </p>
        <p className='text-center  text-gray-400'>
          Estamos conscientes de que nuestro desempeño impacta al cliente y de
          que somos parte fundamental de su éxito, por ello; buscamos la mejora
          continua trabajando en equipo con honestidad, ética y lealtad.
        </p>
      </section>
      <section className=' w-full pb-24 md:px-32 px-10'>
        <h2 className='text-2xl  text-center my-4 '>FORTALEZAS</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
          <div className='col-span-1'>
            <h1 className=' text-2xl  text-center my-4'>MISION</h1>
            <p className='text-center  text-gray-400'>
              Proveer productos y servicios en un ambiente de ética profesional,
              lealtad y excelencia hacia nuestros clientes.
            </p>
          </div>
          <div className='col-span-1'>
            <h1 className='text-2xl  text-center my-4'>VISION</h1>
            <p className='text-center  text-gray-400'>
              Ser una empresa líder en la venta de paginas wev para satisfacer
              las necesidades de la industria a nivel nacional.
            </p>
          </div>
          <div className='col-span-1 '>
            <h1 className='text-2xl  text-center my-4'>VALORES</h1>
            <p className='text-center  text-gray-400'>
              Respeto a nuestro trabajo y compañeros para lograr un mejor
              ambiente laboral.<br/> Superación cada día, capacitándonos y dar como
              resultado personal con la más alta competencia para fabricar
              productos con la más alta calidad.<br/> Compromiso con nuestro trabajo
              y nuestras familias en poder lograr los objetivos de la empresa y
              los personales.
            </p>
          </div>
        </div>
      </section>
      <section className=' w-full pb-24 md:px-32 px-10'>
        <h2 className='text-2xl  text-center my-4 '>NUESTROS SERVICIOS</h2>
        <h4 className='text-3xl  text-center my-4 '>¡La calidad primero! Nos aseguramos que cada detalle en cada producto sea inspeccionado en el proceso de su creacion. Nuestro enfoque es 100% la satisfacción del cliente.</h4>
      </section>
    </main>
  )
}

export default About
