import React from "react";
import {
  FaLaptop,
  FaAndroid,
  FaMagic,
  FaDatabase,
  FaUpload,
  FaCamera,
  FaClock,
  FaGift,
  FaUsers,
  FaAward,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="font-sans text-gray-900">

      {/* HEADER */}
      <header className="flex items-center justify-between px-6 py-4 shadow-md">
        <img src="/images/image.png" alt="logo" className="h-10" />
        <nav className="hidden md:flex gap-6 font-medium">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#service">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#team">Team</a>
          <a href="/careers">Career</a>
          <a href="#contact">Contact</a>
          <a href="#faq">FAQ</a>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="h-[70vh] flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-600 to-cyan-400 text-white">
        <h1 className="text-4xl font-bold">Bring your Business Online</h1>
        <h2 className="text-xl mt-2">with IT Company Services</h2>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          We make creativity work for your brand. Our team builds powerful digital solutions.
        </p>
      </section>

      {/* SERVICES */}
      <section id="service" className="py-16 bg-gray-100 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <ServiceCard icon={<FaLaptop />} title="Web App Development" />
          <ServiceCard icon={<FaAndroid />} title="Mobile App Development" />
          <ServiceCard icon={<FaMagic />} title="Digital Marketing" />

        </div>
      </section>

      {/* COUNTERS */}
      <section className="py-16 grid md:grid-cols-4 text-center gap-6 px-6">
        <Counter icon={<FaClock />} number="13500" label="Working Hours" />
        <Counter icon={<FaGift />} number="720" label="Projects" />
        <Counter icon={<FaUsers />} number="480" label="Happy Clients" />
        <Counter icon={<FaAward />} number="120" label="Awards" />
      </section>

    </div>
  );
};

/* SERVICE CARD */
const ServiceCard = ({ icon, title }) => (
  <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
    <div className="text-3xl text-blue-600 mb-3">{icon}</div>
    <h3 className="font-semibold text-lg">{title}</h3>
    <p className="text-gray-500 text-sm mt-2">
      High quality digital solutions for your business.
    </p>
  </div>
);

/* COUNTER */
const Counter = ({ icon, number, label }) => (
  <div className="bg-white p-6 rounded-xl shadow">
    <div className="text-3xl text-blue-600 flex justify-center mb-2">{icon}</div>
    <h3 className="text-2xl font-bold">{number}</h3>
    <p className="text-gray-500">{label}</p>
  </div>
);

export default Home;