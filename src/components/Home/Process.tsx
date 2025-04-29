"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import { steps } from "@/utils";

// Framer Motion animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }, // Faster stagger
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }, // Slightly faster animation
  },
};

// Memoized StepCard to prevent unnecessary re-renders
const StepCard = memo(({ step }: { step: (typeof steps)[number] }) => (
  <motion.div
    key={step.id}
    className="flex flex-col items-start gap-4 p-6 text-black"
    variants={fadeUp}
  >
    <span className="text-lg font-semibold">
      {step.id}
    </span>
    <h4 className="text-2xl font-semibold">{step.title}</h4>
    <p className="text-base leading-relaxed text-[#4f4f4f]">
      {step.description}
    </p>
  </motion.div>
));
StepCard.displayName = "StepCard";

const Process = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-20 w-full bg-[#f1f5ff] px-4 py-20 overflow-hidden">
      {/* Header */}
      <motion.div
        className="text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Lower threshold for better INP
      >
        <h2 className="text-4xl font-bold uppercase">
          Process
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-[#1E1FBF] to-transparent mx-auto rounded-full mt-3" />
      </motion.div>

      {/* Process Steps */}
      <motion.div
        className="grid w-full max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Only trigger animation when 20% visible
      >
        {/* Left Title Box */}
        <motion.div className="col-span-1 p-6 self-start" variants={fadeUp}>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Our Working Process
          </h3>
        </motion.div>

        {/* Steps */}
        {steps.map((step) => (
          <StepCard key={step.id} step={step} />
        ))}
      </motion.div>
    </section>
  );
};

export default memo(Process);
