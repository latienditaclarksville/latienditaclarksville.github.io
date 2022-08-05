import React from 'react';
import SEO from '../SEO';
import Navbar from '../bars/Navbar';
import Hero from '../sections/Hero';
import AboutUs from '../sections/AboutUs';
import Features from '../sections/Features';
import PhotoGallery from '../sections/PhotoGallery';
import Faq from '../sections/Faq';
import Policy from '../sections/Policy';
import Footer from '../sections/Footer';

const PageLayout = () => {
  return (
    <>
      <SEO />
      <Navbar/>
      <Hero />
      <AboutUs />
      <Features />
      <PhotoGallery />
      <Faq />
      <Policy />
      <Footer />
    </>
  );
}

export default PageLayout;