"use client";

import React, { useState } from "react";
import StepOne from "./StepOne";
import Step2 from "./Step2";
import StepThree from "./StepThree";
import { StepFour } from "./StepFour";
import CustomStepper from "./CustomStepper";
import { stepper, steps } from "@/utils";

type FormData = {
  bhk: string;
  location: string;
  fullName: string;
  phoneNumber: string;
  floorPlan?: File | null;
  preferences?: string[];
  email: string;
  password: string;
};

const Estimate = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    bhk: "",
    location: "",
    fullName: "",
    phoneNumber: "",
    floorPlan: null,
    preferences: [],
    email: "",
    password: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const updateData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <section
      className="w-full max-w-7xl h-screen mx-auto px-4 sm:px-6 lg:px-0 py-24 mt-8 flex flex-col gap-12"
      id="get-estimate"
    >
    
      <CustomStepper steps={stepper} currentStep={step} />
      <div className="flex flex-col max-w-xl mx-auto md:flex-row gap-6 p-12 bg-muted w-full rounded-lg justify-between">
        <div className="w-full">
          {step === 1 && (
            <StepOne
              nextStep={nextStep}
              updateData={updateData}
              data={formData}
            />
          )}
          {step === 2 && (
            <Step2
              data={formData}
              nextStep={nextStep}
              prevStep={prevStep}
              updateData={updateData}
            />
          )}

          {step === 3 && (
            <StepThree
              data={formData}
              nextStep={nextStep}
              prevStep={prevStep}
              updateData={updateData}
            />
          )}
          {step === 4 && (
            <StepFour
              data={formData}
              nextStep={nextStep}
              prevStep={prevStep}
              updateData={updateData}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Estimate;
