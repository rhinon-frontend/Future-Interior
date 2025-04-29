"use client";

import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import { webpImages } from "@/utils/media";
import { HeaderData } from "@/utils";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import {
  LazyMotion,
  domAnimation,
  m,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";

const Header = () => {
  const router = useRouter();
  const { title, subtitle, buttonText, altText } = HeaderData;

  const [isMounted, setIsMounted] = useState(false);
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <header className="relative w-full h-[85vh] overflow-hidden flex items-center justify-center px-6 md:px-12 bg-[#f6f1eb]">
      <LazyMotion features={domAnimation}>
        {/* Background Image */}
        <m.div style={{ scale }} className="absolute inset-0 z-0">
          <Image
            src={webpImages.blue}
            alt={altText}
            fill
            priority
            placeholder="blur"
            blurDataURL="/blur-placeholder.png"
            sizes="100vw"
            className="object-cover"
            loading="eager"
          />
        </m.div>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-0" />

        {/* Foreground content */}
        <m.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full max-w-6xl mx-auto text-center flex flex-col items-center justify-center gap-6"
        >
          <h1 className="text-4xl md:text-7xl lg:text-8xl text-white leading-tight tracking-tight drop-shadow-md max-w-4xl">
            {title}
          </h1>

          <p className="text-base text-white max-w-2xl leading-[26px]">
            {subtitle}
          </p>

          <Button
            onClick={() => router.push("/get-estimate")}
            className="group mt-6 flex items-center gap-2 rounded-full bg-[#1E1FBF] text-white px-6 py-6 text-sm transition-all hover:bg-[#141594] hover:scale-105"
          >
            {buttonText}
            <MoveUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Button>
        </m.div>
      </LazyMotion>
    </header>
  );
};

export default Header;
