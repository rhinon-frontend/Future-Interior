"use client";

import BrandPartners from "@/components/Home/BrandPartners";
import DesignGallery from "@/components/Home/DesignGallery";
import FreeEstimate from "@/components/Home/FreeEstimate";
import FrequentlyAsk from "@/components/Home/FrequentlyAsk";
import Header from "@/components/Home/Header";
import Process from "@/components/Home/Process";
import Testimonials from "@/components/Home/Testimonials";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import LoadingSpinner from "@/components/spinner/LoadingSpinner";
import { useLoading } from "@/context/LoadingProvider";
import React from "react";

export default function HomePage() {
  const { isLoading } = useLoading(); // Get the loading state from context

  if (isLoading) {
    return <LoadingSpinner />; // Show the loading spinner while the page is loading
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen overflow-x-hidden gap-20 animate-fade-in">
      <Header />
      <WhyChooseUs />
      <FreeEstimate />
      <DesignGallery />
      <Testimonials />
      <BrandPartners />
      <Process />
      <FrequentlyAsk />
    </main>
  );
}
