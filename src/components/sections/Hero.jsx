import React from 'react';
import bgImg from '../../assets/images/lt-outside-1.png';

const Hero = () => {
  return (
    <section
           style={{backgroundImage: `url(${bgImg})`}}
           className='hero 
                      min-h-screen
                     '>
  
      <div className='hero-overlay 
                      bg-opacity-50'/>
      <div className='hero-content 
                      text-center
                      text-neutral-content
                     '>
        <div className='px-3
                        sm:px-7
                        md:px-12
                        lg:px-24
                        2xl:px-36
                       '>
          <h1 className='font-bold 
                       text-zinc-50 
                         text-5xl
                         md:pb-1
                        '>
              La Tiendita.
          </h1>

          <p className='text-xl
                      text-slate-100 
                        text-justify
                        pt-12
                        md:pt-14
                        pb-20
                        '>
            We are a son and mother ran local shop that wants to bring an authentic Latino culture feel to a neighborhood near you! One where you feel free making quick stops to purchase authentic Hispanic goods or even take your time and enjoy looking at our other products.
          </p>

          <a href='#Photos'    
             className='decoration-none'>
            <button className='btn'>
              Look Inside
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

