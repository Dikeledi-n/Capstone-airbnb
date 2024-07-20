import React from 'react';
import Header from '../../Components/Layouts/Header';
import Footer from '../../Components/Admin/AdminFooter';
import Listings from '../../Components/Listings/Listings';
import './ListingsPage.css';
import Hosted from '../../Components/Hosted/Hosted';
import ThingsToKnowPage from '../../Components/ThingsToKnowPage/ThingsToKnowPage';
import ExplorePage from '../../Components/ExplorePage/ExplorePage';
import ReviewPage from '../../Components/ReviewPage/ReviewPage';
import CalendarPage from '../../Components/CalendarPage/CalendarPage';
import AmenitiesPage from '../../Components/AmenitiesPage/Amenities';
import SleepPage from '../../Components/SleepPage/SleepPage';
import ListingCard from '../../Components/ListingCard/ListingCard';
import Gallery from '../../Components/Gallery/Gallery';
import SearchBox from '../../Components/Search/SearchBox';
import PreFooter from '../../Components/PreFooter/PreFooter';
import ListingGallery from '../../Components/ListingGallery/ListingGallery';


function ListingsPage() {
  return (
    <div>
      <SearchBox />
      <div className="listings-page">
        <Listings />
      </div>
      <Gallery />
      <ListingCard />
      <SleepPage />
      <AmenitiesPage />
      <CalendarPage />
      <ReviewPage />
      <Hosted />
      <ThingsToKnowPage />
      <PreFooter />
      <ExplorePage />
      <Footer />
    </div>
    
  );
}

export default ListingsPage;