import { useState } from 'react';
import { categories } from './config/constants';

interface Category {
  name: string;
  img: string;
}

const Category = () => {
  return (
    <section className="mb-12 mt-14 md:mx-28">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-3">Browse Categories</h2>
        <p className="text-gray-600">
          Discover our wide range of tech products
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 mx-4">
        {categories.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
    </section>
  );
};

const CategoryCard = ({ category }: { category: Category }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <img
        src={category.img}
        alt={category.name}
        className={`w-24 h-24 object-contain mb-4 transition-transform duration-300 
          ${isHovered ? 'translate-y-[-10px] scale-105' : ''} 
          group-hover:translate-y-[-10px] group-hover:scale-105`}
      />

      <span className="text-lg font-medium text-gray-700">{category.name}</span>
    </div>
  );
};

export default Category;
