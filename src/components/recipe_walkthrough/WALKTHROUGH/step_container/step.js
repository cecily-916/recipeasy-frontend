import React from "react";
import StepIngredients from "./step_ingredients";
import { HashLink as Link } from "react-router-hash-link";

function Step({ num, step, recipe, setCurrentStepNum }) {
  console.log(num);

  const renderDetails = () => {
    let details = step.details;

    const parsedStepText = details
      .replace(/([.?!])\s*(?=[A-Z])/g, "$1|")
      .split("|");

    console.log(parsedStepText);

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

  const nextStepNum = num + 1;
  let link = `.#${nextStepNum}`;
  console.log(recipe);
  return (
    <div className="bg-white p-8">
      <div id={num} className="p-9 bg-[#b3b5b8b0] rounded-md shadow-xl">
        <h1>Step {num}</h1>
        <br />
        {renderDetails()}
        <StepIngredients ingredients={step.ingredients} />
        <Link
          className="inline-block
        py-2
        px-7
        border border-[#E5E7EB]
        rounded-md 
        text-base text-body-color 
        font-medium 
        shadow-sm 
        m-3 
        p-3 
        bg-emerald-800 text-white"
          to={link}
          onClick={() => {
            setCurrentStepNum(nextStepNum);
          }}
          state={recipe}
        >
          Done!
        </Link>
      </div>
    </div>
  );
}

export default Step;
