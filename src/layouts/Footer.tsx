import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-gray-200 text-center py-4">
    <p>&copy; {new Date().getFullYear()} CryptoTracker. All rights reserved.</p>
  </footer>
);

export default Footer;
