import React, { useState, useEffect } from "react";
import StepIngredients from "./step_ingredients";
import { HashLink as Link } from "react-router-hash-link";
import { InView, useInView } from "react-intersection-observer";
import Speech from "./speech_recognition";
import Confetti from "react-dom-confetti";

function Step({
  num,
  step,
  recipe,
  setCurrentStepNum,
  bg,
  sideBar,
  isLast,
  isFirst,
  setSideBar,
  setConversionPopup,
  currentStep,
  isListening,
  setIsListening,
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
    let details = step.extradetails;

    const parsedStepText = details
      .replace(/([.?!])\s*(?=[A-Z])/g, "$1|")
      .split("|");

    const stepText = parsedStepText.map((sentence, index) => {
      return (
        <ul key={index} className="text-xl">
          <p className="text-xl font-quicksand">{sentence}</p>
        </ul>
      );
    });

    return stepText;
  };
  console.log(bg);
  console.log(step.ingredients);
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

  const config = {
    angle: "11",
    spread: 360,
    startVelocity: "25",
    elementCount: 70,
    dragFriction: 0.12,
    duration: "3590",
    stagger: "8",
    width: "10px",
    height: "37px",
    perspective: "761px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    setConfetti(false);
  }, [confetti]);

  const withoutSideBar = () => {
    return !sideBar ? (
      <div>
        <Confetti active={confetti} config={config} />

        <p className="absolute bottom-5 right-5 text-slate-400">
          {num} / {recipe.steps.length}
        </p>
        <div>
          {/* <button
            className="
            text-center
            absolute top-8 right-96
            border border-[#E5E7EB]
            rounded-md 
            text-base text-body-color 
            font-medium 
            shadow-sm 
            m-3 
            cursor-pointer
            p-3
            text-emerald-800 hover:text-white hover:bg-emerald-800"
            onClick={() => {
              setSideBar(true);
              setConversionPopup(true);
            }}
          >
            <span class="text-4xl material-icons-outlined">sync_alt</span>
            <br />
            <p className="text-sm ">conversions</p>
          </button> */}
          <button
            className="
          absolute top-8 right-80
          border border-[#E5E7EB]
          rounded-md 
          text-base text-body-color 
          font-medium 
          shadow-sm 
          m-3 
          cursor-pointer
          p-3
          text-emerald-800 hover:text-white hover:bg-emerald-800"
          >
            <Speech
              setSideBar={setSideBar}
              setConversionPopup={setConversionPopup}
              sideBar={sideBar}
              currentStep={currentStep}
              setCurrentStepNum={setCurrentStepNum}
              isListening={isListening}
              setIsListening={setIsListening}
            />
          </button>
          <button
            className="
            absolute top-8 right-40
            border border-[#E5E7EB]
            rounded-md 
            text-base text-body-color 
            font-medium 
            shadow-sm 
            m-3 
            cursor-pointer
            p-3
            text-emerald-800 hover:text-white hover:bg-emerald-800"
            onClick={() => setSideBar(true)}
          >
            <span className="text-4xl material-icons-outlined">
              close_fullscreen
            </span>
            <br />
            <p className="text-sm">
              close fullscreen
              {/* <br />
              Fullscreen */}
            </p>
          </button>

          {isFirst ? (
            ""
          ) : (
            <button
              className="
            absolute
            top-8 right-8
            py-2
            border border-[#E5E7EB]
            rounded-md 
            text-base text-body-color 
            font-medium 
            shadow-sm 
            m-3 
            cursor-pointer
            p-3 
            text-emerald-800 hover:text-white hover:bg-emerald-800"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <span className="material-icons-outlined text-4xl">
                keyboard_double_arrow_up
              </span>
              <p className="text-sm">scroll to top</p>
            </button>
          )}
        </div>
      </div>
    ) : (
      ""
    );
  };

  return (
    <div
      className="bg-orange-50 overflow-auto snap-center border-b-4 gap-y-1 rounded-md relative"
      inView={inView}
      ref={ref}
      // onChange={setCurrentStepNum(num)}
    >
      <div
        id={num}
        className=" p-9 bg-{bg} relative rounded-md shadow-2xl h-screen  w-full"
      >
        <h1 className="text-emerald-900">{num}&nbsp;&nbsp;</h1>
        <br />
        {step.image ? (
          <img
            className="rounded-md ml-24 -mt-20 max-h-60 mx- max-w-fit drop-shadow-md "
            src={step.image}
            alt="stepimage"
          />
        ) : (
          ""
        )}
        <br />
        <div className="pl-20">
          <p className="font-quicksand text-2xl text-emerald-900">
            {step.details}
            <br />
          </p>

          {renderDetails()}
          <br />
          <StepIngredients ingredients={step.ingredients} />
          <Confetti active={confetti} config={config} />
        </div>

        {withoutSideBar()}

        {isLast ? (
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
              setConfetti(true);
            }}
          >
            <span className="material-icons-outlined text-6xl">
              check_circle
            </span>
          </button>
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
            <span className="material-icons-outlined text-6xl">
              expand_more
            </span>
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
              <span className="material-icons-outlined text-6xl ">
                expand_less
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Step;
