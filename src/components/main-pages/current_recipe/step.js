import React from "react";
// include functionality to cross off step when it's completed
function Step(props) {
  return (
    <div>
      {/* <Link to={`recipe/${props.recipe.ID}`} state={props.recipe}> */}
      {props.step.ID}. {props.step.details}
      {/* </Link> */}
    </div>
  );
}
export default Step;
