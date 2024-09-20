import React, { FC } from 'react';

interface SortProps {
  sortOption: string;
  setSortOption: (option: string) => void;
}

const Sort: FC<SortProps> = ({ sortOption, setSortOption }) => {
  return (
    <div className="flex items-center space-x-4">
      <label htmlFor="sort" className="text-neutral-light">
        Sort by:
      </label>
      <select
        id="sort"
        className="px-4 py-2 rounded-md bg-neutral-medium text-neutral-light focus:outline-none focus:ring-2 focus:ring-primary"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="symbol">Symbol (A-Z)</option>
        <option value="price">Price (High to Low)</option>
        <option value="change">24h Change (High to Low)</option>
      </select>
    </div>
  );
};

export default Sort;
