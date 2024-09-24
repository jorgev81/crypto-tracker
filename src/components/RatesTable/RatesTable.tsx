
import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { CoinRate } from '../../store/RatesStore';

interface RatesTableProps {
  rates: CoinRate[];
}

const RatesTable: React.FC<RatesTableProps> = observer(({ rates }) => {

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
                ${Number(coin?.rateInfo.rate).toFixed(2)}
              </td>
              <td className="px-6 py-4">
                <span
                  className={
                    coin.rateInfo.diff24h >= 0
                      ? 'text-accent-green'
                      : 'text-alert-danger'
                  }
                >
                  {Number(coin.rateInfo.diff24h).toFixed(2)}%
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

export default RatesTable;
