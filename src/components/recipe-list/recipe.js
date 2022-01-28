// Individual recipe component that displays the name of the recipe,
// an image(?), rating, note icon, servings, num of ingredients, time
import { Link } from "react-router-dom";

const Recipe = (props) => {
  return (
    <div>
      <Link to={`recipe/${props.recipe.ID}`} state={props.recipe}>
        {props.recipe.ID}. {props.recipe.title}
      </Link>
    </div>
  );
};

export default Recipe;
