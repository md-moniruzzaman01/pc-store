const AboutUs: React.FC = () => {
  return (
    <div className=" min-h-screen flex items-center">
      <div className=" transition-opacity duration-700 ease-in-out p-8 max-w-4xl mx-auto mt-20 ">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700 leading-relaxed">
          Welcome to our company! We are dedicated to providing top-notch
          solutions that help businesses grow and succeed in the digital world.
          Our team of experts works tirelessly to ensure that every client
          receives personalized support and innovative strategies to achieve
          their goals.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Our mission is to empower businesses by creating seamless digital
          experiences, developing robust web applications, and providing
          guidance that drives results. We believe in collaboration,
          transparency, and continuous improvement to deliver exceptional
          outcomes for our clients.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
