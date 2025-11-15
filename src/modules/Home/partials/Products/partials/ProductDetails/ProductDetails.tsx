import { useParams } from 'react-router-dom';
import { products } from '../../config/constants';
import { FaFacebookMessenger, FaPinterest, FaWhatsapp } from 'react-icons/fa';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id || '', 10));

  if (!product) {
    return (
      <div className="text-center text-red-500 font-bold text-xl mt-10">
        Product not found
      </div>
    );
  }

  return (
    <div className="p-5 md:p-10 max-w-6xl mx-auto md:mt-24 mt-36">
      {/* Breadcrumb Navigation */}
      <div className="text-gray-500 text-sm mb-4">
        <span className="text-blue-600">Desktop / Star PC / Intel PC /</span>
        <span className="text-black font-semibold"> {product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left - Product Image */}
        <div className="flex flex-col items-center">
          <div className="border p-5 rounded-lg w-full">
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-lg object-cover"
            />
          </div>
          {/* Thumbnails */}
          <div className="flex justify-center gap-4 mt-4">
            <img
              src={product.hoverImage}
              alt={product.name}
              className="w-16 rounded-lg border"
            />
            <img
              src={product.image}
              alt={product.name}
              className="w-16 rounded-lg border"
            />
          </div>
        </div>

        {/* Right - Product Info */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-blue-800">
            {product.name}
          </h1>
          <div className="flex items-center gap-4 mt-3">
            <span className="text-2xl font-bold text-red-600">
              ৳{product.price}
            </span>
            <span className="text-gray-500 line-through text-lg">
              ৳{product.oldPrice}
            </span>
            <span
              className={`px-3 py-1 text-sm font-semibold rounded-full ${
                product.status === 'In Stock'
                  ? 'bg-green-100 text-green-600'
                  : 'bg-red-100 text-red-600'
              }`}
            >
              {product.status}
            </span>
          </div>
          <p className="mt-2 text-gray-600 text-sm">
            Product Code:{' '}
            <span className="text-black font-semibold">
              {product.productCode}
            </span>
          </p>
          <div className="mt-4 border-t pt-4">
            <h2 className="text-lg font-semibold text-gray-700">
              Key Features
            </h2>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <a
              href="#"
              className="text-red-500 mt-2 inline-block font-semibold"
            >
              View More Info
            </a>
          </div>
          {/* Payment Options */}
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border p-4 rounded-lg shadow-md cursor-pointer hover:border-blue-500 transition-all border-blue-500">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  defaultChecked
                  className="w-5 h-5 text-blue-500"
                />
                <div>
                  <span className="text-xl font-bold text-black">
                    ৳{product.price}
                  </span>
                  <span className="text-gray-500 line-through ml-2">
                    ৳{product.oldPrice}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-700">Cash Discount Price</p>
            </div>

            <div className="border p-4 rounded-lg shadow-md cursor-pointer hover:border-blue-500 transition-all">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  className="w-5 h-5 text-blue-500"
                />
                <div>
                  <span className="text-xl font-bold text-black">
                    ৳{(parseInt(product.price.toString(), 10) / 12).toFixed(0)}
                    /month
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-700">
                Regular Price: ৳{product.regularPrice}
              </p>
              <p className="text-sm text-gray-500">
                0% EMI for up to 12 months***
              </p>
            </div>
          </div>
          {/* Quantity & Buy Button */}
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <div className="flex items-center border rounded-lg px-4 py-2 bg-white shadow-md">
              <button className="px-3 text-xl font-bold text-gray-600">
                -
              </button>
              <input
                type="text"
                className="w-10 text-center border-none outline-none bg-transparent font-bold"
                value="1"
                readOnly
              />
              <button className="px-3 text-xl font-bold text-gray-600">
                +
              </button>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition-all">
              Buy Now
            </button>
          </div>
          {/* Share Icons */}
          <div className="flex items-center mt-5 gap-3">
            <span className="text-gray-600 font-semibold">Share:</span>
            <FaFacebookMessenger className="text-blue-600 text-xl cursor-pointer" />
            <FaPinterest className="text-red-600 text-xl cursor-pointer" />
            <FaWhatsapp className="text-green-600 text-xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
