import { motion } from 'framer-motion';

const Card = ({
  title,
  button,
  btnLink,
  image,
}: {
  title: string;
  button: string;
  btnLink: string;
  image: string;
}) => {
  return (
    <motion.div
      className="relative w-full rounded-2xl overflow-hidden h-full flex items-center justify-start p-6"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

      {/* Text Content */}
      <div className="relative z-10 text-white max-w-md">
        <span className="text-green-400 text-lg font-semibold">
          NEW ARRIVALS
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold mt-1">{title}</h2>
        <a
          href={btnLink}
          className="mt-4 inline-flex items-center gap-2 text-white text-lg font-medium transition hover:underline"
        >
          {button} →
        </a>
      </div>
    </motion.div>
  );
};

export default Card;
