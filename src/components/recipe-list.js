// Recipe list component displays all recipe items in an ordered list.
// The recipe information is displayed in either a listed grid format.
// The list has sortable columns for rating, servings, etc.

import Recipe from "./recipe";

const RecipeList = (props) => {
  console.log(props);
  // const recipeComponents = props.recipes.map((recipe) => {
  //   return (
  //     <li>
  //       <Recipe recipe={recipe}></Recipe>
  //     </li>
  //   );
  // });

  return (
    <section>
      <h2>Recipes</h2>
      {/* <ol>{recipeComponents}</ol> */}
    </section>
  );
};

export default RecipeList;
