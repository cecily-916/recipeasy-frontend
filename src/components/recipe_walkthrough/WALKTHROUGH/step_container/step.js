import React, { useState, useEffect } from "react";
import StepIngredients from "./step_ingredients";
import { HashLink as Link } from "react-router-hash-link";
import { InView, useInView } from "react-intersection-observer";

function Step({ num, step, recipe, setCurrentStepNum, bg }) {
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
        <ul key={index} className="text-xl">
          {sentence}
          <br />
          <br />
        </ul>
      );
    });

    return stepText;
  };
  console.log(bg);
  const nextStepNum = num + 1;
  const handleNext = () => {
    document
      .getElementById(`${nextStepNum}`)
      .scrollIntoView({ behavior: "smooth" });
    setCurrentStepNum(nextStepNum);
  };
  return (
    <div
      className="bg-orange-50 snap-center border-b-4 gap-y-1 rounded-md relative"
      inView={inView}
      ref={ref}
      // onChange={setCurrentStepNum(num)}
    >
      <div
        id={num}
        className=" p-9 bg-{bg} rounded-md shadow-2xl h-screen  w-full"
      >
        <h1 className="text-emerald-900">
          {num}
          {step.description}
        </h1>
        <br />
        <img
          className="float-right rounded-md max-h-60 max-w-fit content-center drop-shadow-md "
          src={step.image}
          alt="stepimage"
        />
        <br />
        {renderDetails()}
        <StepIngredients ingredients={step.ingredients} />
        <button
          className="
        py-2
        border border-[#E5E7EB]
        rounded-md 
        text-base text-body-color 
        font-medium 
        shadow-sm 
        m-3 
        cursor-pointer
        p-3 
        float-right
        absolute bottom-8 right-8
        bg-emerald-800 text-white"
          onClick={() => {
            handleNext();
          }}
        >
          next step
        </button>
      </div>
    </div>
  );
}

export default Step;
