import React, { useState, useEffect } from "react";
import StepIngredients from "./step_ingredients";
import { HashLink as Link } from "react-router-hash-link";
import { InView, useInView } from "react-intersection-observer";

function Step({
  num,
  step,
  recipe,
  setCurrentStepNum,
  bg,
  sideBar,
  isLast,
  isFirst,
}) {
  const { ref, inView } = useInView({
    threshold: 1,
  });
  console.log(sideBar);
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

  const handlePrevious = () => {
    document
      .getElementById(`${nextStepNum - 2}`)
      .scrollIntoView({ behavior: "smooth" });
    setCurrentStepNum(nextStepNum - 2);
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
        {sideBar ? (
          ""
        ) : (
          <p className="absolute bottom-5 right-5 text-slate-400">
            {num} / {recipe.steps.length}
          </p>
        )}
        {isLast ? (
          ""
        ) : (
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
        text-emerald-800 hover:text-white hover:bg-amber-300"
            onClick={() => {
              handleNext();
            }}
          >
            <span class="material-icons-outlined text-8xl">expand_more</span>
          </button>
        )}

        {isFirst ? (
          ""
        ) : (
          <div>
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
            float-left
            absolute bottom-8 left-8
            text-emerald-800 hover:text-white hover:bg-emerald-800"
              onClick={() => {
                handlePrevious();
              }}
            >
              <span class="material-icons-outlined text-8xl ">expand_less</span>
            </button>
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
            float-left
            absolute bottom-8 left-48
            text-emerald-800 hover:text-white hover:bg-emerald-800"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <span class="material-icons-outlined text-8xl">
                keyboard_double_arrow_up
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Step;
