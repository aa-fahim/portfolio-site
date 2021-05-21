import React, { useRef } from 'react';
import '../../App.css';
import Cards from '../../components/Cards/Cards';
import HeroSection from '../../components/HeroSection/HeroSection';
import Footer from '../../components/Footer/Footer';

function Home() {

  const scrollToDiv = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const heroRef = useRef();
  const cardsRef = useRef();

  return (
    <>
      <HeroSection reference={heroRef} click={()=> scrollToDiv(cardsRef)}/>
      <Cards reference={cardsRef}/>
      <Footer />
    </>
  );
}

export default Home;
