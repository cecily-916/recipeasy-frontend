import React from "react";
import Step from "./step";

function StepsList(props) {
  if (props.steps) {
    const steps = props.steps.map((step) => {
      return (
        <ol>
          <Step step={step} />
        </ol>
      );
    });

    return (
      <div>
        <h4>Steps:</h4>
        {steps}
      </div>
    );
  }
  return null;
}

export default StepsList;
