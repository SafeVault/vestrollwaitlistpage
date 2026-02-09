"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Logo from "../../assets/logo.png";

export const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Create an employer or employee account",
      description: "Get started in seconds with a quick, secure signup.",
    },
    {
      number: "2",
      title: "Set up your fiat wallet",
      description:
        "Connect your preferred wallet and enable instant global payments.",
    },
    {
      number: "3",
      title: "Add employees and create contracts",
      description:
        "Build your team, define roles, and set clear agreements effortlessly.",
    },
    {
      number: "4",
      title: "Track time and milestones",
      description:
        "Monitor work progress with accurate timesheets and milestone tracking.",
    },
    {
      number: "5",
      title: "Pay or request payment instantly",
      description:
        "Send or receive funds with one click in traditional currency.",
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4">
      <div className="container mx-auto bg-linear-to-b from-[#FFFFFF] to-[#F3E5FF] px-4 py-6 w-full rounded-2xl border-2 border-[#EDD9FF] md:px-8 md:py-10 lg:py-15.5">
        {/* Header */}
        <div className="space-y-3">
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <Image
              src={Logo}
              width={50}
              height={50}
              alt="VestRoll logo"
              className="h-5 md:h-8 w-auto"
            />
          </motion.div>
          <h2 className="text-2xl md:text-4xl lg:text-[2.5rem] font-medium  text-[#1F2937] leading-[120%] tracking-[0px] ">
            How it works
          </h2>
          <p className="text-base text-[#6B7280] leading-[130%]">
            A fast, intuitive workflow that helps you set up your team, track
            work, and manage payments effortlessly.
          </p>
        </div>

        {/* Steps Container with Purple Background */}
        <div className="rounded-3xl mt-8">
          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 md:gap-6 mb-8 ">
            {steps.map((step, index) => (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.3,
                  delay: 0.2 * index,
                }}
                viewport={{ once: true, amount: 0.4 }}
                key={step.number}
                className="flex  items-start relative gap-2 md:flex-col flex-row"
              >
                {/* Number Circle with dotted line */}
                <div className=" flex w-fit md:w-full items-center ">
                  {/* Circular Badge */}
                  <div className="w-8 h-8 rounded-full bg-white border-2 border-[#F3E6FF] flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-purple-600">
                      {step.number}
                    </span>
                  </div>

                  {/* Dotted Line - only show if not last item */}
                  {index < steps.length - 1 && (
                    <div className="hidden xl:block flex-1 h-0 border-t-2 border-dotted border-[#CC93F9] ml-5  w-full"></div>
                  )}
                </div>

                <div>
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-black mb-1.5  leading-snug">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-start md:justify-end">
            <motion.button
              initial={{ x: 20, opacity: 0, scale: 0.9 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              transition={{
                ease: "anticipate",
                duration: 0.3,
                delay: 0.4,
              }}
              viewport={{ once: true, amount: 0.4 }}
              className="bg-[#5E2A8C] hover:bg-purple-800 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors duration-200 font-medium"
            >
              Create Account
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};
