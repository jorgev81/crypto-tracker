// RateDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetRates } from '../hooks/useGetRates';
import { RateInfo } from '../models/RateInfo';

interface RouteParams {
  id: string;
}

const RateDetail: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const { data, error, loading } = useGetRates();

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error || !data) {
    return (
      <div className="text-center py-10 text-red-500">
        Error fetching coin data: {error}
      </div>
    );
  }

  const coinSymbol = id.toLowerCase();
  const coinData = data[coinSymbol];

  if (!coinData || !coinData['usd']) {
    return (
      <div className="text-center py-10 text-gray-500">
        Coin data not available for {id.toUpperCase()} relative to USD.
      </div>
    );
  }

  const rateInfo: RateInfo = coinData['usd'];

  return (
    <div className="py-10">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">
        {id.toUpperCase()} to USD Rate Details
      </h2>
      <div className="space-y-4 text-gray-700">
        <p className="text-xl">
          <span className="font-semibold">Rate (Medium Price):</span>{' '}
          ${rateInfo.rate}
        </p>
        <p className="text-xl">
          <span className="font-semibold">Ask Price:</span>{' '}
          ${rateInfo.ask}
        </p>
        <p className="text-xl">
          <span className="font-semibold">Bid Price:</span>{' '}
          ${rateInfo.bid}
        </p>
        <p className="text-xl">
          <span className="font-semibold">24h Change:</span>{' '}
          {rateInfo.diff24h}%
        </p>
      </div>
    </div>
  );
};

export default RateDetail;
