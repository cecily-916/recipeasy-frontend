import React from "react";
import Step from "./step";

function StepsList(props) {
  if (props.steps) {
    const steps = props.steps.map((step) => {
      return (
        <ul key={step.ID}>
          <Step step={step} />
        </ul>
      );
    });

    return <div>{steps}</div>;
  }
  return null;
}

export default StepsList;
