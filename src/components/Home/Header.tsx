import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { webpImages } from "@/utils/media";
import { HeaderData } from "@/utils";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="w-screen h-screen overflow-hidden">
      <Image
        src={webpImages.heroImage}
        alt={HeaderData.altText}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="absolute inset-0 flex flex-col items-center justify-center  text-white px-4 text-center z-20 gap-6">
        <h1 className="text-4xl md:text-7xl leading-tight">
          {HeaderData.title}
        </h1>
        <p className="text-base md:text-lg max-w-4xl">{HeaderData.subtitle}</p>
        <Button className="flex items-center gap-2 rounded-full bg-transparent bg-white text-black px-6 py-5 hover:bg-gray-200 transition duration-300 ease-in-out">
          {HeaderData.buttonText}
        
        </Button>
      </div>
    </header>
  );
};

export default Header;
