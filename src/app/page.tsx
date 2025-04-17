import BrandPartners from "@/components/Home/BrandPartners";
import DesignGallery from "@/components/Home/DesignGallery";
import Footer from "@/components/Home/Footer";
import FreeEstimate from "@/components/Home/FreeEstimate";
import FrequentlyAsk from "@/components/Home/FrequentlyAsk";
import Header from "@/components/Home/Header";
import Process from "@/components/Home/Process";
import Testimonials from "@/components/Home/Testimonials";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import React from "react";

export default function page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen overflow-x-hidden gap-20">
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
