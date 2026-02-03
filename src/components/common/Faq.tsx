"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./button";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  items?: FaqItem[];
}

const defaultFaqItems: FaqItem[] = [
  {
    question: "What is this platform used for?",
    answer:
      "It’s a payroll and workforce management system that allows employers to pay employees in fiat, manage timesheets, create contracts, and track all payment history.",
  },
  {
    question: "Is this platform for both employers and employees?",
    answer:
      "Our platform integrates with the Stellar network to enable fast, low-cost stablecoin payments. Employees can receive payments in USDC or other supported cryptocurrencies directly to their wallets.",
  },
  {
    question: "How do payment methods work?",
    answer:
      "Yes, we implement enterprise-grade security measures including multi-signature wallets, encrypted data storage, and compliance with international financial regulations.",
  },
  {
    question: "Can employees submit timesheets?",
    answer:
      "Absolutely! Our hybrid system supports both traditional fiat payments and cryptocurrency payments, giving you flexibility in how you compensate your team.",
  },
];

function FaqItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-[#F3F4F6] rounded-[10px]">
      <button
        onClick={onToggle}
        className="w-full py-4 px-4 md:px-8 md:py-5.75 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
      >
        <h5 className="font-bold text-[#0D0D0D] tracking-[-0.3px] leading-[150%] md:text-xl">
          {item.question}
        </h5>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="">
              <p className="text-gray-700 leading-relaxed px-4 sm:px-8 py-4 text-xs md:text-xl sm:py-8">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Faq({ items = defaultFaqItems }: FaqProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div>
      <div className="bg-white rounded-lg  border-gray-200 space-y-4">
        {items.map((item, index) => (
          <FaqItem
            key={index}
            item={item}
            isOpen={openItems.has(index)}
            onToggle={() => toggleItem(index)}
          />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 20 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ ease: "easeInOut", duration: 0.3, delay: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}
        className="flex justify-end w-full mt-4"
      >
        <Button
          variant="primary"
          className="bg-[#5E2A8C] text-white px-4! text-sm! rounded-xl h-10!  py-3! flex gap-2 items-center  cursor-pointer focus:bg-[#5e2a8cd5] transition-colors ease-in-out duration-300 hover:bg-[#8b3dd0cf] "
        >
          Load More
          <ChevronDown size={16} />
        </Button>
      </motion.div>
    </div>
  );
}

export default Faq;
export type { FaqItem, FaqProps };
