"use client";

import { Button } from "../ui/button";
import { motion } from "framer-motion";
import React, { Suspense } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Optimized EstimateSection Component
const EstimateSection = ({
  heading,
  title,
  subtitle,
  buttonText,
  image,
  reverse,
  priority = false,
  logoImage,
}: any) => {
  const router = useRouter();

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center justify-between gap-16`}
    >
      {/* Logo/Image Section */}
      <motion.div
        variants={fadeInUp}
        className="flex-1 w-full max-w-lg transition-all duration-300 ease-in-out rounded-lg overflow-hidden"
      >
        <Suspense
          fallback={
            <div className="w-full h-[450px] bg-gray-200 animate-pulse rounded-lg" />
          }
        >
          <Image
            src={logoImage || image}
            width={400}
            height={450}
            alt="Estimate Image"
            priority={priority}
            loading={priority ? "eager" : "lazy"}
            className="w-full h-auto object-cover rounded-md"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </Suspense>
      </motion.div>

      {/* Text Content */}
      <motion.div
        variants={fadeInUp}
        className="flex-1 flex flex-col gap-6 text-center lg:text-left"
      >
        {/* Small Heading with Blue Gradient */}
        <div className="flex gap-3 items-center justify-center lg:justify-start text-[#1E1FBF] font-semibold tracking-wide">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "1.5rem" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="h-0.5 bg-gradient-to-r from-[#1E1FBF] via-[#3c50e0] to-[#1E1FBF] rounded-full"
          />
          <h3 className="text-sm md:text-base uppercase">{heading}</h3>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-[48px] lg:leading-[56px] font-bold text-zinc-900">
          {title}
        </h1>

        <p className="text-zinc-600 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
          {subtitle}
        </p>

        <Button
          className="mt-4 self-center lg:self-start px-6 py-6 bg-[#1E1FBF] hover:bg-[#141594] text-white transition"
          onClick={() => router.push("/get-estimate")}
        >
          {buttonText}
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default EstimateSection;
