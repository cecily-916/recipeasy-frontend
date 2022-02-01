import React from "react";

function StepDescription(props) {
  return (
    <div>
      <h3 className="text-xl font-bold">{props.step.details}</h3>
      {/* <h4>{props.step.completed}</h4> */}
    </div>
  );
}

export default StepDescription;
