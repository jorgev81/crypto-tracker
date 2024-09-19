import { FC } from 'react';
import { Link } from 'react-router-dom';

const Home: FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to the Crypto App</h1>
      <p className="text-lg text-gray-700 mt-4">Check the latest cryptocurrency rates!</p>
      <Link to="/rates" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700">
        View Rates
      </Link>
    </div>
  );
};

export default Home;
