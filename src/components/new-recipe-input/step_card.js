import React, { useEffect } from "react";
import { Draggable } from "react-beautiful-dnd";
import IngredientsList from "./ingredients_list";
import { useState } from "react";
import DisplayImgPreview from "./image";

function StepCard({ step, order }) {
  // const [image, setImage] = useState(false);

  // useEffect(() => {
  //   if (step.image !== "") {
  //     setImage(true);
  //   }
  // }, [step.image]);

  console.log(step.image);
  return (
    <div className="bg-amber-100 rounded-md p-4 drop-shadow-sm">
      <p className="text-emerald-900 text-2xl font-bold">Step {order}</p>
      <br />
      <DisplayImgPreview image={step.image} />
      <p>{step.details}</p>
      <br />
      <IngredientsList ingredients={step.ingredients} />
    </div>
  );
}

export default StepCard;
