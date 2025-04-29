"use client";

import { WhyChooseDatas } from "@/utils";
import { useInView, motion } from "framer-motion";
import React, { Suspense } from "react";

// Motion variants for animation
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
};

const WhyChooseUs = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="w-full px-4 sm:px-6 lg:px-8 py-24 bg-[#EBF0FF]"
    >
      {/* Section Heading */}
      <div className="flex flex-col items-center gap-4 mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] text-center uppercase">
          Why Choose Us?
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-[#1A1A1A] to-transparent rounded-full" />
      </div>

      {/* Features Grid */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto"
      >
        {WhyChooseDatas.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center text-center gap-5 px-6 py-8 rounded-xl 
              bg-white shadow-lg hover:shadow-xl border border-[#D4DBF9] 
              transition-transform duration-300 ease-in-out"
          >
            {/* Icon with gradient background */}
            <Suspense fallback={<div className="w-12 h-12 bg-gray-200 rounded-full" />}>
              <div className="flex items-center justify-center p-5 rounded-full bg-gradient-to-br from-[#1E1FBF] to-[#0D1A3C] shadow-md">
                <item.icon className="w-12 h-12 text-white" />
              </div>
            </Suspense>

            {/* Title */}
            <h3 className="text-lg font-semibold text-[#1A1A1A]">
              {item.title}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
