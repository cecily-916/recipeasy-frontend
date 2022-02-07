import React, { useState, useEffect } from "react";
import StepIngredients from "./step_ingredients";
import { HashLink as Link } from "react-router-hash-link";
import { InView, useInView } from "react-intersection-observer";

function Step({ num, step, recipe, setCurrentStepNum }) {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  const [onScreen, setOnScreen] = useState(false);

  useEffect(() => {
    if (inView) {
      setOnScreen(true);
      setCurrentStepNum(num);
    } else {
      setOnScreen(false);
    }
  }, [inView]);

  console.log(num, inView);
  const renderDetails = () => {
    let details = step.details;

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

  const nextStepNum = num + 1;

  return (
    <div
      className="bg-white p-8 snap-center"
      inView={inView}
      ref={ref}
      // onChange={setCurrentStepNum(num)}
    >
      <div id={num} className=" p-9 bg-[#b3b5b8b0] rounded-md shadow-xl">
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
        cursor-pointer
        p-3 
        bg-emerald-800 text-white"
          to={`.#${nextStepNum}`}
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
