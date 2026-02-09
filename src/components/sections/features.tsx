"use client";
import React from "react";
import Image from "next/image";
import Feature1 from "../../assets/feature1.png";
import Feature2 from "../../assets/feature2.png";
import Feature3 from "../../assets/feature3.png";
import Feature4 from "../../assets/feature4.png";
import Feature5 from "../../assets/feature5.png";
import { CircleCheckIcon } from "@/assets/svg";
import { motion, Variants } from "framer-motion";

export const Features = () => {
  // Animation variants for the cards
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 md:py-28 px-4 bg-white">
      <div className="container mx-auto max-w-310 space-y-8">
        {/* Header Section */}
        <div className="text-left md:text-center max-w-230 mx-auto space-y-1">
          <motion.h2
            initial={{
              y: 20,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              ease: "anticipate",
            }}
            viewport={{ once: true, amount: 0.6 }}
            className="text-2xl md:text-4xl lg:text-[2.875rem] leading-[120%] text-black font-medium"
          >
            A Complete Suite for Payroll and Workforce Management
          </motion.h2>
          <motion.p
            initial={{
              y: 20,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.2,
            }}
            viewport={{ once: true, amount: 0.6 }}
            className="text-sm md:text-base leading-[130%] tracking-[0px] text-black"
          >
            From crypto/fiat payments to timesheets and contracts, every feature
            is built to simplify how you manage your team.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mx-auto">
          {/* Card 1: Multiple Payment Types */}
          <motion.div
            className="bg-[#FCF9FF] pt-6 px-6 lg:px-7 lg:pt-7 space-y-4 flex flex-col justify-between"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="max-w-84 space-y-1.5">
              <h6 className="text-base md:text-2xl font-semibold">
                Multiple Payment Types
              </h6>
              <p className="text-xs font-normal text-[#6B7280]">
                Pay team members the way that works best for your workflow:
              </p>
            </div>
            <div>
              <div className="flex justify-between flex-col gap-6 md:flex-row lg:flex-col xl:flex-row">
                <ul className="space-y-2">
                  <li className="flex items-center gap-1 text-base font-semibold leading-[130%]">
                    <div className="text-[#5E2A8C]">
                      <CircleCheckIcon />
                    </div>
                    <p>Fixed Rate</p>
                  </li>
                  <li className="flex items-center gap-1 text-base font-semibold leading-[130%]">
                    <div className="text-[#5E2A8C]">
                      <CircleCheckIcon />
                    </div>
                    <p>Pay-As-You-Go</p>
                  </li>
                  <li className="flex items-center gap-1 text-base font-semibold leading-[130%]">
                    <div className="text-[#5E2A8C]">
                      <CircleCheckIcon />
                    </div>
                    <p>Milestone Payments</p>
                  </li>
                </ul>
                <div className="max-w-75 h-full">
                  <Image
                    src={Feature1.src}
                    width={Feature1.width}
                    height={Feature1.height}
                    blurDataURL={Feature1.blurDataURL}
                    alt="Multiple Payment Types"
                    className="w-fit h-auto"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Time sheet Management */}
          <motion.div
            className="bg-[#FCF9FF] pt-6 px-6 lg:px-7 grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-4 lg:grid-cols-1 content-between lg:pt-7"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="max-w-98 space-y-1.5">
              <h6 className="text-base md:text-2xl font-semibold">
                Time sheet Management
              </h6>
              <p className="text-xs font-normal text-[#6B7280]">
                Employees log their hours, employers track productivity all
                synced with payroll for accurate payment.
              </p>
            </div>
            <div>
              <div className="flex justify-end flex-col gap-6 xl:flex-row">
                <div className="max-w-75">
                  <Image
                    src={Feature2.src}
                    width={Feature2.width}
                    height={Feature2.height}
                    blurDataURL={Feature2.blurDataURL}
                    alt="Time sheet Management"
                    className="w-fit h-auto"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Smart Payroll Management */}
          <motion.div
            className="bg-[#FCF9FF] min-h-70 pt-6 px-6 lg:pl-7 lg:pr-15 grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-14.5 lg:grid-cols-1 content-between lg:pt-7"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="max-w-98 space-y-1.5">
              <h6 className="text-base md:text-2xl font-semibold">
                Smart Payroll Management
              </h6>
              <p className="text-xs font-normal text-[#6B7280]">
                Add employees to your payroll, automate payment cycles, and
                track all disbursements with complete transparency.
              </p>
            </div>
            <div>
              <div className="flex justify-end flex-col gap-6 xl:flex-row">
                <div className="max-w-105">
                  <Image
                    src={Feature3.src}
                    width={Feature3.width}
                    height={Feature3.height}
                    blurDataURL={Feature3.blurDataURL}
                    alt="Smart Payroll Management"
                    className="w-fit h-auto"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Employee Portal */}
          <motion.div
            className="bg-[#FCF9FF] pt-6 px-6 lg:px-7 pb-6 lg:pb-7 lg:pt-7 space-y-4 flex flex-col md:flex-row lg:flex-col xl:flex-row justify-between"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="space-y-4">
              <div className="max-w-84 space-y-1.5">
                <h6 className="text-base md:text-2xl font-semibold">
                  Employee Portal
                </h6>
                <p className="text-xs font-normal text-[#6B7280]">
                  Employees can:
                </p>
              </div>
              <ul className="space-y-2 lg:hidden xl:block">
                <li className="flex items-center gap-1 text-base font-semibold leading-[130%]">
                  <div className="text-[#5E2A8C]">
                    <CircleCheckIcon />
                  </div>
                  <p>Receive payments</p>
                </li>
                <li className="flex items-center gap-1 text-base font-semibold leading-[130%]">
                  <div className="text-[#5E2A8C]">
                    <CircleCheckIcon />
                  </div>
                  <p>Track earnings</p>
                </li>
                <li className="flex items-center gap-1 text-base font-semibold leading-[130%]">
                  <div className="text-[#5E2A8C]">
                    <CircleCheckIcon />
                  </div>
                  <p>Access their contracts</p>
                </li>
                <li className="flex items-center gap-1 text-base font-semibold leading-[130%]">
                  <div className="text-[#5E2A8C]">
                    <CircleCheckIcon />
                  </div>
                  <p>Monitor their time sheets</p>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex justify-between flex-col gap-6 md:flex-row lg:flex-col xl:flex-row">
                <div className="max-w-75 h-full">
                  <Image
                    src={Feature4.src}
                    width={Feature4.width}
                    height={Feature4.height}
                    blurDataURL={Feature4.blurDataURL}
                    alt="Multiple Payment Types"
                    className="w-fit h-auto"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 5: Create & Manage Contracts */}
          <motion.div
            className="bg-[#FCF9FF] min-h-70 pt-6 px-6 lg:pl-7 lg:pr-15 grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-6 lg:grid-cols-1 content-between lg:pt-7"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="max-w-84 space-y-1.5">
              <h6 className="text-base md:text-2xl font-semibold">
                Create & Manage Contracts
              </h6>
              <p className="text-xs font-normal text-[#6B7280]">
                Set up clear agreements for work, deliverables, milestones, and
                rates. Everything stored securely for future reference.
              </p>
            </div>
            <div>
              <div className="flex justify-end flex-col gap-6 xl:flex-row">
                <div className="max-w-105">
                  <Image
                    src={Feature5.src}
                    width={Feature5.width}
                    height={Feature5.height}
                    blurDataURL={Feature5.blurDataURL}
                    alt="Create & Manage Contracts"
                    className="w-fit h-auto"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 6: Stay Compliant Without the Stress */}
          <motion.div
            className="bg-[#FCF9FF] min-h-70 pt-6 px-6 lg:pl-7 lg:pr-15 grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-6 lg:grid-cols-1 content-between lg:pt-7"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="space-y-1.5">
              <h6 className="text-base md:text-2xl font-semibold">
                Stay Compliant Without the Stress
              </h6>
              <p className="text-xs font-normal text-[#6B7280]">
                Automatically handle payroll taxes and pension remittances while
                you focus on what matters.
              </p>
            </div>
            <div>
              <div className="flex justify-end flex-col gap-6 xl:flex-row">
                <div className="max-w-105">
                  <Image
                    src={Feature5.src}
                    width={Feature5.width}
                    height={Feature5.height}
                    blurDataURL={Feature5.blurDataURL}
                    alt="Stay Compliant Without the Stress"
                    className="w-fit h-auto"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
