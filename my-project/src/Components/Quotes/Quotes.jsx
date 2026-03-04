import React from 'react'

const Quotes = () => {
  return (
    <section className='py-16 bg-gray-900 transition-colors duration-300'>
      <div className='container mx-auto px-4'>
          <blockquote 
            data-aos="fade-up"
            className='text-2xl sm:text-4xl font-bold max-w-[650px]
            mx-auto text-center font-pixelify text-gray-200'
          >
              "The metaverse is not a destination, it's a journey of endless possibilities and human connection."
          </blockquote>
      </div>
    </section>
  )
}

export default Quotes