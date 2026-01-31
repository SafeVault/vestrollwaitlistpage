"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/logo.jpg";
import LogoText from "../../assets/VestRoll.jpg";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white backdrop-blur-md border-b shadow-[0px_4px_8px_0px_#0000000A]">
      <div className="container mx-auto py-6 flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-2xl tracking-tight flex items-center gap-2"
        >
          <Image src={Logo} alt="Vestroll Logo" width={32} height={32} />
          <Image src={LogoText} alt="Vestroll Logo" width={80} height={80} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 mx-auto">
          <Link
            href="#features"
            className="text-md font-medium text-black/70 hover:text-black/100 transition-colors"
          >
            Home
          </Link>
          <Link
            href="#pricing"
            className="text-md font-medium text-black/70 hover:text-black/100 transition-colors"
          >
            FAQs
          </Link>
        </div>

        {/* Desktop Action Button / Placeholder to balance the flex justify */}
        <div className="hidden md:block w-8"></div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-white border-b shadow-xl p-4 flex flex-col gap-4">
          <Link
            href="#features"
            className="text-lg font-medium text-gray-800 py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#pricing"
            className="text-lg font-medium text-gray-800 py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQs
          </Link>
          {/* Optional Mobile Call to Action if needed */}
          {/* <button className="bg-[#5E2A8C] text-white px-6 py-3 rounded-xl font-medium mt-2">
            Get Started
           </button> */}
        </div>
      )}
    </nav>
  );
};
