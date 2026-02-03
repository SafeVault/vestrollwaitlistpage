"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/logo.png";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white backdrop-blur-md border-b border-[#E5EFFF] shadow-[0px_4px_8px_0px_#0000000A]">
      <div className="max-w-312 mx-auto py-3 md:py-6 flex items-center justify-between px-6">
        <Link href="/" className="">
          <Image
            src={Logo.src}
            alt="Vestroll Logo"
            width={Logo.width}
            blurDataURL={Logo.blurDataURL}
            height={Logo.width}
            className="h-5 w-auto md:h-8"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 mx-auto">
          <Link
            href="#features"
            className="text-base leading-5.5 font-medium text-[#374151] hover:text-[#374151]/90 duration-300 ease-in-out transition-colors"
          >
            Home
          </Link>
          <Link
            href="#pricing"
            className="text-base leading-5.5 font-medium text-[#374151] hover:text-[#374151]/90 duration-300 ease-in-out transition-colors"
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
