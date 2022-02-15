import React, { useEffect } from "react";
import { Draggable } from "react-beautiful-dnd";
import IngredientsList from "./ingredients_list";
import { useState } from "react";
import DisplayImgPreview from "./image";
import axios from "axios";

function StepCard({ step, order }) {
  // const handleImageDelete = () => {
  //   const imageDeleteHash = step.imagedelete;

  //   let FormData = require("form-data");
  //   const data = new FormData();
  //   // let url = URL.createObjectURL(selectedImage);
  //   const config = {
  //     headers: {
  //       Authorization: "Client-ID 15bebad96249efe",
  //     },
  //   };

  //   axios
  //     .delete(`https://api.imgur.com/3/image/${imageDeleteHash}`, data, config)
  //     .then(function (response) {
  //       console.log(JSON.stringify(response.data));
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });

  //   resetImageInfo(step);
  // };

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
