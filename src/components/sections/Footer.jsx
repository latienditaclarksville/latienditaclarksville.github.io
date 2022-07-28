import React from 'react';
import IconList from '../lists/IconList';
import NavList from '../lists/NavList';
import GMap from '../GMap';
import PaymentBar from '../bars/PaymentBar';
import Copyright from '../Copyright';

const Footer = () => {
  return (
    <footer className='flex flex-col'>
      <div className='flex flex-row'>
        <section>
          <IconList />
        </section>
        <nav>
          <NavList />
        </nav>
        <article>
          <GMap />
        </article>
      </div>
      <div className='flex flex-row'>
        <PaymentBar />
        <Copyright />
      </div>
    </footer>
  );
}

export default Footer;