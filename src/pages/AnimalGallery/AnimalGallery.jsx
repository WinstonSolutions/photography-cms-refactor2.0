import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer5';
import RollingGallery from '../../components/RollingGallery/RollingGallery';

const AnimalGallery = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      {/* Add padding top to account for fixed navbar */}
      <div className="pt-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Animal Photography</h1>
          <p className="text-gray-300 text-center mb-12">
            Discover our collection of stunning animal photography, capturing the beauty and personality of various creatures.
          </p>
          <RollingGallery autoplay={true} pauseOnHover={true} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AnimalGallery; 