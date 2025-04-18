"use client";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { webpImages } from "@/utils/media";
import { HeaderData } from "@/utils";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Header = () => {
  const router = useRouter();

  return (
    <header className="w-screen h-screen overflow-hidden ">
      {/* Background Image with scale + fade animation */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={webpImages.heroImage}
          alt={HeaderData.altText}
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Overlay fade */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute inset-0 bg-black z-10"
      />

      {/* Text and button with fade + slide-up */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center z-20 gap-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-4xl md:text-7xl leading-tight"
        >
          {HeaderData.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-base md:text-lg max-w-4xl"
        >
          {HeaderData.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <Button
            onClick={() => router.push("/request-quote")}
            className="flex items-center gap-2 rounded-full bg-transparent bg-white text-black px-6 py-5 hover:bg-gray-200 transition duration-300 ease-in-out"
          >
            {HeaderData.buttonText}
            <MoveUpRight size={20} />
          </Button>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;
