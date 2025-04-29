import React, { memo } from "react";

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

          // Efficiently handling className logic
          const stepCircleClass = `w-8 h-8 rounded-full flex items-center justify-center font-medium transition-colors ${
            isCompleted
              ? "bg-[#1E1FBF] text-white" // Completed steps will be logo color
              : isActive
              ? "bg-[#1E1FBF] text-white" // Active step will be logo color
              : "bg-gray-300 text-gray-500"
          }`;

          const stepTextClass = `mt-2 text-xs ${
            isCompleted ? "text-[#1E1FBF]" : "text-gray-600"
          }`;

          const stepLineClass = `flex-1 h-1 mx-2 transition-colors duration-300 ${
            isCompleted ? "bg-[#1E1FBF]" : "bg-gray-200"
          }`;

          return (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center w-24">
                <div className={stepCircleClass}>{stepNumber}</div>
                <span className={stepTextClass}>{step}</span>
              </div>

              {index !== steps.length - 1 && (
                <div className={stepLineClass} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

// Memoizing the component to prevent unnecessary re-renders
export default memo(CustomStepper);
