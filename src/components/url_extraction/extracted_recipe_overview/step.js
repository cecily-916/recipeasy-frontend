import React from "react";
// include functionality to cross off step when it's completed
function Step({ step }) {
  console.log(step);
  const renderDetails = () => {
    let details = step;

    const parsedStepText = details
      .replace(/([.?!])\s*(?=[A-Z])/g, "$1|")
      .split("|");

    const stepText = parsedStepText.map((sentence, index) => {
      return (
        <li key={index}>
          {sentence}
          <br />
          <br />
        </li>
      );
    });
    return stepText;
  };

  return (
    <div>
      {/* <Link to={`recipe/${props.recipe.ID}`} state={props.recipe}> */}
      <p>{renderDetails()}</p>
      {/* </Link> */}
    </div>
  );
}
export default Step;
