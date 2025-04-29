"use client";

import CustomStepper from "@/components/GetEstimate/CustomStepper";
import { Step2 } from "@/components/GetEstimate/Step2";
import { StepFour } from "@/components/GetEstimate/StepFour";
import StepOne from "@/components/GetEstimate/StepOne";
import StepThree from "@/components/GetEstimate/StepThree";
import SuccessScreen from "@/components/GetEstimate/SucessScreen";
import { stepper } from "@/utils";
import { useState } from "react";

export default function EstimatePage() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const onRestart = () => setStep(1);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 py-10 px-4">
      {/* Stepper */}
      <div className="w-full max-w-5xl">
        <CustomStepper steps={stepper} currentStep={step} />
      </div>

      {/* Step Components */}
      <div className="w-full max-w-2xl mt-10 bg-white p-8 rounded-2xl shadow-lg">
        {step === 1 && <StepOne onNext={nextStep} />}
        {step === 2 && <Step2 onNext={nextStep} onBack={prevStep} />}
        {step === 3 && <StepThree onNext={nextStep} onBack={prevStep} />}
        {step === 4 && <StepFour onNext={nextStep} onBack={prevStep} />}
        {step === 5 && (
          <SuccessScreen
            onBack={prevStep}
            onRestart={onRestart}
          />
        )}
      </div>
    </div>
  );
}
