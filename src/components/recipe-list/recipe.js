// Individual recipe component that displays the name of the recipe,
// an image(?), rating, note icon, servings, num of ingredients, time

const Recipe = (props) => {
  console.log(props.recipe);
  return (
    <div>
      <p>
        {props.recipe.id}. {props.recipe.title}
      </p>
    </div>
  );
};

export default Recipe;
