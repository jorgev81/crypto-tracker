// RateDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import ratesStore from '../store/RatesStore';

interface RouteParams {
  id: string;
}

const RateDetail: React.FC = observer(() => {
  const { id } = useParams<RouteParams>();
  const { rates, loading, error } = ratesStore;

  if (loading) {
    return <div className="text-center py-10 text-white">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-10 text-alert-danger">
        Error fetching coin data: {error}
      </div>
    );
  }

  const coinSymbol = id.toUpperCase();
  const coin = rates.find((c) => c.symbol === coinSymbol);

  if (!coin) {
    return (
      <div className="text-center py-10 text-neutral-light">
        Coin data not available for {coinSymbol} relative to USD.
      </div>
    );
  }

  const { rateInfo } = coin;

  return (
    <div className="py-10 bg-neutral-dark">
      <div className="container mx-auto w-1/2">
        <div className="bg-neutral-medium border border-neutral-light rounded-lg p-8 shadow-lg">
          <h2 className="text-5xl font-bold text-white mb-6">
            {id.toUpperCase()}
          </h2>
          <div className="space-y-6 text-neutral-light">
            <p className="text-2xl">
              <span className="font-semibold">Rate:</span>{' '}
              <span className="text-accent-green">
                ${rateInfo.rate.toFixed(2)}
              </span>
            </p>
            <p className="text-2xl">
              <span className="font-semibold">Ask Price:</span>{' '}
              ${rateInfo.ask.toFixed(2)}
            </p>
            <p className="text-2xl">
              <span className="font-semibold">Bid Price:</span>{' '}
              ${rateInfo.bid.toFixed(2)}
            </p>
            <p className="text-2xl">
              <span className="font-semibold">24h Change:</span>{' '}
              <span
                className={
                  rateInfo.diff24h >= 0
                    ? 'text-accent-green'
                    : 'text-alert-danger'
                }
              >
                {rateInfo.diff24h.toFixed(2)}%
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default RateDetail;
