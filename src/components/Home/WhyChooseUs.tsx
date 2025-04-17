import { WhyChooseData } from "@/utils";
import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-5 flex flex-col gap-12">
      {/* Section Heading */}
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-800 text-center uppercase">
          Why Choose Us?
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-zinc-600 to-transparent rounded-full" />
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-16">
        {WhyChooseData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center text-center gap-6 px-4"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={120}
              height={120}
              className="object-contain"
            />
            <h3 className="text-lg font-medium text-zinc-700">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
