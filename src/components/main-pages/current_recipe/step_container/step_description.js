import React from "react";

function StepDescription(props) {
  return (
    <div>
      <h3>Current Step: {props.step.details}</h3>
      {/* <h4>{props.step.completed}</h4> */}
    </div>
  );
}

export default StepDescription;
