import React from "react";
import StepDescription from "./step_description";
import StepIngredients from "./step_ingredients";

function StepContainer({ step, changeStep }) {
  console.log(step);

  return (
    <div className="bg-white p-8">
      <div className="p-9 bg-[#b3b5b8b0] rounded-md shadow-xl">
        <StepDescription step={step} />
        <StepIngredients ingredients={step.ingredients} />
        <button
          className="inline-block
          py-2
          px-7
          border border-[#E5E7EB]
          rounded-md 
          text-base text-body-color 
          font-medium 
          shadow-sm 
          m-3 
          p-3 
          bg-emerald-800 text-white"
          onClick={() => {
            changeStep();
          }}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default StepContainer;
