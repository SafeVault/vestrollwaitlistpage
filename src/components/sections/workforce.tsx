"use client";
import React from "react";
import Image from "next/image";
import freelancers from "@/assets/images/Freelancers.jpg";
import remoteTeams from "@/assets/images/Remote teams.png";
import employers from "@/assets/images/Employers.png";
import startups from "@/assets/images/Startups.jpg";
import { motion, Variants } from "framer-motion";

export const Workforce = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Premium ease
      },
    },
  };

  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.4, duration: 0.5 },
    },
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Header - No button here as requested previously */}
        <div className="mb-12 md:mb-16">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
          >
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 text-gray-900 leading-tight">
                Built for Every Modern Workforce
              </h2>
              <p className="text-base md:text-lg text-gray-500 max-w-lg">
                Whether you&apos;re an employer, freelancer, remote team, or
                Web3 startup, our platform makes managing payments, contracts,
                and timesheets simple and seamless.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Combined Layout - Simplified for responsiveness */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8"
        >
          {/* Freelancers - Tall on Desktop */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 relative bg-white rounded-3xl overflow-hidden shadow-lg group h-[400px] lg:h-[600px]"
          >
            <Image
              src={freelancers}
              alt="Freelancers"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-60" />
            <motion.div
              variants={badgeVariants}
              className="absolute top-6 left-1/2 -translate-x-1/2 md:left-auto md:right-6 md:translate-x-0 bg-white/20 backdrop-blur-md border border-white/30 px-6 py-2 rounded-full"
            >
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                Freelancers
              </span>
            </motion.div>
          </motion.div>

          {/* Middle Stack - Two rows on Desktop */}
          <div className="lg:col-span-4 flex flex-col gap-6 md:gap-8 justify-between">
            {/* Remote Teams */}
            <motion.div
              variants={itemVariants}
              className="relative bg-white rounded-3xl overflow-hidden shadow-lg group h-[250px] lg:h-[286px]"
            >
              <Image
                src={remoteTeams}
                alt="Remote Teams"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-40" />
              <motion.div
                variants={badgeVariants}
                className="absolute bottom-6 left-6 bg-white/20 backdrop-blur-md border border-white/30 px-6 py-2 rounded-full"
              >
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Remote Teams
                </span>
              </motion.div>
            </motion.div>

            {/* Startups */}
            <motion.div
              variants={itemVariants}
              className="relative bg-white rounded-3xl overflow-hidden shadow-lg group h-[250px] lg:h-[286px]"
            >
              <Image
                src={startups}
                alt="Startups"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-40" />
              <motion.div
                variants={badgeVariants}
                className="absolute bottom-6 left-6 bg-white/20 backdrop-blur-md border border-white/30 px-6 py-2 rounded-full"
              >
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Startups
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* Employers - Tall on Desktop */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 relative bg-white rounded-3xl overflow-hidden shadow-lg group h-[400px] lg:h-[600px]"
          >
            <Image
              src={employers}
              alt="Employers"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-60" />
            <motion.div
              variants={badgeVariants}
              className="absolute top-6 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0 bg-white/20 backdrop-blur-md border border-white/30 px-6 py-2 rounded-full"
            >
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                Employers
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
