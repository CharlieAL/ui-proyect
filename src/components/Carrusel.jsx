import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

function Carrusel({slides}) {
  const [currenIndex, setCurrenIndex] = useState(0)
  const prevSlide = () => {
    const isFirstSlide = currenIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currenIndex - 1
    setCurrenIndex(newIndex)
  }
  const nextSlide = () => {
    const isLastSlide = currenIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currenIndex + 1
    setCurrenIndex(newIndex)
  }
  return (
    <section className="max-w-[1200px] w-full h-[580px] m-auto py-10 px-2 relative group" >
      <div style={{backgroundImage:`url(${slides[currenIndex].url})`,}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500 object-cover" ></div>
      {/* row left */}
      <div className='absolute top-[43%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full bg-black/40 p-2 text-white cursor-pointer hidden group-hover:block'>
        <ChevronLeftIcon onClick={prevSlide} width={30} />
      </div>
      {/* row right */}
      <div className='absolute top-[43%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full bg-black/40 p-2 text-white cursor-pointer hidden group-hover:block'>
        <ChevronRightIcon onClick={nextSlide} width={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {
          slides.map((slide, index) => {
            return (
              <div
                key={index}
                onClick={() => setCurrenIndex(index)}
                className={`w-3 h-3 mx-2 rounded-full cursor-pointer transition-all duration-500 ${
                  index === currenIndex ? 'bg-gray-700' : 'bg-gray-300'
                }`}
              ></div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Carrusel