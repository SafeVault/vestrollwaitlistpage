import React from "react";
// import { Button } from "../common/button";
import ArrowRight from "../../assets/arrow-right.png";
import Image from "next/image";
import HeroImage from "../../assets/dash.png";
import HeroImage2 from "../../assets/wallet.png";
import HeroImage3 from "../../assets/employee.png";

export const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-32 px-4 bg-linear-to-b from-purple-50/30 to-purple-200/80 rounded-b-[3rem] overflow-hidden">
      <div className="container mx-auto text-center max-w-6xl">
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 text-black/90">
          Pay & Manage Your Team Seamlessly In Crypto or Fiat
        </h1>
        <p className="text-lg md:text-md text-muted-foreground mb-10 max-w-5xl mx-auto text-black/70 font-medium">
          A modern payroll platform that lets you pay teams in  fiat, track time, manage contracts, and automate payroll all in one secure, cross-platform system.
        </p>
        <div className="bg-[#5E2A8C] text-white px-4 py-2 rounded-xl w-fit mx-auto flex items-center gap-2">
          <p> Join The Waitlist</p>
          <Image src={ArrowRight} alt="Arrow Right" width={20} height={20} />
        </div>
      </div>

      <div className="relative mt-16 md:mt-24 max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative flex items-center justify-center min-h-[400px] md:min-h-[500px]">
          {/* Main hero image - centered */}
          <div className="relative z-10 w-full max-w-6xl mx-auto">
            <Image 
              src={HeroImage} 
              alt="Hero Image" 
              width={1000} 
              height={1000} 
              className="w-full h-auto rounded-lg" 
            />
          </div>
          
          {/* Bottom-left image - overlapping main image */}
          <div className="absolute left-0 md:left-4 lg:left-[-80px] xl:left-[-100px] bottom-0 md:bottom-4 lg:bottom-[-40px] xl:bottom-[50px] z-20 hidden md:block">
            <Image 
              src={HeroImage2} 
              alt="Wallet Image" 
              width={300} 
              height={300} 
              className="w-[150px] md:w-[200px] lg:w-[250px] h-auto drop-shadow-lg" 
            />
          </div>
          
          {/* Top-right image - overlapping main image */}
          <div className="absolute right-0 md:right-4 lg:right-[-80px] xl:right-[-100px] top-0 md:top-4 lg:top-[-40px] xl:top-[50px] z-20 hidden md:block">
            <Image 
              src={HeroImage3} 
              alt="Employee Image" 
              width={300} 
              height={300} 
              className="w-[150px] md:w-[200px] lg:w-[250px] h-auto drop-shadow-lg" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};
