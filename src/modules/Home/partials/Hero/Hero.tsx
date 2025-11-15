import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { data } from './config/constants';
import Card from './partials/Card/Card';
import { cardData } from './partials/Card/config/constants';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % data.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3  w-full max-w-full mx-auto gap-3 mt-36">
      {/* Main Section */}
      <div className="relative col-span-2 overflow-hidden h-[700px] sm:h-[450px] md:min-h-[69vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0 flex flex-col-reverse md:flex-row items-center justify-between px-4 my-6 md:my-0 md:px-8"
          >
            {/* Text Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <motion.h2
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 flex flex-wrap justify-center md:justify-start"
                initial="hidden"
                animate="visible"
              >
                {data[currentIndex].title.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={titleVariants}
                    className={char === ' ' ? 'inline-block w-2' : ''}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.h2>
              <p className="text-gray-600 mt-2 text-lg sm:text-xl">
                {data[currentIndex].subtitle}
              </p>
              <span className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#36ee00] mt-4 block">
                ৳ {data[currentIndex].price}
              </span>
              <button className="mt-6 px-12 sm:px-16 py-3 sm:py-2 hover:bg-primary hover:text-secondary text-lg sm:text-xl border-2 border-pr rounded-full bg-secondary text-primary transition">
                Explore Now
              </button>
            </div>
            {/* Image */}
            <img
              src={data[currentIndex].image}
              alt={data[currentIndex].title}
              className="w-full md:w-1/2 max-h-[380px] sm:max-h-[450px] md:max-h-[500px] object-contain rounded-xl mt-6 md:mt-0"
            />
          </motion.div>
        </AnimatePresence>

        {/* Custom Dots */}
        <div className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition ${
                currentIndex === index ? 'bg-primary' : 'bg-secondary'
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Right Side Sections */}
      <div className="grid grid-cols-1 gap-4 mx-4 h-full ">
        {cardData.map(item => (
          <div className="rounded-lg flex items-center justify-center h-full">
            <Card
              key={item.id}
              title={item.title}
              button={item.button}
              btnLink={item.btnLink}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
