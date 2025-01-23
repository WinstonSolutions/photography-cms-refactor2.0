import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import HeroCard from '../../components/HeroCard/HeroCard';
import Animal from '../../components/Animal/Animal';
import Portait from '../../components/Portait/Portait';
import LandScape from '../../components/LandScape/LandScape';
import Footer5 from '../../components/Footer/Footer5';
import BgVideo from '../../assets/winnipeg-bg.mp4';

const Home = () => {
  return (
    <div className="">
      <div className="h-[700px] relative">
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        >
          <source src={BgVideo} type="video/mp4" />
        </video>
        <Navbar />
        <Hero />
      </div>
      <HeroCard />
      <Animal />
      <Portait />
      <LandScape />
      <Footer5 />
    </div>
  );
};

export default Home; 