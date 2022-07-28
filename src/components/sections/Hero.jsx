import React from 'react';
import bgImg from '../../assets/images/cooler.png';

const Hero = () => {
  return (
    <section className="hero min-h-screen" style={{backgroundImage: `url(${bgImg})`}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">La Tiendita.</h1>
          <p className="mb-5">We are a son and mother ran local shop that wants to bring an authentic Latino culture feel to a neighborhood near you! One where you feel free making quick stops to purchase authentic Hispanic goods or even take your time and enjoy looking at our other products.</p>
          <button className="btn btn-primary">Look Inside</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;

