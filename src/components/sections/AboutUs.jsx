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
                      sm:flex-row
                      sm:justify-between
                      sm:w-11/12
                      sm:mx-auto
                      '>
        <div className='sm:w-6/12
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
                        pb-0
                        sm:w-5/12
                       '/>
      </div>
    </section>
  );
}

export default AboutUs;