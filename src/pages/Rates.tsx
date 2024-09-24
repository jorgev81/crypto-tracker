import React from "react";
import { observer } from "mobx-react-lite";
import ratesStore from "../store/RatesStore";
import Search from "../components/Search";
import Sort from "../components/Sort";
import RatesTable from "../components/RatesTable";
import CoinCard from "../components/CoinCard/CoinCard";
import Pagination from "../components/Pagination/Pagination";

const Rates: React.FC = observer(() => {
  const {
    paginatedRates,
    loading,
    error,
    searchQuery,
    setSearchQuery,
    sortOption,
    setSortOption,
    viewType,
    setViewType,
    currentPage,
    setCurrentPage,
  } = ratesStore;

  const totalPages = Math.ceil(
    ratesStore.sortedRates.length / ratesStore.itemsPerPage
  );

  if (loading) {
    return <div className="text-center py-10 text-white">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-10 text-alert-danger">
        Error fetching rates: {error}
      </div>
    );
  }

  return (
    <div className="py-10 bg-neutral-dark min-h-screen">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="flex items-center justify-between md:justify-start">
            <h2 className="text-4xl font-bold text-white mb-4 md:mb-0">
              Cryptocurrency Rates Relative to USD
            </h2>

            <button
              onClick={() =>
                setViewType(viewType === "table" ? "card" : "table")
              }
              className="ml-4 text-neutral-light hover:text-white focus:outline-none"
              title={`Switch to ${
                viewType === "table" ? "Card" : "Table"
              } View`}
            >
              {viewType === "table" ? (
                <span className="text-3xl cursor-pointer">🃏</span>
              ) : (
                <span className="text-3xl cursor-pointer">📊</span>
              )}
            </button>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <Sort sortOption={sortOption} setSortOption={setSortOption} />
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>
        </div>

        {viewType === "table" ? (
          <RatesTable rates={paginatedRates} />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paginatedRates.map((coin) => (
              <CoinCard key={coin.symbol} coin={coin} />
            ))}
          </div>
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
});

export default Rates;
