"use client";

import React from "react";
import { motion } from "framer-motion";
import { WhyChooseDatas } from "@/utils";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const WhyChooseUs = () => {
  return (
    <section className="w-full mx-auto  px-4 sm:px-6 lg:px-0 py-20 flex flex-col gap-12 -mt-12 bg-[#f6f1eb]">
      {/* Section Heading */}
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-800 text-center uppercase">
          Why Choose Us?
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-zinc-600 to-transparent rounded-full" />
      </div>

      {/* Features Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-3  gap-10 max-w-7xl mx-auto mt-4"
      >
        {WhyChooseDatas.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className="flex flex-col items-center text-center gap-6 px-4"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center justify-center p-5 rounded-lg bg-[#eee5dc] shadow-md">
              <item.icon className="w-12 h-12 text-black" />
            </div>
            <h3 className="text-lg font-medium text-zinc-700">{item.title}</h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
