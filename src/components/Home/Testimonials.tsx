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
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Testimonials = () => {
  return (
    <section className="w-full bg-[#eee5dc] py-24">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      className="space-y-4 text-center mx-auto px-4 flex flex-col items-center gap-10 text-white">
        {/* Section Header */}
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-bold uppercase text-black">
            Loved by 100+ Homeowners
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-black to-transparent mx-auto rounded-full" />
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
                        <p className="text-lg leading-[31px] text-left mx-auto">
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
      </motion.div>
    </section>
  );
};

export default Testimonials;
