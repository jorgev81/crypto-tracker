import React from "react";
import { Link } from "react-router-dom";
import heroBackground from "../assets/bitcoin.avif";

const Home: React.FC = () => (
  <div className="home-container">
    <div className="relative bg-gray-900">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${heroBackground})` }}
      ></div>
      <div className="relative container mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
          Welcome to CryptoTracker!
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Stay updated with real-time cryptocurrency rates and make informed
          decisions in the crypto market.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/rates"
            className="inline-block bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Explore Rates
          </Link>
        </div>
      </div>
    </div>
    <div className="container mx-auto px-4 py-8 text-center">
      <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
        What is Cryptocurrency?
      </h2>
      <p className="text-lg sm:text-xl lg:text-xl text-gray-200 mb-8 max-w-xl mx-auto">
        A cryptocurrency, crypto-currency, or crypto is a digital currency
        designed to work as a medium of exchange through a computer network that
        is not reliant on any central authority, such as a government or bank,
        to uphold or maintain it.
      </p>
      <a
        href="https://en.wikipedia.org/wiki/Cryptocurrency"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-800 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300"
      >
        Learn more
      </a>
    </div>
  </div>
);

export default Home;
