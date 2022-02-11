import React from "react";
// include functionality to cross off step when it's completed
function Step(props) {
  return (
    <div>
      {/* <Link to={`recipe/${props.recipe.ID}`} state={props.recipe}> */}
      <p>
        <p className="text-emerald-800 text-lg font-bold inline">
          {props.index}
        </p>
        &ensp;
        {props.step.details}
      </p>
      {/* </Link> */}
    </div>
  );
}
export default Step;
