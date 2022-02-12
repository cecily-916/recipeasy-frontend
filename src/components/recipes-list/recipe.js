// Individual recipe component that displays the name of the recipe,
// an image(?), rating, note icon, servings, num of ingredients, time
import { Link } from "react-router-dom";
import Rating from "./rating";
import React from "react";

const Recipe = (props) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden mx-auto m-4 max-w-xs shadow-lg">
      <img src={props.recipe.image} alt="dish" className="w-auto h-fit" />
      <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
        <h3
          className="
              font-semibold
              text-dark text-xl
              sm:text-[22px]
              md:text-xl
              lg:text-[22px]
              xl:text-xl
              2xl:text-[22px]
              mb-4
              block
              hover:text-primary
              "
        >
          {props.recipe.title}
        </h3>
        <div className="text-base text-body-color leading-relaxed mb-7">
          <Rating rating={props.recipe.rating} />
        </div>
        <Link
          to={`/recipe/${props.recipe.ID}`}
          state={props.recipe}
          className="
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
          Go To Recipe
        </Link>
      </div>
    </div>
  );
};

export default Recipe;
