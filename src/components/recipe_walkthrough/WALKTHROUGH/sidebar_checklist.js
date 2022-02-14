import React from "react";
import { HashLink as Link } from "react-router-hash-link";

//display and mark off each step when completed
// this document is just the container

function SidebarChecklist({ recipe, stepNum, setCurrentStepNum }) {
  console.log(stepNum);

  const handleNext = (nextStepNum) => {
    document
      .getElementById(`${nextStepNum}`)
      .scrollIntoView({ behavior: "smooth" });
    setCurrentStepNum(nextStepNum);
  };

  const stepList = recipe.steps.map((step, num) => {
    num += 1;
    if (num === stepNum) {
      return (
        <div key={num}>
          <p className="text-2xl font-extrabold text-emerald-900">Step {num}</p>
        </div>
      );
    } else {
      return (
        <div key={num}>
          <button
            onClick={() => {
              handleNext(num);
            }}
          >
            Step {num}
          </button>
        </div>
      );
    }
  });

  return (
    <div className="bg-white m-4">
      <Link
        className="hover:text-emerald-900"
        to={`/recipe/${recipe.ID}`}
        state={recipe}
      >
        <h1 className="drop-shadow-md rounded-xl w-full">{recipe.title}</h1>
      </Link>

      {/* <br />
      <img
        className="rounded-sm max-h-60 max-w-40 content-center"
        src={recipe.image}
        alt=""
      /> */}
      <br />
      <div className=""> {stepList} </div>
    </div>
  );
}

export default SidebarChecklist;
