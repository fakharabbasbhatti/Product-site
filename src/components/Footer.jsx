import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1C0770] text-white relative overflow-hidden">

      {/* ===== Top Curve ===== */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1000 100"
          className="w-full h-20 fill-[#1C0770]"
          preserveAspectRatio="none"
        >
          <path d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z" />
        </svg>
      </div>

      {/* ===== CTA Section ===== */}
      <div className="bg-[#4A65FF] py-20 text-center px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Have a Project To Discuss?
        </h2>

        <p className="text-white/80 mt-3 text-lg">
          We’re ready to proceed with your idea!
        </p>

        <a
          href="https://wa.me/923060304319"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-6 bg-[#0DB0FF] hover:bg-white hover:text-[#1C0770] px-8 py-3 rounded-full font-semibold transition-all shadow-lg"
        >
          Let’s Talk!
        </a>
      </div>

      {/* ===== Main Footer ===== */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

        {/* Logo + About */}
        <div>
          <img
            src="https://nexatechofficial.com/wp-content/uploads/2026/03/N.png"
            alt="logo"
            className="w-36 mb-5"
          />

          <p className="text-white/70 text-sm leading-6">
            We build modern digital solutions with creativity and innovation.
            Nexa Tech Official delivers quality web & software services.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-xl">
            <a className="hover:text-[#0DB0FF] transition"><FaLinkedin /></a>
            <a className="hover:text-[#0DB0FF] transition"><FaFacebook /></a>
            <a className="hover:text-[#0DB0FF] transition"><FaInstagram /></a>
            <a className="hover:text-[#4A65FF] transition"><FaYoutube /></a>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-10 text-sm">
          <div className="space-y-3">
            <a className="block hover:text-[#0DB0FF]" href="/services">Services</a>
            <a className="block hover:text-[#0DB0FF]" href="/portfolio">Portfolio</a>
            <a className="block hover:text-[#0DB0FF]" href="/pricing">Pricing</a>
            <a className="block hover:text-[#0DB0FF]" href="/blog">Blog</a>
          </div>

          <div className="space-y-3">
            <a className="block hover:text-[#0DB0FF]" href="/about-us">About Us</a>
            <a className="block hover:text-[#0DB0FF]" href="/privacy-policy">Privacy Policy</a>
            <a className="block hover:text-[#0DB0FF]" href="/terms">Terms</a>
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-5 text-sm">

          <div className="flex items-center gap-3 text-white/80">
            <FaPhoneAlt className="text-[#0DB0FF]" />
            <span>+923060304319</span>
          </div>

          <div className="flex items-center gap-3 text-white/80">
            <FaEnvelope className="text-[#4A65FF]" />
            <span>nexatechofficial50@gmail.com</span>
          </div>

          <div className="flex items-center gap-3 text-white/80">
            <FaMapMarkerAlt className="text-[#0DB0FF]" />
            <span>Bahawalpur, Punjab, Pakistan</span>
          </div>

        </div>
      </div>

      {/* ===== Bottom ===== */}
      <div className="border-t border-white/10 py-5 text-center text-white/60 text-sm">
        Copyright © 2026 – Nexa Tech Official. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;