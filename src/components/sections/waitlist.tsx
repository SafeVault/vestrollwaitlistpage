"use client";

import React, { useState } from "react";
import Image from "next/image";
import MailIcon from "../../assets/mail.svg";
import waitlistImage from "../../assets/waitlist.svg";
import WalletImage from "../../assets/wallet.png";
import EmployeeImage from "../../assets/employee.png";
import MacBook from "@/assets/MacBook Pro.png";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
export const Waitlist = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle waitlist signup
    console.log("Email submitted:", email);
  };

  return (
    <section className="pt-16 md:pt-24 pb-0 md:px-4 bg-white bg-linear-to-b from-purple-50/30 to-purple-200/80 overflow-hidden">
      <div className="container mx-auto max-w-7xl h-full flex flex-col">
        {/* Header with Email Input */}
        <div className="text-left md:text-center mb-8 md:mb-16 px-4">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ ease: "easeInOut", duration: 0.3, delay: 0.2 }}
            className="hidden md:block text-5xl  mb-8 text-black font-regular"
          >
            Join the wait list
          </motion.h2>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.3, delay: 0.4 }}
            viewport={{ once: true, amount: 0.4 }}
            className="text-2xl mb-6 text-black leading-[120%] font-medium md:hidden"
          >
            Manage employees and scale your business
          </motion.h2>
          <motion.button
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.3, delay: 0.6 }}
            viewport={{ once: true, amount: 0.4 }}
            className="bg-[#5E2A8C] hover:bg-[#4a2170] text-white pl-7 pr-6 h-11 rounded-xl font-medium transition-colors duration-200  flex gap-2 items-center justify-center md:hidden"
          >
            Get Started <ArrowRight className="size-4" />
          </motion.button>
          {/* Email Form */}
          <form
            onSubmit={handleSubmit}
            className="md:max-w-4xl md:mx-auto hidden md:block"
          >
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center md:justify-center">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.3, delay: 0.6 }}
                viewport={{ once: true, amount: 0.4 }}
                className="relative flex-1 w-full sm:max-w-2xl"
              >
                <div className="absolute left-6 top-1/2 -translate-y-1/2">
                  <Image src={MailIcon} alt="Mail" width={24} height={24} />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter you email address to get notification"
                  className="w-full pl-16 pr-4 h-11 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-white shadow-sm"
                  required
                />
              </motion.div>
              <motion.button
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.3, delay: 0.8 }}
                viewport={{ once: true, amount: 0.4 }}
                type="submit"
                className="bg-[#5E2A8C] hover:bg-[#4a2170] text-white px-16 h-11 rounded-xl font-medium transition-colors duration-200 "
              >
                Join
              </motion.button>
            </div>
          </form>
        </div>

        {/* Dashboard Preview with Overlapping Images */}
        <div className="relative md:mt-12 xl:mt-19 max-w-6xl mx-auto px-4 flex-1 md:flex items-end hidden">
          <div className="relative flex items-end justify-center w-full max-w-[90%] mx-auto">
            {/* Main dashboard preview */}
            <motion.div
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                ease: "easeInOut",
                duration: 0.5,
              }}
              className="relative z-10 w-full overflow-hidden rounded-t-[2.5rem] shadow-2xl border-t border-x border-purple-100 translate-y-4"
            >
              <Image
                src={waitlistImage}
                alt="Dashboard Preview"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </motion.div>

            {/* Floating Wallet Image - Left Bottom */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.3, delay: 0.8 }}
              viewport={{ once: true, amount: 0.4 }}
              className="absolute -left-5 md:-left-10 lg:-left-20 bottom-[10%] z-20 w-45 md:w-70 lg:w-62.5 transform hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={WalletImage}
                alt="Wallet Card"
                width={400}
                height={400}
                className="w-full h-auto drop-shadow-2xl md:max-w-45"
              />
            </motion.div>

            {/* Floating Employee Image - Right Middle */}
            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.8 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ ease: "easeInOut", duration: 0.4, delay: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              className="absolute -right-5 md:right-[-25%] lg:-right-40 top-[10%] md:top-[15%] z-20 w-50 md:w-75 lg:w-62.5 transform hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={EmployeeImage}
                alt="Employees Card"
                width={400}
                height={400}
                className="w-full h-auto drop-shadow-2xl md:max-w-45"
              />
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.3, delay: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="pl-5 md:hidden"
        >
          <Image
            src={MacBook.src}
            alt="mac book pro illustrating the dashboard"
            width={MacBook.width}
            height={MacBook.height}
            blurDataURL={MacBook.blurDataURL}
            className=" "
          />
        </motion.div>
      </div>
    </section>
  );
};
