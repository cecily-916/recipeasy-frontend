import React from "react";
import StepDescription from "./step_description";
import StepIngredients from "./step_ingredients";

////THIS IS ACTUALLY PER STEP> NEED SEPARATE STEP CONTAINER FOR A MAP OF ALL STEPS///

function StepContainer({ num, step, stepNum, setCurrentStepNum }) {
  console.log(step);

  const renderDetails = () => {
    let details = step.details;

    const parsedStepText = details
      .replace(/([.?!])\s*(?=[A-Z])/g, "$1|")
      .split("|");

    console.log(parsedStepText);

    const stepText = parsedStepText.map((sentence, index) => {
      return (
        <li key={index}>
          {sentence}
          <br />
          <br />
        </li>
      );
    });

    return stepText;
  };

  const nextStepNum = stepNum + 1;

  return (
    <div className="bg-white p-8" id="{stepNum}">
      <div id="step" className="p-9 bg-[#b3b5b8b0] rounded-md shadow-xl">
        <h1>Step {num}</h1>
        <br />
        {renderDetails()}
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
            setCurrentStepNum({ nextStepNum });
          }}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default StepContainer;
