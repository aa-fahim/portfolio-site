import React from 'react';
import '../../App.css';
import './AboutMe.css';

export default function AboutMe() {
  return (
    <div className='about-me'>
      <div className='text-container'>
        <h3 className='text-header'>About Me</h3>
        <p className='text-paragraph'>
          Hi there! If you're here, it means you came to find out a little more about myself and find out some 
          interesting things about me. Not sure why you would want to waste your time ... I won’t judge. So let's start!
        </p>
        <p className='text-paragraph'>
          I'm recent graduate with a Bachelor's degree in Electrical Engineering (severely scared of circuits 
          bc of that now) completed in May 2020.
        </p>
        <p className='text-paragraph'> 
          I have a year of experience working with a start-up called CryptoTRX that focuses on creating 
          cryptocurrency mobile applications. My role comprised of creating beautiful UI to engage users 
          while also implementing encryption and digital signature algorithms. Other responsibilities 
          included developing API calls to provide access to the databases.
        </p>
        <p className='text-paragraph'>
          I would consider web/mobile development to be my strong suits at this time, but I’ve also dabbed 
          in projects in areas of backend development, data analysis, machine learning, and embedded software development.
        </p>
        <p className='text-paragraph'>
          When I’m not sitting down at my desk and destroying my back, I like playing and watching sports 
          (mostly basketball and soccer, but I can get into any competitive physical sport including spikeball, 
          google it, it’s awesome). Big movie addict especially Christopher Nolan movies, there’s just something 
          about getting your mind destroyed while watching one of his movies that attracts me. The Prestige, best 
          movie ever. I’ll also accept Inception or Interstellar. And … I LOVE FOOD.
        </p>
      </div>
    </div>
  );
}
