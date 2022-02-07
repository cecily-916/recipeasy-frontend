import React from "react";
import { HashLink as Link } from "react-router-hash-link";

//display and mark off each step when completed
// this document is just the container

function SidebarChecklist({ recipe, stepNum, setCurrentStepNum }) {
  console.log(stepNum);
  const stepList = recipe.steps.map((step, num) => {
    num += 1;
    if (num === stepNum) {
      return (
        <div key={num}>
          <p className="text-xl font-extrabold text-emerald-900">Step {num}</p>
        </div>
      );
    } else {
      return (
        <div key={num}>
          <Link
            to={`.#${num}`}
            onClick={() => {
              setCurrentStepNum(num);
            }}
            state={recipe}
          >
            Step {num}
          </Link>
        </div>
      );
    }
  });

  return (
    <div>
      <h1>{recipe.title}</h1>
      {/* <br />
      <img
        className="rounded-sm max-h-60 max-w-40 content-center"
        src={recipe.image}
        alt=""
      /> */}
      <br />
      <h2>{recipe.description}</h2>
      <p>
        Rating: {recipe.rating} Prep Time: {recipe.prepTime} Cook Time:{" "}
        {recipe.cookTime} Servings: {recipe.servings}
      </p>
      <br />
      <p className="text-lg font-bold">Steps:</p>
      {stepList}
    </div>
  );
}

export default SidebarChecklist;
