// Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import heroBackground from '../assets/bitcoin.avif'; // Ensure the path is correct

const Home: React.FC = () => (
  <div className="relative bg-gray-900">
    <div
      className="absolute inset-0 bg-cover bg-center opacity-60"
      style={{ backgroundImage: `url(${heroBackground})` }}
    ></div>

    {/* Overlay content */}
    <div className="relative container mx-auto px-4 py-32 text-center">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
        Welcome to CryptoTracker!
      </h1>
      <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
        Stay updated with real-time cryptocurrency rates and make informed decisions in the crypto market.
      </p>
      <div className="flex justify-center space-x-4">
        <Link
          to="/rates"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Explore Rates
        </Link>
        <a
          href="https://en.wikipedia.org/wiki/Cryptocurrency"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300"
        >
          What is Cryptocurrency?
        </a>
      </div>
    </div>
  </div>
);

export default Home;
