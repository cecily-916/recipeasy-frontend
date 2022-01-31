// Individual recipe component that displays the name of the recipe,
// an image(?), rating, note icon, servings, num of ingredients, time
import { Link } from "react-router-dom";
import Rating from "./rating";

const Recipe = (props) => {
  return (
    <div>
      <Link to={`recipe/${props.recipe.ID}`} state={props.recipe}>
        <h5>
          {props.recipe.ID}. {props.recipe.title}
        </h5>
        <Rating rating={props.recipe.rating} />
      </Link>
    </div>
  );
};

export default Recipe;
