import React from 'react'

import HeroPng from '../../assets/hero.png'

import { BiPlayCircle } from 'react-icons/bi'



const Hero = () => {

  return (

    <section className='relative min-h-[700px] flex items-center overflow-hidden'>

     

      {/* Background Blobs */}

      <div className='h-[450px] w-[450px] bg-gradient-to-r from-[#8B6F47] to-[#D4A574]

                      rounded-full blur-[100px] animated-wrapper opacity-10'>

      </div>



      <div className='container relative z-10 mx-auto px-4'>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-12 place-items-center w-full'>

         

          {/* Hero text section */}

          <div className='order-2 sm:order-1 space-y-8 lg:pr-10 text-center sm:text-left animate-slide-in-left'>

            <div className='space-y-4'>
              <h1 className='h1 font-serif'>

                Welcome to{' '}

                <span className='bg-gradient-to-r from-[#8B6F47] to-[#D4A574] bg-clip-text text-transparent'>

                  Brew & Soul

                </span>

              </h1>

              <p className='subtitle max-w-[600px]'>

                Discover the art of specialty coffee. From single-origin beans to artisanal preparation, 
                every cup tells a story. Join our community of passionate coffee lovers.

              </p>
            </div>

           

            <div className='flex flex-wrap justify-center sm:justify-start gap-4 pt-4'>

              <button className='primary-btn' aria-label="Get started with Brew & Soul">
                Order Now
              </button>

              <button 
                className='secondary-btn flex items-center justify-center gap-2'
                aria-label="Watch coffee guide video"
              >

                <BiPlayCircle className='text-lg' />

                Watch Video

              </button>

            </div>

          </div>  



          {/* Hero image section */}

          <div className='order-1 sm:order-2 relative'>

            <div className='relative z-20'>

              <img

                src={HeroPng}

                alt="Brew & Soul Coffee Shop - Premium Coffee Experience"

                className='w-full h-auto max-w-full drop-shadow-[0_20px_50px_rgba(139,111,71,0.4)] animate-float rounded-lg object-cover aspect-video'
                loading="lazy"

              />

            </div>

            {/* Decoration circle */}

            <div className='absolute inset-0 bg-[#8B6F47]/10 blur-3xl rounded-full scale-75 z-10'></div>

          </div>



        </div>

      </div>

    </section>

  )

}



export default Hero
