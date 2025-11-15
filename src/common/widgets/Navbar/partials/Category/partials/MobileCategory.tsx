import { X } from 'lucide-react';
import { useState } from 'react';
import { categoryData } from '../config/constants';

const MobileCategory = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleDropdownToggle = (id: number) => {
    if (openDropdown === id) {
      setOpenDropdown(null); // Close the dropdown if it's already open
    } else {
      setOpenDropdown(id); // Open the clicked dropdown
    }
  };

  return (
    <div>
      {/* Side Modal */}
      <div
        className={`fixed inset-0 transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div
        className={`fixed top-20 left-0 h-full w-64 bg-white shadow-lg transform transition-transform ${
          isOpen ? 'translate-x-0 z-50' : '-translate-x-full'
        }`}
      >
        {/* Header with Close Button */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Categories</h2>
          <button onClick={() => setIsOpen(false)} className="text-gray-600">
            <X size={24} />
          </button>
        </div>

        {/* Category List with Scroll */}
        <ul className="p-4 space-y-2 overflow-y-auto max-h-[calc(100vh-96px)]">
          {categoryData.map(category => (
            <li key={category.id}>
              <div className="p-2 border-b cursor-pointer">
                <div
                  className="flex justify-between items-center"
                  onClick={() => handleDropdownToggle(category.id)}
                >
                  <span>{category.title}</span>
                  <span className="text-gray-600 text-3xl">
                    {openDropdown === category.id ? '-' : '+'}
                  </span>
                </div>
                {/* Dropdown Menu */}
                {openDropdown === category.id && (
                  <ul className="pl-4 mt-2 space-y-1 ">
                    {category.dropdown.map((item, index) => (
                      <li key={index}>
                        <a
                          href={item.link}
                          className="text-secondary hover:text-primary"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileCategory;
