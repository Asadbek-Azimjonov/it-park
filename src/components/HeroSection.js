import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container' id='home'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Kelajak seni kutmoqda</h1>
      <p>Bo`lajak dasurchi</p>
      
    </div>
  );
}

export default HeroSection;
