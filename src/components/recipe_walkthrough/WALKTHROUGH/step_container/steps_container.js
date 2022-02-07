import React from "react";
import StepContainer from "./step";

function StepsContainer({ steps, currentStep, stepNum, setCurrentStepNum }) {
  const stepDisplay = steps.map((displayStep, index) => {
    let num = index + 1;
    console.log(num);
    console.log(displayStep);

    return (
      <StepContainer
        key={index}
        num={num}
        stepNum={stepNum}
        step={displayStep}
        setCurrentStepNum={setCurrentStepNum}
      />
    );
  });

  return <div>{stepDisplay}</div>;
}

export default StepsContainer;
