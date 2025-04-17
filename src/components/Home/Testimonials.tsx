"use client";

import { testimonials } from "@/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <section className="w-full bg-[#49543e] py-24">
      <div className="mx-auto px-4 flex flex-col items-center gap-10 text-white">
        {/* Section Header */}
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-bold uppercase text-white">
            Loved by 100+ Homeowners
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-white to-transparent mx-auto rounded-full" />
          <p className="text-lg text-gray-200 max-w-xl mx-auto">
            What our clients say about us
          </p>
        </div>

        {/* Carousel */}
        <Carousel opts={{ align: "start" }} className="w-full max-w-7xl">
          <div className="overflow-hidden group relative">
            <CarouselContent className="flex animate-loop-scroll group-hover:[animation-play-state:paused]">
              {testimonials.concat(testimonials).map((item, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full">
                      <CardContent className="p-8 space-y-4 h-full flex flex-col justify-between text-gray-800 bg-white rounded-lg shadow-lg">
                        <p className="text-lg leading-[31px]">
                          &ldquo;{item.quote}&rdquo;
                        </p>
                        <div className="flex items-center gap-4 mt-4">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={48}
                            height={48}
                            className="rounded-full object-cover aspect-square"
                          />
                          <div>
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-sm text-gray-500">{item.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
