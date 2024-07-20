import React from 'react';
import './ListingSearchPage.css';
import StarIcon from '@mui/icons-material/Star';

const ListingSearchPage = () => {
  return (
    <div className="listing-search-page">
      <div className="listings-container">
        <h2>200+ stays in Cape Town</h2>
        <div className="listing">
          <img src="https://a0.muscache.com/im/pictures/8209bad0-3b87-4b61-a2e4-6874c6cc9925.jpg?im_w=960" alt="Listing 1" className="listing-image" />
          <div className="listing-details">
            <p className="listing-type">Entire home in Cape Town</p>
            <h3 className="listing-title">Cape Town Getaway</h3>
            <p className="listing-info">2 guests · Entire Home · 2 beds · 1 bath · Wifi · Kitchen · Free Parking</p>
            <p className="listing-rating">
              <StarIcon className="star-icon" /> 5.0 (318 reviews)
            </p>
          </div>
          <div className="listing-price">$325 /night</div>
        </div>
        <div className="listing">
          <img src="https://a0.muscache.com/im/pictures/miso/Hosting-745379526609896927/original/33114ff4-ff3a-4142-aba8-37114ff5c0c8.jpeg?im_w=960" alt="Listing 2" className="listing-image" />
          <div className="listing-details">
            <p className="listing-type">Entire home in Cape Town</p>
            <h3 className="listing-title">Unique Studio Apartment</h3>
            <p className="listing-info">2 guests · Entire Home · 1 beds · 1 bath · Wifi · Kitchen · Free Parking</p>
            <p className="listing-rating">
              <StarIcon className="star-icon" /> 5.0 (460 reviews)
            </p>
          </div>
          <div className="listing-price">$200 /night</div>
        </div>
        <div className="listing">
          <img src="https://a0.muscache.com/im/pictures/miso/Hosting-818006963389619282/original/348d37af-07d9-4d8b-ad32-0368c77e7827.jpeg?im_w=960" alt="Listing 3" className="listing-image" />
          <div className="listing-details">
            <p className="listing-type">Entire home in Cape Town</p>
            <h3 className="listing-title">Luxury Penthouse with Ocean Viewe</h3>
            <p className="listing-info">4 guests · Entire Home · 2 beds · 2 bath · Wifi · Kitchen · Free Parking</p>
            <p className="listing-rating">
              <StarIcon className="star-icon" /> 5.0 (918 reviews)
            </p>
          </div>
          <div className="listing-price">$125 /night</div>
        </div>
      </div>
    </div>
  );
};

export default ListingSearchPage;