import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import SearchResultsPage from './Components/SearchResults';
import AdminDash from './Components/AdminPage/AdminDash';
import AddListing from './Components/AdminPage/AddListing';
import ReservationList from './Components/ReservationList/ReservationList';
import LoginPage from './Components/LoginPage/LoginPage';
import LuxSearchPage from './Components/LuxSearchPage/LuxSearchPage';
import ListingPlaces from './Components/ListingPlaces/ListingPlaces';
import SignUp from './Components/SignUp';
import Listings from './Components/Listings/Listings';

function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/listings' element={<Listings />} />
        <Route path='search' element={<SearchResultsPage />} />
        <Route path="/admin" element={<AdminDash />} />
        <Route path="/admin/02" element={<AddListing />} />
        <Route path='/reservationlist' element={<ReservationList />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUp />} /> {/* Corrected path */}
        <Route path='/Luxsearchpage' element={<LuxSearchPage />} />
        <Route path='/ListingPlaces' element={<ListingPlaces/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
