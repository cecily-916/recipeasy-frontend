import React from "react";
import Step from "./step";

function StepsContainer({ currentStep, recipe, setCurrentStepNum, sideBar }) {
  const steps = recipe.steps;

  const stepDisplay = steps.map((displayStep, index) => {
    let num = index + 1;
    let bg = "white";
    if (num % 2 === 0) {
      bg = "grey";
    }
    let isLast;
    if (num === recipe.steps.length) {
      isLast = true;
    } else {
      isLast = false;
    }

    let isFirst;
    if (num === 1) {
      isFirst = true;
    } else {
      isFirst = false;
    }

    return (
      <Step
        key={index}
        recipe={recipe}
        num={num}
        step={displayStep}
        setCurrentStepNum={setCurrentStepNum}
        bg={bg}
        sideBar={sideBar}
        isLast={isLast}
        isFirst={isFirst}
      />
    );
  });

  return (
    <div className="scroll-smooth snap-proximity snap-y">{stepDisplay}</div>
  );
}

export default StepsContainer;
