import React, { FC } from 'react';

interface SearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Search: FC<SearchProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="relative w-full md:w-1/2">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-neutral-light"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2.5a7.5 7.5 0 010 14.15z"
          />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search by symbol (e.g., BTC, ETH)..."
        className="w-full pl-10 pr-4 py-2 rounded-md bg-neutral-medium text-neutral-light placeholder-neutral-light focus:outline-none focus:ring-2 focus:ring-primary"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        aria-label="Search cryptocurrencies by symbol"
      />
    </div>
  );
};

export default Search;
