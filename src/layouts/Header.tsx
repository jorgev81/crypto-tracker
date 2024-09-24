import React from "react";
import { Link } from "react-router-dom";
import LiveClock from "../components/LiveClock";

const Header: React.FC = () => (
  <header className="bg-primary text-white shadow-md">
    <div className="container mx-auto flex items-center justify-between px-4 py-4">
      <Link to="/" className="text-2xl font-bold">
        CryptoTracker
      </Link>
      <nav className="flex items-center space-x-6">
        <Link
          to="/rates"
          className="text-gray-100 px-2 py-1 rounded-md bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300"
        >
          Rates
        </Link>
        <LiveClock />
      </nav>
    </div>
  </header>
);

export default Header;
