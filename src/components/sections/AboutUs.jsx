import React from 'react';
import TextBlock from '../blocks/TextBlock';
import FamilySVG from '../../assets/illustrations/family.svg';

const AboutUs = () => {
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
        heading='About Us'
        body='Mother and Son.....'/>
        <img src={FamilySVG} 
             alt="A family eating dinner"/>
      </div>
    </section>
  );
}

export default AboutUs;