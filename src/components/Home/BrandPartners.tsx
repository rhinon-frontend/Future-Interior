"use client";

import React from "react";
import { motion } from "framer-motion";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const BrandPartners = () => {
  const logos = [
    {
      alt: "Transistor",
      src: "https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg",
    },
    {
      alt: "Reform",
      src: "https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg",
    },
    {
      alt: "Tuple",
      src: "https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg",
    },
    {
      alt: "SavvyCal",
      src: "https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg",
    },
    {
      alt: "Statamic",
      src: "https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg",
    },
  ];

  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-0">
        {/* Header with animation */}
        <motion.div
          className="space-y-4 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold uppercase text-zinc-800">
            Channel Partners
          </h2>
          <p className="text-base sm:text-lg font-medium text-gray-700">
            Trusted by the world’s most innovative teams
          </p>
          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-zinc-600 to-transparent rounded-full" />
        </motion.div>

        {/* Logos Grid with staggered animation */}
        <div className="mx-auto mt-12 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {logos.map((logo, index) => (
            <motion.img
              key={logo.alt}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              alt={logo.alt}
              src={logo.src}
              width={158}
              height={48}
              className={`col-span-2 max-h-12 w-full object-contain ${
                index === 3 ? "sm:col-start-2" : ""
              } ${index === 4 ? "col-start-2 sm:col-start-auto" : ""} lg:col-span-1`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandPartners;
