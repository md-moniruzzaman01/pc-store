import Marquee from 'react-fast-marquee';
import { brand } from './config/constants';

const Brand = () => {
  return (
    <div className="py-12 mt-5 px-5 bg-gray-100">
      <div className="text-center mb-10">
        <h6 className="text-3xl font-bold ">Popular Brands</h6>
        <p className=" text-gray-500 mt-2">
          Trusted by the best in the industry
        </p>
      </div>

      {/* Marquee Effect */}
      <Marquee
        gradient={true}
        gradientWidth={100}
        speed={40}
        pauseOnHover={true}
        className="overflow-hidden gap-10"
      >
        <div className="flex space-x-10">
          {brand.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 shadow-lg px-8 py-3 rounded-lg flex justify-center items-center transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-28 h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Brand;
