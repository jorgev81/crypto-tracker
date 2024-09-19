import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RateDetails: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [coinData, setCoinData] = useState<any>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://app.youhodler.com/api/v3/rates/extended`);
      const data = await response.json();
      const coin = data.find((coin: any) => coin.symbol === id.toUpperCase());
      setCoinData(coin);
    };
    fetchData();
  }, [id]);

  if (!coinData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{coinData.name}</h1>
      <p>Rate: {coinData.rate}</p>
      <p>Ask: {coinData.ask}</p>
      <p>Bid: {coinData.bid}</p>
      <p>24h Diff: {coinData.diff24h}</p>
    </div>
  );
};

export default RateDetails;
