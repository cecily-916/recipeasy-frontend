import React from "react";
import StepDescription from "./step_description";
import StepIngredients from "./step_ingredients";

function StepContainer({ step, changeStep }) {
  console.log(step);

  return (
    <div>
      <StepDescription step={step} />
      <StepIngredients ingredients={step.ingredients} />
      <button
        class="bg-cyan-500 hover:bg-cyan-600"
        onClick={() => {
          changeStep();
        }}
      >
        Next Step
      </button>
    </div>
  );
}

export default StepContainer;