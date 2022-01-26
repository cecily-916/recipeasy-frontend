// Individual recipe component that displays the name of the recipe,
// an image(?), rating, note icon, servings, num of ingredients, time

const Recipe = (props) => {
  return <div>{props.recipe.title}</div>;
};

export default Recipe;
