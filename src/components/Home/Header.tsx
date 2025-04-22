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
    <header className="relative w-full h-[85vh] overflow-hidden z-10 flex items-center justify-center p-[10vh] bg-[#f6f1eb]"> 
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: [0.25, 1, 0.5, 1] }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={webpImages.heroImage}
          alt={HeaderData.altText}
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Overlay Gradient */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/40 z-10"
      /> */}

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        className="relative z-20  w-full max-w-7xl mx-auto text-center flex flex-col items-center justify-center gap-2"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="text-4xl md:text-6xl font-medium text-white leading-tight tracking-tight max-w-5xl"
        >
          {HeaderData.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.4 }}
          className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl"
        >
          {HeaderData.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.8 }}
          className="mt-8"
        >
          <Button
            onClick={() => router.push("/request-quote")}
            className="group flex items-center gap-2 rounded-full bg-muted text-black px-7 py-5 text-sm transition-all duration-300 hover:bg-gray-200 hover:scale-105"
          >
            {HeaderData.buttonText}
            <MoveUpRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Button>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;
