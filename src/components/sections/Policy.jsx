import React from 'react';
import TextBlock from '../blocks/TextBlock';
import Card from '../cards/Card';

const data = [
  {
    heading: `Returns & Exchanges.`,
    body: `Yes! We do accept returns and also do exchanges within 30 days of sale. You must have the original reciept with you at the time of return/exchange.`
  },
  {
    heading: `Shipping Services.`,
    body: `Unfortunately, we do not offer shipping right now. We are looking to add this service soon!`
  },
  {
    heading: `Payment Methods.`,
    body: `We accept various payment methods. Cash, all major card companies, PayPal, Amazon Pay, and Apple Pay. For a full list of accepted payments, see the bottom of page.`
  },
  {
    heading: `Money Services.`,
    body: `Our money services are powered by Ria. All restrictions and limiations on orders will be based on Ria standards. For more questions, pleace call the store at (931) 278-9303.`,
  },
];

const Policy = () => {
  const headingStr = `Our Policies`;
  const bodyStr = `We work hard to serve all of our customers! To continue our goal to serve you, we have designed a set of policies to allow you to have the absolute greated shopping experience at La-Tiendita!`;

  return (
    <section id='Policy'
             className='bg-zinc-50
                        pt-10
                        pb-20
                        md:pb-32
                       '>

      <div className='flex
                      flex-col
                      items-center
                      xl:flex-row 
                      xl:justify-between
                      xl:mx-auto
                      xl:w-11/12
                      2xl:w-10/12
                    '>

          <div className='md:grid 
                          md:grid-cols-2 
                          md:grid-rows-2
                          md:gap-2
                          lg:gap-0
                          md:w-10/12
                         '>
            {
              data.map(data => {
                return (
                  <div className='py-8
                                  md:py-3
                                  '>
                    <Card heading={data.heading}
                          body={data.body}
                    />
                  </div>
                );
              })
            }
          </div>
          <div className='pb-10
                          order-first
                          lg:pr-10
                          xl:pl-20
                          xl:order-last
                          xl:w-8/12
                         '>
            <TextBlock 
                heading={headingStr}
                body={bodyStr}
                />
          </div>
      </div>
    </section>
  );
}

export default Policy;