import React from 'react';
import IconList from '../lists/IconList';
import NavList from '../lists/NavList';
import GMap from '../GMap';
import PaymentBar from '../bars/PaymentBar';
import Copyright from '../Copyright';

const Footer = () => {
  return (
    <section className='bg-emerald-800'>
      <footer className='text-lg
                         flex 
                         flex-col
                         sm:flex-row
                         sm:flex-wrap
                         sm:justify-around
                         sm:items-top
                         md:flex-row
                         md:justify-around
                         md:flex-wrap
                         py-10
                         px-7
                         sm:px-20
                        '>

        <div className='flex 
                        flex-col
                        items-left
                        py-5
                        text-left
                        md:pr-0
                        lg:pr-32
                        lg:order-first
                       '>
          <h3 className='footer-title 
                       text-zinc-50 
                         opacity-95
                        '>
            Contact Info
          </h3>
          <IconList/>
        </div> 

        <div className='flex 
                        flex-col
                        items-left
                        py-5
                        order-first
                        md:pl-5
                        lg:pr-56
                       '>
          <h3 className='footer-title 
                       text-zinc-50 
                         opacity-95
                        '>
            Where To?
          </h3>
          <NavList title='Where to?'/>
        </div> 

        <div className='py-3
                        mx-auto
                        sm:py-20
                        lg:pl-20
                       '>
          <GMap/>
        </div>
      </footer>

      <footer className='footer
                         flex
                         flex-col
                         items-center
                         md:flex-row
                         md:justify-around
                         lg:justify-between
                         md:items-center
                         px-10
                         md:px-0
                         lg:px-20
                         py-4
                         
                        '>
        <div className='mx-auto
                        md:mx-0
                        text-center
                        md:text-left
                        lg:place-self-start
                       '>
          <Copyright/>
        </div> 
        <div className='
                       '>
          <PaymentBar />
        </div>
      </footer>
  </section>
  );
}

export default Footer;