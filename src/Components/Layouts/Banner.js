import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <div className='banner-container'>
      <div className='banner'>
        <img 
          src="https://a0.muscache.com/im/pictures/27a1b9d7-f38c-44ef-a5bd-beaeb7c45d84.jpg" 
          alt="Banner Background" 
          className='banner-image'
        />
        <div className='banner-text-container'>
          <h1 className='banner-text'>Not sure where to go? Perfect.</h1>
          <button className='banner-text-button'>I'm flexible</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;