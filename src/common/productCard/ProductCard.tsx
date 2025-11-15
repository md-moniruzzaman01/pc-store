import { Star, Heart, Eye, RefreshCw } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }: { product: any }) => {
  const [isMobileActive] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      className="p-10 border-2 rounded-lg transition-all duration-300 group relative cursor-pointer"
      onClick={handleNavigation}
    >
      {/* Product Image with Hover Effect */}
      <div className="relative overflow-hidden rounded-lg mb-3">
        <img
          src={product.image}
          alt={product.name}
          className={`w-[500px] h-full object-cover transition-all duration-300 ${
            isMobileActive ? 'opacity-0' : 'group-hover:opacity-0'
          }`}
        />
        <img
          src={product.hoverImage}
          alt={product.name}
          className={`w-[500px] h-full object-cover absolute left-0 top-0 transition-opacity duration-300 ${
            isMobileActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
        />
      </div>

      <hr />
      {/* Icons (Visible on Hover & Mobile Click) */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 bottom-64 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          isMobileActive ? 'opacity-100' : ''
        }`}
      >
        <button className="p-2 bg-white rounded-full shadow-md hover:bg-primary transition-colors">
          <Heart className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 bg-white rounded-full shadow-md hover:bg-primary transition-colors">
          <Eye className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 bg-white rounded-full shadow-md hover:bg-primary transition-colors">
          <RefreshCw className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Product Details */}
      <div className="mt-6">
        <p className="text-gray-600 text-sm font-medium">{product.category}</p>
        <h3 className="text-xl font-semibold text-gray-800 mt-1">
          {product.name}
        </h3>
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < product.rating ? 'text-primary' : 'text-gray-300'
              }`}
              fill={i < product.rating ? 'currentColor' : 'none'}
            />
          ))}
        </div>
        <div className="flex items-center space-x-3 mt-3">
          <span className="text-xl font-bold text-gray-900">
            ৳{product.price}
          </span>
          {product.oldPrice && (
            <span className="text-gray-500 line-through text-sm">
              ৳{product.oldPrice}
            </span>
          )}
        </div>
        <button className="bg-secondary text-primary hover:text-secondary hover:bg-primary w-full p-2 mt-3 rounded-lg">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
