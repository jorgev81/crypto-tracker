import React, { PropsWithChildren } from 'react';
import LiveClock from '../components/LiveClock';

const MainLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold underline">
            CryptoTracker
          </h1>
          <ul className="hidden md:flex space-x-6">
            <li>
              <LiveClock />
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} My Website. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
