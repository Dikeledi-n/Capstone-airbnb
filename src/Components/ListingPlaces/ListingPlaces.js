import React from 'react';
import './ListingPlaces.css';
import LoginHeader from '../../Components/LoginHeader/LoginHeader';
import CreateListing from '../../Components/CreateListing/CreateListing';
import ViewListings from '../../Components/ViewListings/ViewListings';

const ListingPlaces = () => {
  return (
    <div>
      <LoginHeader />
      <ViewListings />
      <CreateListing /> 
    </div>
  )
}

export default ListingPlaces;