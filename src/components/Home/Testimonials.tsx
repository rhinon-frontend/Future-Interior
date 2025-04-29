"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/utils";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const TestimonialCard = memo(({ item }: { item: (typeof testimonials)[number] }) => (
  <div className="h-full flex items-center justify-center">
    <Card className="h-full shadow-xl rounded-lg transition-all duration-300 hover:shadow-2xl">
      <CardContent className="p-8 space-y-6 flex flex-col justify-between bg-white text-gray-800 rounded-lg">
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
            loading="lazy"
            sizes="48px"
          />
          <div>
            <p className="font-semibold">{item.name}</p>
            <p className="text-sm text-gray-500">{item.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
));
TestimonialCard.displayName = "TestimonialCard";

const Testimonials = () => {
  return (
    <section className="w-full bg-[#ebf0ff] py-24">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-4 text-center mx-auto px-4 flex flex-col items-center gap-10"
      >
        {/* Section Header */}
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-bold uppercase text-black">
            Loved by 100+ Homeowners
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#1E1FBF] to-transparent mx-auto rounded-full" />
          <p className="text-lg text-black max-w-xl mx-auto">
            What our clients say about us
          </p>
        </div>

        {/* Carousel */}
        <Carousel opts={{ align: "start" }} className="w-full max-w-7xl">
          <div className="overflow-hidden group relative">
            <CarouselContent className="flex animate-loop-scroll group-hover:[animation-play-state:paused]">
              {testimonials.concat(testimonials).map((item, idx) => (
                <CarouselItem
                  key={`${item.name}-${idx}`}
                  className="md:basis-1/2 lg:basis-1/3 px-2 md:px-4"
                >
                  <TestimonialCard item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Carousel Controls */}
            {/* <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[#1E1FBF] hover:text-[#141594] transition" />
            <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#1E1FBF] hover:text-[#141594] transition" /> */}
          </div>
        </Carousel>
      </motion.div>
    </section>
  );
};

export default Testimonials;
