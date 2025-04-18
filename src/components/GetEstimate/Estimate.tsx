import React from "react";
import { InputForm } from "./InputForm";
import LookingFor from "./LookingFor";

const Estimate = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12 flex flex-col gap-16">
      <div className="space-y-4 text-center">
        <h2 className="text-4xl font-medium uppercase text-black">
          Get an Estimate
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-black to-transparent mx-auto rounded-full" />
      </div>
      <div className="flex">
        <InputForm />
        <LookingFor />
      </div>
    </section>
  );
};

export default Estimate;
