import React from 'react';
import './ListingList.css';
import StarIcon from '@mui/icons-material/Star';

const ListingList = () => {
  const hotels = [
    {
      name: "Penthouse Bliss with Mountain Views",
      image: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-49434290/original/6d85a558-e272-4afb-ab1e-03afb7924966.jpeg?im_w=960",
      description: "Entire condo",
      details: "4 guests · Entire Condo · 2 beds · 2.5 bath · Wifi · Kitchen · Free Parking",
      rating: 4.88,
      reviews: 166,
      price: 325
    },
    {
      name: "The Lookout",
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-42211529/original/718267ea-5cf5-4c33-a519-c684f2d5f89f.jpeg?im_w=960",
      description: "Entire rental unit in Cape Town",
      details: "2 guests · Entire Home · 2 beds · 1 bath · Wifi · Kitchen · Free Parking",
      rating: 4.97,
      reviews: 256,
      price: 200
    },
    {
      name: "Newly refurbished flat with stunning ocean views",
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-770005281190921718/original/7564ac6c-b71e-4e66-8fd6-9a25ae8320fb.jpeg?im_w=960",
      description: "Entire home in Cape Town",
      details: "4 guests · Entire Home · 3 beds · 1 bath · Wifi · Kitchen · Free Parking",
      rating: 5.0,
      reviews: 318,
      price: 125
    }
  ];

  return (
    <div className="home-list">
      <h2>My Home List</h2>
      {hotels.map((hotel, index) => (
        <div className="hotel-card" key={index}>
          <img src={hotel.image} alt={hotel.name} className="hotel-image" />
          <div className="hotel-info">
            <h3>{hotel.description}</h3>
            <h2>{hotel.name}</h2>
            <p>{hotel.details}</p>
            <div className="hotel-rating">
              <StarIcon className="star-icon" /> {hotel.rating} ({hotel.reviews} reviews)
            </div>
            <div className="hotel-price">${hotel.price} /night</div>
          </div>
          <div className="hotel-actions">
            <button className="update-button">Update</button>
            <button className="delete-button">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListingList;