import { useState, useEffect } from 'react';

import { categoryData } from './config/constants';

const Category = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [delayedIndex, setDelayedIndex] = useState<number | null>(null);

  useEffect(() => {
    let timeout: number | undefined;
    if (hoveredIndex !== null) {
      setDelayedIndex(hoveredIndex);
    } else {
      timeout = setTimeout(() => setDelayedIndex(null), 200);
    }
    return () => clearTimeout(timeout);
  }, [hoveredIndex]);

  return (
    <div className="md:flex flex-wrap justify-center gap-4 p-4 bg-white shadow-md hidden">
      {categoryData.map((category, index) => (
        <div
          key={category.id}
          className="relative"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <span className="text-base font-semibold text-secondary hover:text-primary cursor-pointer">
            {category.title}
          </span>
          {delayedIndex === index && (
            <div
              className="absolute left-0 top-full mt-4 w-48 bg-white shadow-lg border-t-4 border-primary rounded-md z-10 transition-opacity duration-300 opacity-100 " // Hide on small screens
              onMouseEnter={() => setHoveredIndex(index)} // Keep dropdown open when hovered
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {category.dropdown.map(item => (
                <a
                  key={item.link}
                  href={item.link}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary transition-colors duration-200"
                >
                  {item.title}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Category;
