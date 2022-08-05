import React from 'react';
import TextBlock from '../blocks/TextBlock';
import FamilySVG from '../../assets/illustrations/family-meal.svg';

const AboutUs = () => {
  const headingStr = 'About Us.';
  const bodyStr = 'We are a son and mother ran local shop that wants to bring an authentic Latino culture feel to a neighborhood near you! One where you feel free making quick stops to purchase authentic Hispanic goods or even take your time and enjoy looking at our other products.';
  
  return (
    <section id='AboutUs' className='bg-zinc-50 py-40'>
      <div className='flex
                      flex-col
                      items-center
                      lg:flex-row
                      lg:justify-between
                      lg:w-11/12
                      lg:mx-auto
                      2xl:w-10/12
                      '>
        <div className='lg:w-6/12
                        lg:pl-0
                        xl:pl-10
                        xl:pr-20
                       '>
          <TextBlock 
              heading={headingStr}
              body={bodyStr}
            />
        </div>
        <img src={FamilySVG} 
             alt="A family eating dinner"
             className='pt-24
                        px-7
                        md:px-1
                        pb-0
                        lg:w-6/12
                       '/>
      </div>
    </section>
  );
}

export default AboutUs;