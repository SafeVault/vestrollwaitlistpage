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
        "Customize approval flows, pre-approve funds, and issue cards with built-in controls to stop out-of-policy spending before it happens.",
      imagePosition: "right",
      image: policies,
    },
    {
      title: "Triple Checks Are Done For You.",
      description:
        "Vestroll keeps an eye out 24/7 to catch any out-of-policy transactions, uncover errors, and identify where you might be overspending.",
      imagePosition: "left",
      image: tripleCheck,
    },
    {
      title: "Leave The Busywork To Us.",
      description:
        "Keep everyone focused on the big picture and let Vestroll automate the rest, expenses, accounting, and more.",
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
