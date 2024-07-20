import React from 'react';
import AdminHeader from '../../Components/AdminHeader/AdminHeader';
import ListingList from '../../Components/ListingList/ListingList';


function AddListing() {
  return (
    <div className="AddListing">
      <AdminHeader />
      <ListingList />
    </div>
  );
}

export default AddListing;