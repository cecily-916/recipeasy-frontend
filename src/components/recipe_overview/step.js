import React from "react";
// include functionality to cross off step when it's completed
function Step(props) {
  return (
    <div>
      {/* <Link to={`recipe/${props.recipe.ID}`} state={props.recipe}> */}
      <p>
        <p className="text-emerald-800 text-xl font-bold inline">
          {props.index}
        </p>
        &ensp;
        {props.step.details}
        <br />
        {props.step.extradetails}
      </p>
      {/* </Link> */}
    </div>
  );
}
export default Step;
