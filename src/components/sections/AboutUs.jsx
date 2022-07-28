import React from 'react';
import TextBlock from '../blocks/TextBlock';
import FamilySVG from '../../assets/illustrations/family.svg';

const AboutUs = () => {
  return (
    <section className="flex flex-row">
      <TextBlock 
        heading='About Us'
        body='Mother and Son.....'/>
      <div>
        <img src={FamilySVG} alt="A family eating dinner" />
      </div>
      <h1>Testing Tailwind</h1>
    </section>
  );
}

export default AboutUs;