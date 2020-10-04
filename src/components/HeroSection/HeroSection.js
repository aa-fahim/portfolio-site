import React from 'react';
import '../../App.css';
import { Button } from '../Button/Button';
import './HeroSection.css';

function HeroSection() {

  const handleClick = () => {
    window.open('/resume', '_blank')
  }
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Ashif Fahim</h1>
      <p>A guy that likes to break things then fix them</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={handleClick}
        >
          Know More <i className='fa fa-download' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
