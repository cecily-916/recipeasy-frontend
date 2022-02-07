import React from "react";
import Step from "./step";

function StepsContainer({ currentStep, recipe, setCurrentStepNum }) {
  const steps = recipe.steps;

  const stepDisplay = steps.map((displayStep, index) => {
    let num = index + 1;

    return (
      <Step
        key={index}
        recipe={recipe}
        num={num}
        step={displayStep}
        setCurrentStepNum={setCurrentStepNum}
      />
    );
  });

  return (
    <div className="scroll-smooth snap-proximity snap-y">{stepDisplay}</div>
  );
}

export default StepsContainer;
