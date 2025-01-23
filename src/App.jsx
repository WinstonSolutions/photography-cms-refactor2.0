import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero.jsx";
import HeroCard from "./components/HeroCard/HeroCard.jsx";
import BgVideo from "./assets/winnipeg-bg.mp4";
import wave from "./assets/wave Gif.gif";
import Animal from "./components/Animal/Animal.jsx";
import Portait from "./components/Portait/Portait.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Footer5 from "./components/Footer/Footer5.jsx";
import LandScape from "./components/LandScape/LandScape.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimalGallery from './pages/AnimalGallery/AnimalGallery';
import Home from './pages/Home/Home';

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animal-gallery" element={<AnimalGallery />} />
      </Routes>
    </Router>
  );
};

export default App;
