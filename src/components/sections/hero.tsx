"use client";
import React, { useState, useEffect } from "react";
import ArrowRight from "../../assets/arrow-right.png";
import Image from "next/image";
import dash from "../../assets/dash.svg";
import HeroImage2 from "../../assets/wallet.png";
import HeroImage3 from "../../assets/employee.png";
import { motion, AnimatePresence } from "framer-motion";

export const Hero = () => {
  const [index, setIndex] = useState(0);
  const words = ["pay", "manage", "scale", "onboard"];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-32 pb-0 md:pt-48 px-4 bg-linear-to-b from-purple-50/30 to-purple-200/80 rounded-b-[3rem] overflow-hidden">
      <div className="container mx-auto text-left md:text-center max-w-6xl">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl font-regular tracking-tight mb-6 text-black/90"
        >
          <div className="flex flex-wrap md:justify-center gap-x-2 md:gap-x-1.5 items-center">
            <span>Simplify how you</span>
            <span className="relative inline-flex items-center h-[1.2em]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="text-[#5E2A8C] italic font-serif"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>
          <span className="block md:mt-2">your global team</span>
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-md text-muted-foreground mb-10 md:max-w-5xl md:mx-auto text-black/70 font-medium"
        >
          The intelligent platform for global teams. Automate your payroll,
          simplify complex contracts, and scale your operations with efficiency
          and precision.
        </motion.p>
        <motion.button
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px -5px rgba(94, 42, 140, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#5E2A8C] text-white px-4 py-2 rounded-xl w-fit md:mx-auto flex items-center gap-2 shadow-lg transition-all duration-300"
        >
          <p> Get started</p>
          <Image src={ArrowRight} alt="Arrow Right" width={20} height={20} />
        </motion.button>
      </div>

      <div className="relative mt-16 md:mt-24 max-w-7xl mx-auto px-0">
        <div className="relative flex items-end justify-center">
          {/* Main hero image - centered */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full mx-auto flex justify-center"
          >
            <Image
              src={dash}
              alt="Hero Image"
              className="rounded-t-lg w-full h-auto max-w-[1200px]"
            />
          </motion.div>

          {/* Bottom-left image - overlapping main image */}
          <motion.div
            initial={{ x: -100, opacity: 0, rotate: -15 }}
            animate={{
              x: 0,
              opacity: 1,
              rotate: 0,
              y: [0, -10, 0],
            }}
            transition={{
              x: { duration: 0.8, delay: 1, ease: "easeOut" },
              opacity: { duration: 0.8, delay: 1 },
              rotate: { duration: 0.8, delay: 1 },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2,
              },
            }}
            className="absolute left-0 md:left-4 lg:left-[-80px] xl:left-[-40px] bottom-0 md:bottom-4 lg:bottom-[-40px] xl:bottom-[50px] z-20 hidden md:block group"
          >
            <Image
              src={HeroImage2}
              alt="Wallet Image"
              width={300}
              height={300}
              className="w-[150px] md:w-[200px] lg:w-[250px] h-auto drop-shadow-2xl group-hover:scale-110 group-hover:-translate-y-4 transition-transform duration-500 ease-out"
            />
          </motion.div>

          {/* Top-right image - overlapping main image */}
          <motion.div
            initial={{ x: 100, opacity: 0, rotate: 15 }}
            animate={{
              x: 0,
              opacity: 1,
              rotate: 0,
              y: [0, 10, 0],
            }}
            transition={{
              x: { duration: 0.8, delay: 1.2, ease: "easeOut" },
              opacity: { duration: 0.8, delay: 1.2 },
              rotate: { duration: 0.8, delay: 1.2 },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.4,
              },
            }}
            className="absolute right-0 md:right-4 lg:right-[-80px] xl:right-[-40px] top-0 md:top-4 lg:top-[-40px] xl:top-[150px] z-20 hidden md:block group"
          >
            <Image
              src={HeroImage3}
              alt="Employee Image"
              width={300}
              height={300}
              className="w-[150px] md:w-[200px] lg:w-[250px] h-auto drop-shadow-2xl group-hover:scale-110 group-hover:-translate-y-4 transition-transform duration-500 ease-out"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
