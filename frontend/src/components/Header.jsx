import React from 'react';

const Header = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
        </svg>
        <span className="text-xl font-bold">Abstract</span>
        <span className="text-xl">|</span>
        <span className="text-xl">Help Center</span>
      </div>
      <button type="button" className="me-24 py-2.5 px-5 text-sm font-medium text-gray-400 focus:outline-none rounded-lg border border-gray-300 hover:bg-gray-700 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-700">
        Submit a request
      </button>
    </header>
  );
};

export default Header;