import React from 'react';
import IconList from '../lists/IconList';
import NavList from '../lists/NavList';
import GMap from '../GMap';
import PaymentBar from '../bars/PaymentBar';
import Copyright from '../Copyright';

const Footer = () => {
  return (
    <section>
      <footer class="md:flex md:flex-row md:justify-between sm:text-lg p-10 bg-base-200">
        <div className='flex flex-col items-left border py-5 md:auto'>
          <h3 className='footer-title'>Contact Info</h3>
          <IconList/>
        </div> 
        <div className='flex flex-col items-left border py-5 md:w-auto'>
          <h3 className='footer-title'>Where To?</h3>
          <NavList title='Where to?'/>
        </div> 
        <div className='py-3'>
          <GMap/>
        </div>
      </footer> 
    <footer class="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
      <div class="items-center grid-flow-col">
        <Copyright/>
      </div> 
      <div class="md:place-self-center md:justify-self-end  sm:pr-0 md:pr-4">
        <PaymentBar />
      </div>
    </footer>
  </section>
  );
}

export default Footer;