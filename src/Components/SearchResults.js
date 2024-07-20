import React from 'react';
import './SearchResults.css';
import ListingSearchPage from '../Components/ListingSearchPage/ListingSearchPage';
import SearchBox from '../Components/Search/SearchBox';
import FilterPage from '../Components/FilterPage/FilterPage';


function SearchResults() {
  return (
    <div>
    <SearchBox />
    <FilterPage />
    <ListingSearchPage />
    </div>
  );
}

export default SearchResults; 