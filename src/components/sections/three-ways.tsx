"use client";
import { motion } from "framer-motion";
interface Benefit {
  title: string;
  description: string;
  imagePosition: "left" | "right";
}

export const ThreeWays = () => {
  const benefits: Benefit[] = [
    {
      title: "Set Policies That Enforce Themselves.",
      description:
        "Customize Approval Flows, Pre-Approve Funds, Issue Cards With Built-In Controls And Stop Out-Of-Policy Spending.",
      imagePosition: "right",
    },
    {
      title: "Triple Checks Are Done For You.",
      description:
        "Vestroll Keeps An Eye Out 24/7 To Catch Any Out-Of-Policy Transactions, Uncover Errors, And See Where You&apos;re Overspending.",
      imagePosition: "left",
    },
    {
      title: "Leave The Busywork To Us.",
      description:
        "Keep Everyone Focused On The Big Picture, And Let Vestroll Automate The Rest—Expenses, Accounting, Compliance, And More.",
      imagePosition: "right",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className=" mx-auto max-w-300">
        {/* Header */}
        <div className="text-left md:text-center mb-16 md:mb-20">
          <h2 className="text-2xl md:text-4xl lg:text-[2.875rem] mb-4 text-black leading-[120%] tracking-[0px] max-w-4xl text-center mx-auto font-regular">
            Three ways we save your company both time and money
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-[142%] text-center">
            There are many more, but we thought we&apos;d easy you into it
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="space-y-12 md:space-y-15">
          {benefits.map((benefit, index) => (
            <motion.div
              initial={{
                y: 20,
                opacity: 0,
                scale: 0.95,
              }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
              viewport={{ once: true, amount: 0.4 }}
              key={index}
              className={`flex flex-col-reverse gap-4 md:gap-5 md:flex-row  ${benefit.imagePosition === "left" ? "md:flex-row-reverse" : "md:flex-row"}`}
            >
              {/* Text Content */}
              <div
                className={`flex md:items-center flex-1 ${benefit.imagePosition === "left" ? "md:justify-end" : ""}`}
              >
                <div className="space-y-4 lg:w-115.75">
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      ease: "easeInOut",
                      duration: 0.3,
                      delay: 0.5,
                    }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="text-xl  lg:text-[1.75rem] font-bold  text-gray-800 leading-[150%] tracking-[-0.3px]"
                  >
                    {benefit.title}
                  </motion.h3>
                  <motion.p
                    initial={{
                      x: benefit.imagePosition === "left" ? -20 : 20,
                      opacity: 0,
                      scale: 0.95,
                    }}
                    viewport={{ once: true, amount: 0.4 }}
                    whileInView={{
                      x: 0,
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      ease: "easeInOut",
                      duration: 0.3,
                      delay: 0.7,
                    }}
                    className="text-xl  font-normal  text-gray-800 leading-[150%] tracking-[-0.3px]"
                  >
                    {benefit.description}
                  </motion.p>
                </div>
              </div>

              {/* Image Placeholder */}
              <motion.div
                viewport={{ once: true, amount: 0.4 }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ ease: "easeInOut", duration: 0.3, delay: 0.3 }}
                className="md:flex-1 flex h-58.75 md:w-1/2 md:h-102.5 bg-linear-to-br from-purple-100 to-purple-200 rounded-lg -full"
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
