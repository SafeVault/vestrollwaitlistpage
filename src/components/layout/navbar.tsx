import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/logo.jpg";
import LogoText from "../../assets/VestRoll.jpg";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white backdrop-blur-md border-b shadow-xl">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl tracking-tight flex items-center gap-2">
          <Image src={Logo} alt="Vestroll Logo" width={32} height={32} />
         <Image src={LogoText} alt="Vestroll Logo" width={80} height={80} />
        </Link>
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
      </div>
    </nav>
  );
};
