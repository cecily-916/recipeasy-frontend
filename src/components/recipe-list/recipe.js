// Individual recipe component that displays the name of the recipe,
// an image(?), rating, note icon, servings, num of ingredients, time
import { Link } from "react-router-dom";

const Recipe = (props) => {
  console.log(props.currentRecipe);
  return (
    <div>
      <Link to="/recipe" state={props.currentRecipe}>
        {props.recipe.title}
      </Link>
    </div>
  );
};

export default Recipe;
