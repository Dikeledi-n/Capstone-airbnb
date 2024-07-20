import React from 'react';
import './LuxSearch.css';
import StarIcon from '@mui/icons-material/Star';

const LuxSearch = () => {
  return (
    <div className="listing-search-page">
         <button className="admin-button">Free cancellation</button>
        <button className="admin-button">Type of place</button>
        <button className="admin-button">Price</button>
        <button className="admin-button">Instant Book</button>
        <button className="admin-button">More filters</button>
      <div className="listings-container">
        <h2>200+ Airbnb Luxe stays in Cape Town</h2>
        <div className="listing">
          <img src="https://a0.muscache.com/im/pictures/miso/Hosting-614181955612465666/original/99ee616a-8836-4da2-b212-175ff7e4f148.jpeg?im_w=960" alt="Listing 1" className="listing-image" />
          <div className="listing-details">
            <p className="listing-type">Entire rental unit in Cape Town</p>
            <h3 className="listing-title">Sea Point</h3>
            <p className="listing-info">4 guests · Entire Home · 2 beds · 2 bath · Wifi · Kitchen · Free Parking</p>
            <p className="listing-rating">
              <StarIcon className="star-icon" /> 5.0 (134 reviews)
            </p>
          </div>
          <div className="listing-price">$2000 /night</div>
        </div>
        <div className="listing">
          <img src="https://a0.muscache.com/im/pictures/d0ca15e5-87bc-4912-bbc0-6c564e42afc7.jpg?im_w=960" alt="Listing 2" className="listing-image" />
          <div className="listing-details">
            <p className="listing-type">Entire loft in Cape Town</p>
            <h3 className="listing-title">Chic Penthouse with Private Pool & Breathtaking Views</h3>
            <p className="listing-info">2 guests · Entire Home · 1 beds · 1.5 bath · Wifi · Kitchen · Free Parking</p>
            <p className="listing-rating">
              <StarIcon className="star-icon" /> 5.0 (468 reviews)
            </p>
          </div>
          <div className="listing-price">$1500 /night</div>
        </div>
        <div className="listing">
          <img src="https://a0.muscache.com/im/pictures/ef28d808-a7fa-4dfc-8b6f-a1e81f635b58.jpg?im_w=960" alt="Listing 3" className="listing-image" />
          <div className="listing-details">
            <p className="listing-type">Entire townhouse in Cape Town</p>
            <h3 className="listing-title">Roof Top Hot Tub and Mountain Views in Stunning De Waterkant</h3>
            <p className="listing-info">4 guests · Entire Home · 3 beds · 2 bath · Wifi · Kitchen · Free Parking</p>
            <p className="listing-rating">
              <StarIcon className="star-icon" /> 5.0 (199 reviews)
            </p>
          </div>
          <div className="listing-price">$3000 /night</div>
        </div>
      </div>
    </div>
  );
};

export default LuxSearch;