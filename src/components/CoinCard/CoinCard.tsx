import React from "react";
import { Link } from "react-router-dom";
import { CoinRate } from "../../store/RatesStore";

interface CoinCardProps {
  coin: CoinRate;
}

const CoinCard: React.FC<CoinCardProps> = ({ coin }) => {
  return (
    <Link
      to={`/rates/${coin.symbol.toLowerCase()}`}
      className="bg-neutral-medium border border-neutral-light rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <h3 className="text-2xl font-semibold text-accent-orange mb-4">
        {coin.symbol}
      </h3>
      <p className="text-neutral-light mb-2">
        Price:{" "}
        <span className="text-accent-green">
          ${Number(coin.rateInfo.rate).toFixed(2)}
        </span>
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
          {Number(coin.rateInfo.diff24h).toFixed(2)}%
        </span>
      </p>
    </Link>
  );
};

export default CoinCard;
