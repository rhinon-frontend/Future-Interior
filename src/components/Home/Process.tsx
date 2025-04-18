"use client";

import { steps } from "@/utils";
import React from "react";
import { motion } from "framer-motion";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Process = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-20 w-screen bg-[#49543e] mx-auto px-4 py-20">
      {/* Header Animation */}
      <motion.div
        className="text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-bold uppercase text-white">Process</h1>
        <div className="w-32 h-1 bg-gradient-to-r from-white to-transparent mx-auto rounded-full mt-3" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl w-full px-4">
        {/* Left-side static title box with animation */}
        <motion.div
          className="col-span-1 p-6 self-start"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="text-5xl tracking-tight text-white">
            Our Working Process
          </h1>
        </motion.div>

        {/* Steps */}
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-start justify-start gap-4 p-6 text-white"
            custom={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-xl font-medium">{step.id}</span>
            <h3 className="text-2xl font-medium text-[#fff]">{step.title}</h3>
            <p className="text-[#fff9] text-base leading-[27px]">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Process;
