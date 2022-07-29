import React from 'react';
import TextBlock from '../blocks/TextBlock';

const Policy = () => {
  const headingStr = `Our Policies.`;
  const bodyStr = `We work hard to serve all of our customers! To continue our goal to serve you, we have designed a set of policies to allow you to have the absolute greated shopping experience at La-Tiendita!`;

  return (
    <section className="border">
      <div className='flex 
                      flex-row 
                      justify-between
                      w-11/12
                      mx-auto
                      border
                      border-emerald-300'>
         <p>Modal Goes Here</p>
          <TextBlock 
              heading={headingStr}
              body={bodyStr}
              />
      </div>
    </section>
  );
}

export default Policy;