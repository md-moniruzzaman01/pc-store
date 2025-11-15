import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { LayoutProps } from './config/types';
import Navbar from '../common/widgets/Navbar/Navbar';
import SearchBar from '../common/widgets/Navbar/partials/SearchBar/SearchBar';
import Category from '../common/widgets/Navbar/partials/Category/Category';
import Footer from '../common/widgets/Footer/Footer';

const Layout: React.FC<LayoutProps> = () => {
  const [showSearchBar, setShowSearchBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowSearchBar(false);
      } else {
        setShowSearchBar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div id="dashboard">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white transition-all duration-300 ease-in-out">
        <Navbar />
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            showSearchBar ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <SearchBar />
        </div>
        <Category />
      </div>

      {/* Padding to prevent overlap */}
      <div className="pt-20 mt-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
