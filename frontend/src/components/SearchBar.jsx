import React from 'react';
import { useCards } from '../context/CardContext';

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useCards();

  return (
    <div className="bg-[#dadbf1] py-16 px-4">
      <h1 className="text-6xl font-medium text-center mb-8">How can we help?</h1>
      <div className="max-w-2xl mx-auto relative">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-4 pr-12 rounded-md shadow-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>

        </button>
      </div>
    </div>
  );
};

export default SearchBar;