import { FaSearch } from "react-icons/fa";
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShopping,
} from "react-icons/ai";

const SearchBar = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 border-b  shadow-md px-4 md:px-16">
      <h1 className="text-2xl">{getGreeting()}, Jhon</h1>

      {/* Search Bar */}
      <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 w-full md:w-1/2">
        <input
          type="text"
          placeholder="Search Products..."
          className="w-full outline-none text-gray-600 placeholder-gray-400"
        />
        <FaSearch className="text-gray-500" />
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-6 text-gray-600 relative mt-4 md:mt-0">
        {/* Account */}
        <div className="flex items-center space-x-1 cursor-pointer">
          <AiOutlineUser size={20} />
          <span className="text-sm">
            Account <span className="text-gray-400">LOGIN</span>
          </span>
        </div>

        {/* Wishlist */}
        <div className="flex items-center space-x-1 cursor-pointer">
          <AiOutlineHeart size={20} />
          <span className="text-sm">
            Wishlist <strong>3-ITEMS</strong>
          </span>
        </div>

        {/* Cart with Badge */}
        <div className="relative cursor-pointer">
          <AiOutlineShopping size={22} />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1 rounded-full">
            3
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
