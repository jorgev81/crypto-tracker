import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGetRates } from "../hooks/useGetRates";
import { RateInfo } from "../models/RateInfo";
import Search from "../components/Search";
import Sort from "../components/Sort";

interface CoinRate {
  symbol: string;
  rateInfo: RateInfo;
}

const Rates: React.FC = () => {
  const { data, error, loading } = useGetRates();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("symbol");

  if (loading) {
    return <div className="text-center py-10 text-white">Loading...</div>;
  }

  if (error || !data) {
    return (
      <div className="text-center py-10 text-alert-danger">
        Error fetching rates: {error}
      </div>
    );
  }

  const usdRates: CoinRate[] = [];

  for (const baseCurrency in data) {
    if (data[baseCurrency]["usd"]) {
      usdRates.push({
        symbol: baseCurrency.toUpperCase(),
        rateInfo: data[baseCurrency]["usd"],
      });
    }
  }

  const filteredRates = usdRates.filter((coin) =>
    coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedRates = [...filteredRates].sort((a, b) => {
    switch (sortOption) {
      case "price":
        return b.rateInfo.rate - a.rateInfo.rate;
      case "change":
        return b.rateInfo.diff24h - a.rateInfo.diff24h;
      case "symbol":
      default:
        return a.symbol.localeCompare(b.symbol);
    }
  });

  return (
    <div className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <h2 className="text-4xl font-bold text-white mb-4 md:mb-0">
          Cryptocurrency Rates Relative to USD
        </h2>
        <div className="flex flex-col gap-4 md:items-end">
          <Sort sortOption={sortOption} setSortOption={setSortOption} />
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sortedRates.map((coin) => (
          <Link
            to={`/rates/${coin.symbol.toLowerCase()}`}
            key={coin.symbol}
            className="bg-neutral-medium border border-neutral-light rounded-lg p-6 shadow-lg hover:bg-transparent transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold text-accent-orange mb-4">
              {coin.symbol}
            </h3>
            <p className="text-neutral-light mb-2">
              Price:{" "}
              <span className="text-accent-green">${coin.rateInfo.rate}</span>
            </p>
            <p className="text-neutral-light">
              24h Change:{" "}
              <span
                className={
                  coin.rateInfo.diff24h >= 0
                    ? "text-accent-green"
                    : "text-alert-danger"
                }
              >
                {coin.rateInfo.diff24h}%
              </span>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Rates;
