import React from 'react';
import TextBlock from '../blocks/TextBlock';
import FamilySVG from '../../assets/illustrations/family.svg';

const AboutUs = () => {
  const headingStr = 'About Us.';
  const bodyStr = 'We are a son and mother ran local shop that wants to bring an authentic Latino culture feel to a neighborhood near you! One where you feel free making quick stops to purchase authentic Hispanic goods or even take your time and enjoy looking at our other products.';
  
  return (
    <section className="border">
      <div className='flex 
                      flex-row 
                      justify-between
                      w-11/12
                      mx-auto
                      border
                      border-emerald-300'>
        <TextBlock 
            heading={headingStr}
            body={bodyStr}
        />
        <img src={FamilySVG} 
             alt="A family eating dinner"
             className='w-6/12'/>
      </div>
    </section>
  );
}

export default AboutUs;