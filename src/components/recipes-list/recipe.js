// Individual recipe component that displays the name of the recipe,
// an image(?), rating, note icon, servings, num of ingredients, time
import { Link } from "react-router-dom";
import Rating from "./rating";
import React from "react";

const Recipe = (props) => {
  return (
    <Link
      to={`/recipe/${props.recipe.ID}`}
      state={props.recipe}
      className="link"
    >
      <div className="bg-white hover:drop-shadow-xl  align-middle truncate-ellipses rounded-xl h-80 w-60 overflow-hidden mx-auto m-4 shadow-lg  transition hover:-translate-y-0.5 ease-in-out hover:scale-105 duration-150 border-opacity-100">
        {props.recipe.image ? (
          <div className="bg-gradient-to-b from-slate-900 ">
            <img
              src={props.recipe.image}
              alt="dish"
              className="w-3xl border-b-4 mx-auto max-h-48 rounded-xl shadow-md "
            />
          </div>
        ) : (
          ""
        )}
        <div className="p-4 pb-2 text-center">
          <h3
            className="
              font-semibold
              text-dark text-xl
              sm:text-[22px]
              md:text-xl
              lg:text-[22px]
              xl:text-xl
              font-quicksand 
              2xl:text-[22px]
              mb-2
              block
              hover:text-primary
              "
          >
            {props.recipe.title}
          </h3>
          <div className="text-base text-body-color leading-relaxed mb-2">
            Servings: {props.recipe.servings}
            <br />
            Time: {props.recipe.cookTime}
            {/* <Rating rating={props.recipe.rating} /> */}
          </div>

          {/* className="
        inline-block
        py-2
        px-7
        border border-[#E5E7EB]
        rounded-full
        text-base text-body-color
        font-medium
        hover:border-primary hover:bg-emerald-800
        hover:text-white
        transition
        "
        >
          Go To Recipe */}
        </div>
      </div>
    </Link>
  );
};

export default Recipe;
