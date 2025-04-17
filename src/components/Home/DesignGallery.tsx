import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import { designGallery } from "@/utils";
import Image from "next/image";

const DesignGallery = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-14 flex flex-col gap-16">
      {/* Section Header */}
      <div className="space-y-4 text-center">
        <h2 className="text-4xl font-bold uppercase text-black">
          Design Gallery
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-black to-transparent mx-auto rounded-full" />
        <p className="text-lg text-gray-800 max-w-xl mx-auto">
          Explore our stunning design gallery showcasing a variety of styles,
          colors, and finishes. From modern to traditional, find inspiration
          for your next project.
        </p>
      </div>

      {/* Carousel */}
      <Carousel className="w-full">
        <CarouselContent className="-ml-4"> {/* Negative margin to offset padding */}
          {designGallery.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <div className="group relative overflow-hidden rounded-xl shadow-lg">
                <Card className="relative border-none">
                  <CardContent className="p-0">
                    <Image
                      src={item.image}
                      alt={item.description}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-center rounded-xl">
                      <p className="text-white text-sm md:text-base font-medium">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Controls */}
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default DesignGallery;
