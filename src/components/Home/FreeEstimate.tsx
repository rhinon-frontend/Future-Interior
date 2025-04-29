"use client";

import { FreeEstimateData, FreeEstimateData2 } from "@/utils";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import EstimateSection from "./EstimateSection";

// Motion Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Lazy Load Second Estimate Section
const LazyEstimateSection = dynamic(() => Promise.resolve(EstimateSection), {
  ssr: false,
});

const FreeEstimate = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col gap-24">
      {/* Section Heading */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4"
      >
        <h2 className="text-4xl font-bold text-[#0D1A3C] text-center uppercase tracking-wide">
          Free Estimate
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "8rem" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-[#1E1FBF] via-[#7286D3] to-transparent rounded-full"
        />
      </motion.div>

      {/* First Estimate Section (Important for LCP) */}
      <EstimateSection
        heading={FreeEstimateData.heading}
        title={FreeEstimateData.title}
        subtitle={FreeEstimateData.subtitle}
        buttonText={FreeEstimateData.buttonText}
        image={FreeEstimateData.image}
        priority={true}
      />

      {/* Second Estimate Section (Lazy loaded) */}
      <LazyEstimateSection
        heading={FreeEstimateData2.heading2}
        title={FreeEstimateData2.title2}
        subtitle={FreeEstimateData2.subtitle2}
        buttonText={FreeEstimateData2.buttonText2}
        image={FreeEstimateData2.image2}
        reverse
      />
    </section>
  );
};

export default FreeEstimate;
