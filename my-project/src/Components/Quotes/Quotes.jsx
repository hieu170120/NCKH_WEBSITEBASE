import React from 'react'

const Quotes = () => {
  return (
    <section className='py-20 bg-[#2A1810] transition-colors duration-300'>
      <div className='container mx-auto px-4'>
          <div 
            data-aos="fade-up"
            className='max-w-[800px] mx-auto text-center space-y-6'
          >
            <blockquote 
              className='text-3xl md:text-4xl font-serif italic text-[#D4A574] leading-relaxed'
            >
              "Coffee is a language in itself."
            </blockquote>
            <p className='text-lg font-serif text-[#D4A574]/80 border-l-4 border-[#8B6F47] pl-6 inline-block'>
              — A moment of peace in every sip.
            </p>
          </div>
      </div>
    </section>
  )
}

export default Quotes
