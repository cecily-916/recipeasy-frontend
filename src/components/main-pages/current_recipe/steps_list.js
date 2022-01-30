import React from "react";
import Step from "./step";

function StepsList(props) {
  const steps = props.steps.map((step) => {
    return (
      <ol>
        <Step step={step} />
      </ol>
    );
  });

  return <h2>Steps: {steps}</h2>;
}

export default StepsList;
