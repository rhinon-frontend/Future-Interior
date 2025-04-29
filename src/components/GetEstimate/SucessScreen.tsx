import React from "react";

type SuccessScreenProps = {
  onRestart: () => void;
  onBack: () => void;
};

function SuccessScreen({ onRestart, onBack }: SuccessScreenProps) {
  return (
    <section>
      <div className="text-center p-8 space-y-4">
        <h2 className="text-2xl font-bold text-green-600">
          🎉 Estimate Submitted!
        </h2>
        <p className="text-zinc-700">
          Thank you! We’ve received your request.
        </p>
        <p className="text-zinc-500">
          Our design team will reach out to you shortly.
        </p>
        <button
          onClick={onRestart}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Start a New Estimate
        </button>
      </div>
    </section>
  );
}

export default SuccessScreen;
