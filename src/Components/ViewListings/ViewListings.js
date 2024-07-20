import React from 'react';
import { Link } from 'react-router-dom';
import './ViewListings.css';

const ViewListings = () => {
  return (
    <div className="view-my-listings-container">
        <Link to="/listing/:id">
      <button className="view-my-listings-button">
        View my listings
      </button>
      </Link>
    </div>
  );
};

export default ViewListings;