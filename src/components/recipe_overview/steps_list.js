import React from "react";
import Step from "./step";

function StepsList(props) {
  if (props.steps) {
    const steps = props.steps.map((step, index) => {
      return (
        <div key={index + 1}>
          <br />
          <ul>
            <Step step={step} index={index + 1} />
          </ul>
        </div>
      );
    });

    return <div>{steps}</div>;
  }
  return null;
}

export default StepsList;
