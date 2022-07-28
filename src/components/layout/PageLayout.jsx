import React from 'react';
import Navbar from '../bars/Navbar';
import Footer from '../sections/Footer';
import Hero from '../sections/Hero';
import AboutUs from '../sections/AboutUs';
import Features from '../sections/Features';
import PhotoGallery from '../sections/PhotoGallery';
import Faq from '../sections/Faq';
import Policy from '../sections/Policy'

const PageLayout = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      {/*<AboutUs />
      <Features />
      <PhotoGallery />
      <Faq />
      <Policy />
      <Footer /> */}
    </>
  );
}

export default PageLayout;