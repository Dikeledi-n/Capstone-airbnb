import React from 'react';
import Header from '../Components/Layouts/Header';
import Banner from '../Components/Layouts/Banner';
import Inspiration from './Inspiration';
import NavSection from './NavSection';
import PreFooter from './PreFooter/PreFooter';

const Home = () => {
  return (
    <div>
      <Header />
      <NavSection />
      <Banner />
      <Inspiration />
      <PreFooter />
    </div>
  );
}

export default Home;