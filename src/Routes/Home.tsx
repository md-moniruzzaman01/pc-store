import AboutUs from "../modules/About Us/AboutUs";
import ContactUs from "../modules/Contact Us/ContactUs";
import Home from "../modules/Home/Home";

export const homeRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
];
