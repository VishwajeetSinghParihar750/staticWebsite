import React from 'react';
import HeroSection from '../components/HeroSection';
import WhoWeAre from '../components/WhoWeAre';
import Sponsorship from '../components/Sponsorship';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <WhoWeAre />
      <Sponsorship />
      <Footer />
    </>
  );
};

export default HomePage;
