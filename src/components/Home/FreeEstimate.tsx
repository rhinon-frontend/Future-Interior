"use client";

import { FreeEstimateData, FreeEstimateData2 } from "@/utils";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const FreeEstimate = () => {
  const router = useRouter();

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-10 md:py-20 flex flex-col gap-24">
      {/* Section Heading */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4"
      >
        <h2 className="text-4xl font-semibold text-zinc-800 text-center uppercase">
          Free Estimate
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-zinc-600 to-transparent rounded-full" />
      </motion.div>

      {/* Section 1 */}
      <motion.div
        className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {/* Text Content */}
        <motion.div
          variants={fadeInUp}
          className="flex-1 flex flex-col gap-6 text-center lg:text-left"
        >
          <div className="flex gap-3 items-center justify-center lg:justify-start text-zinc-600">
            <div className="h-0.5 w-6 bg-zinc-500" />
            <h3 className="tex-base md:text-lg uppercase">
              {FreeEstimateData.heading}
            </h3>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[56px] lg:leading-[66px] font-bold text-zinc-900 leading-tight">
            {FreeEstimateData.title}
          </h1>

          <p className="text-zinc-600 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            {FreeEstimateData.subtitle}
          </p>

          <Button
            variant="default"
            className="mt-4 self-center lg:self-start px-6 py-6"
            onClick={() => router.push("/request-quote")}
          >
            {FreeEstimateData.buttonText}
          </Button>
        </motion.div>

        {/* Image */}
        <motion.div
          variants={fadeInUp}
          className="flex-1 w-full max-w-lg"
        >
          <Image
            src={FreeEstimateData.image}
            width={400}
            height={450}
            alt="Estimate Image"
            className="w-full h-auto object-cover shadow-xl"
          />
        </motion.div>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-between gap-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {/* Image */}
        <motion.div
          variants={fadeInUp}
          className="flex-1 w-full max-w-lg"
        >
          <Image
            src={FreeEstimateData2.image2}
            width={400}
            height={450}
            alt="Estimate Image"
            className="w-full h-auto object-cover shadow-xl"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          variants={fadeInUp}
          className="flex-1 flex flex-col gap-6 text-center lg:text-left"
        >
          <div className="flex gap-3 items-center justify-center lg:justify-start text-zinc-600">
            <div className="h-0.5 w-6 bg-zinc-500" />
            <h3 className="text-base md:text-lg uppercase">
              {FreeEstimateData2.heading2}
            </h3>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[56px] lg:leading-[66px] font-bold text-zinc-900 leading-tight">
            {FreeEstimateData2.title2}
          </h1>

          <p className="text-zinc-600 text-lg leading-relaxed mx-auto lg:mx-0 max-w-xl">
            {FreeEstimateData2.subtitle2}
          </p>

          <Button
            variant="default"
            className="mt-4 self-center lg:self-start px-6 py-6"
            onClick={() => router.push("/request-quote")}
          >
            {FreeEstimateData2.buttonText2}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FreeEstimate;
