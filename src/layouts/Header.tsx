import React from 'react';
import { Link } from 'react-router-dom';
import LiveClock from '../components/LiveClock';

const Header: React.FC = () => (
  <header className="bg-blue-600 text-white shadow">
    <div className="container mx-auto flex items-center justify-between px-4 py-4">
      <Link to="/" className="text-2xl font-bold">
        CryptoTracker
      </Link>
      <LiveClock />
    </div>
  </header>
);

export default Header;
