// Individual recipe component that displays the name of the recipe,
// an image(?), rating, note icon, servings, num of ingredients, time
import { Link } from "react-router-dom";
import Rating from "./rating";

const Recipe = (props) => {
  return (
    <div class="bg-white rounded-lg overflow-hidden mx-auto m-4 max-w-xs shadow-lg">
      <img src={props.recipe.image} alt="dish" class="w-auto h-fit" />
      <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
        <h3
          class="
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
        <p class="text-base text-body-color leading-relaxed mb-7">
          {props.recipe.description}
          <Rating rating={props.recipe.rating} />
        </p>
        <Link
          to={`recipe/${props.recipe.ID}`}
          state={props.recipe}
          class="
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
