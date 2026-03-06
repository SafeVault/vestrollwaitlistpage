"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import policies from "../../assets/greentick.png";
import tripleCheck from "../../assets/tripleChecks.png";
import busywork from "../../assets/leavesTheBusywork.png";

interface Benefit {
  title: string;
  description: string;
  imagePosition: "left" | "right";
  image: any;
}

export const ThreeWays = () => {
  const benefits: Benefit[] = [
    {
      title: "Set Policies That Enforce Themselves.",
      description:
        "Customize Approval Flows, Pre-Approve Funds, Issue Cards With Built-In Controls And Stop Out-Of-Policy Spending.",
      imagePosition: "right",
      image: policies,
    },
    {
      title: "Triple Checks Are Done For You.",
      description:
        "Vestroll Keeps An Eye Out 24/7 To Catch Any Out-Of-Policy Transactions, Uncover Errors, And See Where You&apos;re Overspending.",
      imagePosition: "left",
      image: tripleCheck,
    },
    {
      title: "Leave The Busywork To Us.",
      description:
        "Keep Everyone Focused On The Big Picture, And Let Vestroll Automate The Rest—Expenses, Accounting, Compliance, And More.",
      imagePosition: "right",
      image: busywork,
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-white overflow-hidden">
      <div className=" mx-auto max-w-300">
        {/* Header */}
        <div className="text-left md:text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl lg:text-[2.875rem] mb-4 text-black leading-[120%] tracking-[0px] max-w-4xl text-center mx-auto font-regular"
          >
            Three ways we save your company both time and money
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-[142%] text-center"
          >
            There are many more, but we thought we&apos;d easy you into it
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="space-y-24 md:space-y-32">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`flex flex-col-reverse gap-8 md:gap-12 md:flex-row items-center ${
                benefit.imagePosition === "left" ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div className="flex flex-1 flex-col justify-center">
                <div className="space-y-6 max-w-lg">
                  <motion.h3
                    initial={{
                      x: benefit.imagePosition === "right" ? -30 : 30,
                      opacity: 0,
                    }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      ease: [0.16, 1, 0.3, 1],
                      duration: 0.8,
                    }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="text-2xl lg:text-[2rem] font-bold text-gray-900 leading-[130%] tracking-[-0.3px]"
                  >
                    {benefit.title}
                  </motion.h3>
                  <motion.p
                    initial={{
                      x: benefit.imagePosition === "right" ? -30 : 30,
                      opacity: 0,
                    }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      ease: [0.16, 1, 0.3, 1],
                      duration: 0.8,
                      delay: 0.1,
                    }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="text-lg font-normal text-gray-600 leading-[150%] tracking-[-0.3px]"
                  >
                    {benefit.description}
                  </motion.p>
                </div>
              </div>

              {/* Image Content */}
              <motion.div
                viewport={{ once: true, amount: 0.3 }}
                initial={{
                  x: benefit.imagePosition === "right" ? 50 : -50,
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{ x: 0, opacity: 1, scale: 1 }}
                transition={{
                  ease: [0.16, 1, 0.3, 1],
                  duration: 1,
                  delay: 0.2,
                }}
                className="flex-1 w-full relative aspect-4/3 md:aspect-auto md:h-[400px] rounded-3xl overflow-hidden shadow-2xl group"
              >
                <div className="absolute inset-0 bg-linear-to-br from-purple-100/20 to-purple-200/20 group-hover:opacity-0 transition-opacity duration-500" />
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
