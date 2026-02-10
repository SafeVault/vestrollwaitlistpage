"use client";
import React from "react";
import Image from "next/image";
import CheckIcon from "../../assets/check.svg";
import { motion, Variants } from "framer-motion";

interface ChecklistItem {
  text: string;
}

interface TimelineCard {
  title: string;
  items: ChecklistItem[];
}

export const ThirtyDays = () => {
  const timelineCards: TimelineCard[] = [
    {
      title: "Get started.",
      items: [
        { text: "Connect your ERP in five minutes" },
        { text: "Upload you policy in two minutes" },
        { text: "Issue yourself a card in one minute" },
      ],
    },
    {
      title: "Get Comfortable",
      items: [
        { text: "Connect to HRIS, email, and 200+ apps" },
        { text: "Set approvals and controls" },
        { text: "Issue cards to employees" },
      ],
    },
    {
      title: "Ask why you didn't switch years ago",
      items: [
        { text: "100% of business spend moved to Vestroll" },
        { text: "Intake-to-pay 8.5x more efficient" },
        { text: "Books close 75% faster" },
      ],
    },
  ];

  const timelineDays = ["Today", "Day 5", "Day 30"];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className=" mx-auto max-w-274.5">
        {/* Header */}
        <div className="text-left md:text-center mb-12">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[1.5rem] md:text-[2.875rem] mb-8 md:mb-12  text-black leading-[120%] md:max-w-4xl tracking-[0px] md:mx-auto font-medium text-center"
          >
            Here&apos;s what you get done with Vestroll in just 30 days
          </motion.h2>

          {/* CTA Button */}
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: true }}
            className="bg-[#5e2a8c] text-sm hover:bg-[#4a2170] text-white px-3 py-4 min-w-45 rounded-xl font-medium transition-all duration-200 md:mx-auto hidden md:flex text-center items-center justify-center shadow-lg hover:shadow-purple-100"
          >
            Get started
          </motion.button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          {/* Timeline */}
          <div className="relative mb-16 max-w-255 mx-auto">
            <div className="flex justify-between items-end relative w-full">
              {timelineDays.map((day, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center z-10 relative flex-1"
                >
                  {/* Timeline Line Segment */}
                  {index < timelineDays.length - 1 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5 + index * 0.2,
                        ease: "easeInOut",
                      }}
                      viewport={{ once: true }}
                      style={{ originX: 0 }}
                      className="absolute bottom-[6px] left-[50%] right-[-50%] h-0.5 bg-purple-200 z-0"
                    ></motion.div>
                  )}
                  <motion.span
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      ease: "easeOut",
                      duration: 0.5,
                      delay: 0.3 + index * 0.2,
                    }}
                    viewport={{ once: true }}
                    className="text-xs md:text-base text-[#4B5563] flex items-center justify-center w-full  py-1 bg-[#FAF2FF] rounded-sm max-w-18.75 font-medium mb-3"
                  >
                    {day}
                  </motion.span>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + index * 0.2,
                    }}
                    viewport={{ once: true }}
                    className="w-3 h-3 bg-white border-2 border-[#E6D8F3] rounded-full relative z-10"
                  ></motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {timelineCards.map((card, index) => (
              <motion.div
                variants={cardVariants}
                key={index}
                className="bg-[#FCF9FF] border-2 border-[#E9D3FF] rounded-2xl py-8 px-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <h3 className="text-xl mb-6 leading-[120%] text-[#111827] font-medium group-hover:text-[#5E2A8C] transition-colors duration-300">
                  {card.title}
                </h3>

                <ul className="space-y-4">
                  {card.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="shrink-0 w-4 h-4 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300">
                        <Image
                          src={CheckIcon}
                          alt="Check"
                          width={24}
                          height={24}
                        />
                      </div>
                      <span className="text-[0.82rem] text-[#374151] leading-[142%] ">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden relative pl-5">
          <div className=" gap-8 relative z-10 flex justify-center items-center">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="bg-[#E6D8F3] w-px absolute left-0"
            ></motion.div>

            <div className="space-y-6 w-full">
              {timelineCards.map((card, index) => (
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  viewport={{ once: true }}
                  key={index}
                  className="bg-[#FCF9FF] border-2 border-[#E9D3FF] rounded-2xl py-8 px-6 hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold text-purple-600 px-2 py-1 bg-[#FAF2FF] rounded">
                      {timelineDays[index]}
                    </span>
                    <h3 className="text-xl font-medium text-gray-900">
                      {card.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {card.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="shrink-0 w-6 h-6 flex items-center justify-center mt-0.5">
                          <Image
                            src={CheckIcon}
                            alt="Check"
                            width={13}
                            height={13}
                          />
                        </div>
                        <span className="text-xs text-gray-600 leading-relaxed font-medium">
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
