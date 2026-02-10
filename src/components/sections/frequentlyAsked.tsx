"use client";
import Image from "next/image";
import image from "@/assets/images/guy-sitting.jpg";
import Faq from "../common/Faq";
import { Workforce } from "./workforce";
import { motion } from "framer-motion";
function FrequentlyAsked() {
  return (
    <section className="mt-10">
      <div className="max-w-310 mx-auto px-5  flex-col-reverse gap-25 flex lg:flex-col">
        <Workforce />
        <div className="space-y-5.75">
          <div className="space-y-4 md:space-y-11">
            <motion.div
              initial={{ scale: 0.8, edgeMode: 0, y: 20, opacity: 0 }}
              whileInView={{ scale: 1, y: 0, edgeMode: 10, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.4 }}
              className="md:hidden h-60.75  relative"
            >
              {/* gradient overlay */}
              <div className="bg-linear-to-b from-[#50247800] to-[#502478] absolute inset-0  rounded-2xl overflow-hidden" />
              <Image
                src={image.src}
                blurDataURL={image.blurDataURL}
                height={image.blurHeight}
                width={image.width}
                alt="a guy sitting"
                className="w-full h-full rounded-2xl  object-cover object-[40%_10%] "
              />
            </motion.div>
            {/* barge */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.4 }}
              className="px-2 py-1 text-xs font-normal text-[#4A4A4A] bg-[#E5E7EB] rounded w-fit"
            >
              <p>Frequently Asked Questions</p>
            </motion.div>
            <motion.h4
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.4 }}
              className="text-2xl md:text-3xl  lg:text-[2.5rem] font-medium leading-[120%]"
            >
              Got Questions? We&apos;ve Got Answers!
            </motion.h4>
          </div>
          <div className="flex  gap-6 flex-col items-center lg:flex-row">
            <div className="md:flex hidden   border border-[#F3F4F6] rounded-[40px] px-5 py-6">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
                className="   w-81 h-124  relative"
              >
                {/* gradient overlay */}
                <div className="bg-linear-to-b from-[#50247800] to-[#502478] absolute inset-0  rounded-2xl overflow-hidden" />
                <Image
                  src={image.src}
                  blurDataURL={image.blurDataURL}
                  height={image.blurHeight}
                  width={image.width}
                  alt="a guy sitting"
                  className="w-full h-full rounded-2xl  object-cover object-[40%_10%] "
                />
              </motion.div>
            </div>
            <motion.div
              initial={{
                x: 20,
                opacity: 0,
              }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.4 }}
              className="w-full"
            >
              <Faq />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FrequentlyAsked;
