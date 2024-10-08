import React from 'react';
import Header from './Header';
import Footer from './Footer';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col bg-neutral-dark min-h-screen">
      <Header />
      <main className="flex-grow main-container">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
