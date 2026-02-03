"use client";
import React from "react";
import Image from "next/image";
import CheckIcon from "../../assets/check.svg";
import { motion } from "framer-motion";
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
  const timelineDaysMobile = ["Today", "Day 5", "Day 30"];

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className=" mx-auto max-w-274.5">
        {/* Header */}
        <div className="text-left md:text-center mb-12">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.3, delay: 0.2 }}
            viewport={{ once: true, amount: 0.4 }}
            className="text-[1.5rem] md:text-[2.875rem] mb-8 md:mb-12  text-black leading-[120%] md:max-w-4xl tracking-[0px] md:mx-auto font-medium text-center"
          >
            Here&apos;s what you get done with Vestroll in just 30 days
          </motion.h2>

          {/* CTA Button */}
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            className="bg-[#5e2a8c] text-sm hover:bg-[#5e2a8c]/90 text-white px-3 py-4 min-w-45 rounded-xl font-medium transition-colors duration-200 md:mx-auto hidden md:flex text-center items-center justify-center"
          >
            Join the wait list
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
                    <div className="absolute bottom-[6px] left-[50%] right-[-50%] h-0.5 bg-purple-200 z-0"></div>
                  )}
                  <motion.span
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      ease: "easeInOut",
                      duration: 0.3,
                      delay: 0.2 * index,
                    }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="text-xs md:text-base text-[#4B5563] flex items-center justify-center w-full  py-1 bg-[#FAF2FF] rounded-sm max-w-18.75 font-medium mb-3"
                  >
                    {day}
                  </motion.span>
                  <div className="w-3 h-3 bg-white border-2 border-[#E6D8F3] rounded-full relative z-10"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {timelineCards.map((card, index) => (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.3,
                  delay: 0.2 * index,
                }}
                viewport={{ once: true, amount: 0.6 }}
                key={index}
                className="bg-[#FCF9FF] border-2 border-[#E9D3FF] rounded-2xl py-8 px-6 hover:shadow-lg transition-shadow duration-200"
              >
                <h3 className="text-xl  mb-6 leading-[120%] text-[#111827] font-medium">
                  {card.title}
                </h3>

                <ul className="space-y-4">
                  {card.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      {/* Check Circle Icon */}
                      <div className="shrink-0 w-4 h-4 flex items-center justify-center mt-0.5">
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
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden relative pl-5">
          <div className=" gap-8 relative z-10 flex  justify-center items-center">
            <div className="bg-[#E6D8F3] w-px h-157 flex flex-col justify-between">
              {timelineDays.map((day, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center z-10 relative"
                >
                  <motion.span
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      ease: "easeInOut",
                      duration: 0.3,
                      delay: 0.2 * index,
                    }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="text-xs md:text-base text-[#4B5563] text-nowrap h-7 flex items-center justify-center   py-2 px-2 bg-[#FAF2FF] w-fit rounded-sm relative font-medium "
                  >
                    {day}
                  </motion.span>
                </div>
              ))}
            </div>

            {/* Card Content */}
            <div className="space-y-6 ">
              {timelineCards.map((card, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start w-full! flex-1"
                >
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      ease: "easeInOut",
                      duration: 0.3,
                      delay: 0.2 * index,
                    }}
                    viewport={{ once: true, amount: 0.6 }}
                    key={index}
                    className="bg-[#FCF9FF] border-2 border-[#E9D3FF] rounded-2xl py-8 px-6 hover:shadow-lg transition-shadow duration-200 w-full flex-1"
                  >
                    <h3 className="text-xl font-medium mb-4 text-gray-900">
                      {card.title}
                    </h3>
                    <ul className="space-y-3">
                      {card.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center mt-0.5">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
