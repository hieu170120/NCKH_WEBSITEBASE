import React from 'react'

import HeroPng from '../../assets/hero.png'

import { BiPlayCircle } from 'react-icons/bi'



const Hero = () => {

  return (

    <section className='relative min-h-[700px] flex items-center overflow-hidden'>

     

      {/* Background Blobs:

          Dùng opacity thấp (10%) ở dark mode để không làm chìm nội dung

      */}

      <div className='h-[450px] w-[450px] bg-gradient-to-r from-primary to-secondary

                      rounded-full blur-[100px] animated-wrapper opacity-40 dark:opacity-10'>

      </div>



      <div className='container relative z-10 mx-auto px-4'>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-12 place-items-center w-full'>

         

          {/* Hero text section */}

          <div className='order-2 sm:order-1 space-y-6 lg:pr-10 text-center sm:text-left'>

            <h1 className='text-5xl md:text-6xl font-bold leading-tight'>

              Welcome to the{' '}

              <span className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent'>

                Metaverse

              </span>

            </h1>

           

            <p className='text-lg leading-relaxed max-w-[550px] leading-tight '>

              Step into a boundless digital realm where imagination meets innovation. 
              Explore immersive experiences, connect with communities, and shape the future of virtual worlds.

            </p>

           

            <div className='flex justify-center sm:justify-start gap-6 pt-2'>

              <button className='primary-btn' aria-label="Get started with UTE NCKH">Get Started</button>

              <button 
                className='flex items-center gap-2 font-semibold
                           hover:text-primary dark:hover:text-primary transition-colors group
                           focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1'
                aria-label="Watch demo video"
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

                alt="AI System for Papaya Leaf Disease Detection using Deep Learning"

                className='w-full max-w-[480px] drop-shadow-[0_20px_50px_rgba(59,130,246,0.4)] animate-float'
                loading="lazy"

              />

            </div>

            {/* Vòng tròn trang trí phía sau ảnh */}

            <div className='absolute inset-0 bg-blue-500/10 blur-3xl rounded-full scale-75 z-10'></div>

          </div>



        </div>

      </div>

    </section>

  )

}



export default Hero