"use client";

import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { designGallery } from "@/utils";
import Image from "next/image";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const DesignGallery = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-14 flex flex-col gap-16">
      {/* Section Heading */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-4 text-center"
      >
        <h2 className="text-4xl font-bold uppercase text-black">
          Design Gallery
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-[#1E1FBF] to-transparent mx-auto rounded-full" />
        <p className="text-lg text-gray-800 max-w-xl mx-auto">
          Explore our stunning design gallery showcasing a variety of styles,
          colors, and finishes. From modern to traditional, find inspiration for
          your next project.
        </p>
      </motion.div>

      {/* Carousel - Custom Framer Motion Drag */}
      <motion.div
        className="overflow-hidden cursor-grab"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }} // Adjust this based on total width
          className="flex space-x-4 px-4 md:px-8"
        >
          {designGallery.map((item) => (
            <motion.div
              key={item.id}
              className="flex-none w-3/4 sm:w-1/2 lg:w-1/3 px-2"
            >
              <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 ease-in-out">
                <Card className="relative border-none shadow-md transition-shadow duration-300 hover:shadow-xl">
                  <CardContent className="p-0">
                    <Suspense
                      fallback={
                        <div className="w-full aspect-square bg-gray-200 animate-pulse rounded-xl" />
                      }
                    >
                      <Image
                        src={item.image}
                        alt={item.description}
                        width={500}
                        height={500}
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="/placeholder.png"
                        className="w-full h-full object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </Suspense>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-center rounded-xl">
                      <p className="text-white text-sm md:text-base font-medium">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DesignGallery;
