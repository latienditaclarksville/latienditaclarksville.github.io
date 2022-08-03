import React from 'react';
import TextBlock from '../blocks/TextBlock';
import Card from '../cards/Card';

const data = [
  {
    heading: `What does La Tiendita mean?`,
    body: `Simply, "Little Shop." Depsite our size, we have big amounts of authentic Latino goods.`
  },
  {
    heading: `What are your operating hours?`,
    body: `We are open Monday-Friday from 9am to 8pm. And Saturday and Sunday from 10am to 7pm.`
  },
  {
    heading: `Where are you located?`,
    body: `Our shop is located at 3862 Trenton Rd Ste C, Clarksville TN 37042. Need better directions? Check the Google map at the bottom.`,
  },
  {
    heading: `Where do I ask my questions?`,
    body: `Two Ways. One, call (931) 278-9303 or email Franciscoh.2000@icloud.com`,
  },
];

const Faq = () => {
  const headerStr = `FAQs`;
  const bodyStr = `Here are the most common question we get asked! If you don't see your question, feel free to send us an email at Francisco.2000@icloud.com or call us as (931)278-9303. We'd love to answer any questions you may have!`;

  return (
    <section id='FAQ'
             className='bg-zinc-50
                        py-20
                       '>

      <div className='flex 
                      flex-col
                      items-center
                      sm:flex-row
                      sm:justify-between
                      sm:mx-auto
                      sm:w-11/12'>
        
        <div className='pb-10
                        sm:w-6/12'>
          <TextBlock 
            heading={headerStr}
            body={bodyStr}
          />
        </div>
        <div className='sm:grid 
                        sm:grid-cols-2 
                        sm:grid-rows-2
                        sm:gap-8
                        '>
          {
          data.map(data => {
            return (
              <div className='py-8
                             '>
                <Card heading={data.heading}
                      body={data.body}
                />
              </div>
            );
          })
        }
        </div>
      </div>
    </section>
  );
}

export default Faq;