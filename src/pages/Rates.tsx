// Rates.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useGetRates } from '../hooks/useGetRates';
import { RateInfo } from '../models/RateInfo';

interface CoinRate {
  symbol: string;
  rateInfo: RateInfo;
}

const Rates: React.FC = () => {
  const { data, error, loading } = useGetRates();

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error || !data) {
    return (
      <div className="text-center py-10 text-red-500">
        Error fetching rates: {error}
      </div>
    );
  }

  // Extract rates relative to USD
  const usdRates: CoinRate[] = [];

  for (const baseCurrency in data) {
    if (data[baseCurrency]['usd']) {
      usdRates.push({
        symbol: baseCurrency.toUpperCase(),
        rateInfo: data[baseCurrency]['usd'],
      });
    }
  }

  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        Cryptocurrency Rates Relative to USD
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {usdRates.map((coin) => (
          <Link
            to={`/rates/${coin.symbol.toLowerCase()}`}
            key={coin.symbol}
            className="border border-gray-200 rounded-lg p-6 shadow hover:bg-transparent hover:shadow-lg transition-shadow duration-300 bg-[#f0f8ff]"
          >
            <h3 className="text-2xl font-semibold mb-2">{coin.symbol}</h3>
            <p className="text-xl text-gray-600 mb-4">
              Price: ${coin.rateInfo.rate}
            </p>
            <p className="text-gray-500">
              24h Change: {coin.rateInfo.diff24h}%
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Rates;
