import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";
import img1 from "../../../assets/payment/visa-logo.jpg";
import img2 from "../../../assets/payment/paypal.webp";
import img3 from "../../../assets/payment/BKash-Logo.png";
import img4 from "../../../assets/payment/images.png";
import bg from "../../../assets/payment/bg.jpg";

const Footer = () => {
  return (
    <footer
      className="bg-gray-900 text-white py-16 px-8 md:px-20 relative overflow-hidden"
      style={{
        // backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700 pb-10 bg-gray-900 bg-opacity-70 p-6 rounded-lg"
      >
        {/* Contact & Locations */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-primary">Contact Us</h3>
          <p className="flex items-center text-gray-400">
            <FaPhoneAlt className="mr-3 text-primary" /> +88 02 41082641
          </p>
          <p className="flex items-center text-gray-400">
            <FaEnvelope className="mr-3 text-primary" /> info@appssdk.store
          </p>
          <h3 className="text-xl font-bold text-primary mt-6">Our Stores</h3>
          <p className="text-gray-400">
            orem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-6">
          {[
            {
              title: "Customer Care",
              links: [
                "FAQs",
                "Terms",
                "Privacy Policy",
                "Contact",
                "Gift Card",
              ],
            },
            {
              title: "Top Brands",
              links: ["HP", "MSI", "ACER", "WALTON", "DELL"],
            },
          ].map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold text-primary mb-4">
                {section.title}
              </h3>
              <ul className="text-gray-400 space-y-2">
                {section.links.map((link, idx) => (
                  <li
                    key={idx}
                    className="hover:text-primary transition duration-300 cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter & Social */}
        <div>
          <h3 className="text-xl font-bold text-primary">Newsletter</h3>
          <p className="text-gray-400 text-sm my-4">
            Subscribe to get updates on sales and exclusive offers.
          </p>
          <div className="flex flex-wrap gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 flex-1 rounded-l-md text-black focus:outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-primary text-white px-5 py-3 rounded-r-md"
            >
              Submit
            </motion.button>
          </div>
          <h3 className="text-xl font-bold text-primary mt-6">Follow Us</h3>
          <div className="flex space-x-4 mt-4">
            {[FaFacebookF, FaTwitter, FaPinterestP, FaInstagram].map(
              (Icon, idx) => (
                <motion.div key={idx} whileHover={{ scale: 1.2 }}>
                  <Icon className="text-gray-400 hover:text-white transition duration-300 cursor-pointer text-xl" />
                </motion.div>
              )
            )}
          </div>
        </div>
      </motion.div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-center text-gray-400 text-sm mt-8"
      >
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-4">
          <p>
            &copy; 2025{" "}
            <a href="/" className="hover:underline text-primary">
              Apps Sdk
            </a>
            . All Rights Reserved.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <img src={img1} alt="Visa" className="w-16 h-auto rounded-lg" />
            <img src={img2} alt="PayPal" className="w-16 h-auto rounded-lg" />
            <img
              src={img3}
              alt="BKash"
              className="w-16 h-auto px-2 bg-white rounded-lg"
            />
            <img src={img4} alt="Other" className="w-16 h-auto rounded-lg" />
          </div>
          <p>
            👨‍💻Developed by{" "}
            <a
              href="https://github.com/md-moniruzzaman01"
              className="hover:underline text-primary"
            >
              Moniruzzaman
            </a>
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
