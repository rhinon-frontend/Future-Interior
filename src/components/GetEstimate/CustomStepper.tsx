import React from "react";

type CustomStepperProps = {
  steps: string[];
  currentStep: number; // 1-based
};

const CustomStepper = ({ steps, currentStep }: CustomStepperProps) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between w-full">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isActive = stepNumber === currentStep;

          return (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center w-24">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-medium transition-colors ${
                    isCompleted
                      ? "bg-[#b47250] text-white"
                      : isActive
                      ? "bg-[#b47250] text-white"
                      : "bg-gray-300 text-gray-500"
                  }`}
                >
                  {stepNumber}
                </div>
                <span
                  className={`mt-2 text-xs ${
                    isCompleted ? "text-[#b47250]" : "text-gray-600"
                  }`}
                >
                  {step}
                </span>
              </div>

              {index !== steps.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-2 transition-colors duration-300 ${
                    isCompleted ? "bg-[#b47250]" : "bg-gray-200"
                  }`}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default CustomStepper;
