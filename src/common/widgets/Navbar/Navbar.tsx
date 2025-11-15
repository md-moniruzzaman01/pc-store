import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { navbarData } from "./config/constants";
import MobileCategory from "./partials/Category/partials/MobileCategory";
import { MdCategory } from "react-icons/md";

// const authKey = 'authKey';

const getFromLocalStorage = (key: string) => localStorage.getItem(key);
const setToLocalStorage = (key: string, value: string) =>
  localStorage.setItem(key, value);

/**
 * Toggle between light and dark modes.
 * @param {Object} params
 * @param {boolean} params.isDarkMode
 * @param {Function} params.setIsDarkMode
 */
const toggleDarkMode = ({
  isDarkMode,
  setIsDarkMode,
}: {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const root = document.getElementById("dashboard");
  if (root) {
    if (isDarkMode) {
      // Switch to light mode:
      root.classList.remove("dark");
      root.classList.add("light");
      setToLocalStorage("theme", "light");
      setIsDarkMode(false);
    } else {
      // Switch to dark mode:
      root.classList.remove("light");
      root.classList.add("dark");
      setToLocalStorage("theme", "dark");
      setIsDarkMode(true);
    }
  }
};

const Navbar = () => {
  // const token = getFromLocalStorage(authKey);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false); // State for category modal

  useEffect(() => {
    const root = document.getElementById("dashboard");
    const storedTheme = getFromLocalStorage("theme");

    if (root) {
      if (storedTheme === "dark") {
        setIsDarkMode(true);
        root.classList.add("dark");
      } else if (storedTheme === "light") {
        setIsDarkMode(false);
        root.classList.remove("dark");
        root.classList.add("light");
      } else if (!storedTheme) {
        setToLocalStorage("theme", "light");
      }
    }
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleCategoryToggle = () => {
    setIsCategoryOpen((prev) => !prev);
  };

  return (
    <nav className="relative bg-white dark:bg-secondary px-6 py-5 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="md:text-5xl text-xl text-primary font-wrongDelivery flex items-center">
          {/* Emoji to the left of the logo for mobile */}
          <span
            className="md:hidden text-3xl cursor-pointer mr-20 "
            onClick={handleCategoryToggle}
          >
            <MdCategory />
          </span>
          <p>PC Store</p>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 text-lg text-primary">
          {navbarData.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="relative inline-block group dark:hover:text-white"
            >
              {item.title}
              {/* Underline effect */}
              <span className="absolute left-0 bottom-0 block h-[2px] dark:bg-primary bg-secondary w-0 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Support Section and Dark Mode Toggle for Desktop */}
        <div className="hidden md:flex items-center space-x-4 text-primary">
          <div
            onClick={() => toggleDarkMode({ isDarkMode, setIsDarkMode })}
            className="flex items-center justify-center gap-2 p-2 rounded-full transition-transform hover:scale-105 focus:ring-4 bg-white border border-secondary dark:bg-white/20 dark:border dark:border-primary cursor-pointer"
          >
            {isDarkMode ? (
              <Sun className="text-yellow-300 w-6 h-6 animate-pulse" />
            ) : (
              <Moon className="text-blue-700 w-6 h-6 animate-pulse" />
            )}
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold">Support +9821325525</p>
            <p className="text-sm text-gray-500">
              Email: support@appssdk.store
            </p>
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={handleMobileMenuToggle}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 px-4 pb-4 border-t border-gray-200 dark:border-gray-700 min-h-screen">
          <div className="flex flex-col space-y-4 text-primary text-center">
            {navbarData.map((item, index) => (
              <a
                key={index}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-lg font-medium hover:text-secondary dark:hover:text-white "
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      )}

      <MobileCategory isOpen={isCategoryOpen} setIsOpen={setIsCategoryOpen} />
    </nav>
  );
};

export default Navbar;
