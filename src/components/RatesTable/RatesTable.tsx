
import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

import ratesStore, { CoinRate } from '../../store/RatesStore';

interface RatesTableProps {
  rates: CoinRate[];
}

const RatesTable: React.FC<RatesTableProps> = observer(({ rates }) => {
  const { currentPage, setCurrentPage } = ratesStore;

  const totalPages = Math.ceil(ratesStore.sortedRates.length / ratesStore.itemsPerPage);

  return (
    <div>
      <table className="min-w-full bg-neutral-medium text-neutral-light rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left">Symbol</th>
            <th className="px-6 py-3 text-left">Price</th>
            <th className="px-6 py-3 text-left">24h Change</th>
          </tr>
        </thead>
        <tbody>
          {rates.map((coin) => (
            <tr key={coin.symbol} className="border-b border-neutral-light">
              <td className="px-6 py-4">
                <Link
                  to={`rates/${coin.symbol.toLowerCase()}`}
                  className="text-accent-orange hover:underline"
                >
                  {coin.symbol}
                </Link>
              </td>
              <td className="px-6 py-4">
                ${coin.rateInfo.rate}
              </td>
              <td className="px-6 py-4">
                <span
                  className={
                    coin.rateInfo.diff24h >= 0
                      ? 'text-accent-green'
                      : 'text-alert-danger'
                  }
                >
                  {coin.rateInfo.diff24h}%
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


      <div className="flex justify-center mt-6 space-x-2">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-neutral-medium text-neutral-light rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2 bg-neutral-medium text-neutral-light rounded">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-neutral-medium text-neutral-light rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
});

export default RatesTable;
