import React from 'react';
import './Listings.css';
 import SleepPage from '../../Components/SleepPage/SleepPage'; // Adjust path if necessary
 import AmenitiesPage from '../../Components/AmenitiesPage/Amenities';
 import CalendarPage from '../../Components/CalendarPage/CalendarPage';
 import ReviewPage from '../../Components/ReviewPage/ReviewPage';
 import ExplorePage from '../../Components/ExplorePage/ExplorePage';
 import Hosted from '../../Components/Hosted/Hosted';
 import ThingsToKnowPage from '../../Components/ThingsToKnowPage/ThingsToKnowPage';
 import ShareIcon from '@mui/icons-material/Share';
 import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
 import StarIcon from '@mui/icons-material/Star';
 import FlagIcon from '@mui/icons-material/Flag';

const Listings = ({ startDate, endDate, setStartDate, setEndDate }) => {
  return (
    <div className="listings-main">
      <div className="listings-left">
         <div className="listings-details">
          <h3>Entire rental unit hosted by Dikeledi</h3>
          <p>2 guests · 1 bedroom · 2 bed · 1 bath</p>
        </div> 

        <div className="listings-features">
          <p>Entire home</p>
          <p>You'll have the apartment to yourself</p>
          <p>Enhanced Clean</p>
          <p>This Host committed to Airbnb's 5-step enhanced cleaning process.</p>
          <p>Self check-in</p>
          <p>Check yourself in with the keypad.</p>
          <p>Free cancellation before Feb 14</p>
        </div> 

        <div className="listings-description">
          <p>Come and stay in this superb rental unit, in the heart of the heart of Cape Town. Spacious and bright, in a real Cape Town building in exposed stone, you will enjoy all the charms of the city thanks to its ideal location. Close to many shops, bars and restaurants, you can access the apartment by tram A and C and bus routes 27 and 44...</p>
        </div>

        <div className="listings-actions">
          <button className="share-button"><ShareIcon /> Share</button>
          <button className="save-button"><FavoriteBorderIcon /> Save</button>
        </div> 
        <SleepPage />
        <AmenitiesPage />
        <CalendarPage
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        /> 
        <ReviewPage />
        <ExplorePage />
        <Hosted />
        <ThingsToKnowPage />
      </div>

      <div className="listings-right">
        <div className="reservation-card">
          <div className="price">
            <h3>$75 / night</h3>
            <div className="rating">
              <StarIcon className="star-icon" />
              <p>4.97 · 256 reviews</p>
            </div>
          </div>

          <div className="reservation-details">
            <div className="date-picker">
              <div>
                <p>CHECK-IN</p>
                <input type="date" />
              </div>
              <div>
                <p>CHECKOUT</p>
                <input type="date" />
              </div>
            </div>
            <div className="guests-picker">
              <p>GUESTS</p>
              <input type="number" min="1" max="10" defaultValue="2" />
            </div>
          </div>

          <button className="reserve-button">Reserve</button>
          <div className="pricing-breakdown">
            <div className="pricing-item">
              <p>$79 x 7 nights</p>
              <p>$555</p>
            </div>
            <div className="pricing-item">
              <p>Weekly discount</p>
              <p>-$28</p>
            </div>
            <div className="pricing-item">
              <p>Cleaning fee</p>
              <p>$62</p>
            </div>
            <div className="pricing-item">
              <p>Service fee</p>
              <p>$83</p>
            </div>
            <div className="pricing-item">
              <p>Occupancy taxes and fees</p>
              <p>$29</p>
            </div>
            <div className="pricing-item total">
              <p>Total</p>
              <p>$701</p>
            </div>
          </div>
          <div className="report-listing">
            <FlagIcon />
            <a href="#">Report this listing</a>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Listings;