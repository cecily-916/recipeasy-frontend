import React from "react";
import Step from "../overview_container/step";

function StepsList(props) {
  if (props.steps) {
    const steps = props.steps.map((step) => {
      return (
        <ul>
          <Step step={step} />
        </ul>
      );
    });

    return <div>{steps}</div>;
  }
  return null;
}

export default StepsList;
