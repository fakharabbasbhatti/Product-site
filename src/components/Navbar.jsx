import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaCode,
  FaWordpress,
  FaShoppingCart,
  FaShieldAlt,
  FaRocket,
  FaSearch,
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  // SAME ORIGINAL DATA
  const services = [
    { name: "Custom Website Development", icon: <FaCode /> },
    { name: "WordPress Website Development", icon: <FaWordpress /> },
    { name: "E-commerce & Dropshipping", icon: <FaShoppingCart /> },
    { name: "Maintenance & Security", icon: <FaShieldAlt /> },
    { name: "Performance & Speed Optimization", icon: <FaRocket /> },
    { name: "Technical & On-Page SEO", icon: <FaSearch /> },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-lg bg-white/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          NexaTech
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 font-medium text-gray-700">

          {/* Services Dropdown */}
          <li
            className="relative group cursor-pointer"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <div className="flex items-center gap-1 hover:text-blue-600 transition">
              Services <FaChevronDown size={12} />
            </div>

            <div
              className={`absolute top-10 left-0 w-80 bg-white shadow-xl rounded-xl p-4 transition-all duration-300 ${
                dropdown
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-3"
              }`}
            >
              {services.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 cursor-pointer transition"
                >
                  <span className="text-blue-600 text-lg">
                    {item.icon}
                  </span>
                  <span className="text-sm">{item.name}</span>
                </div>
              ))}
            </div>
          </li>

          {["Courses", "Portfolio", "Pricing", "Blog", "Contact Us"].map(
            (item, i) => (
              <li
                key={i}
                className="relative cursor-pointer hover:text-blue-600 transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all hover:after:w-full"
              >
                {item}
              </li>
            )
          )}
        </ul>

        {/* Button */}
        <button className="hidden md:block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 transition">
          Let's Talk →
        </button>

        {/* Mobile Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer text-blue-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white px-6 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[600px] py-4" : "max-h-0"
        }`}
      >
        <div className="space-y-4 text-gray-700">

          {/* Services */}
          <div>
            <div
              onClick={() => setDropdown(!dropdown)}
              className="flex justify-between items-center cursor-pointer"
            >
              Services <FaChevronDown />
            </div>

            <div
              className={`pl-4 mt-2 space-y-2 text-sm ${
                dropdown ? "block" : "hidden"
              }`}
            >
              {services.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-blue-600">{item.icon}</span>
                  {item.name}
                </div>
              ))}
            </div>
          </div>

          <p>Courses</p>
          <p>Portfolio</p>
          <p>Pricing</p>
          <p>Blog</p>
          <p>Contact Us</p>

          <button className="w-full bg-blue-600 text-white py-2 rounded-full mt-2">
            Let's Talk →
          </button>
        </div>
      </div>
    </nav>
  );
}