import React from "react";
// import Header from "./header";
import Recipe from "./recipe";

function ListContainer(props) {
  // Map the recipe items to display individual recipes
  console.log(props.recipes);
  const recipeItems = props.recipes.map((recipe) => {
    return <Recipe recipe={recipe} />;
  });

  return (
    // title
    <section className="mx-12 mt-10 mb-20 bg-[#b3b5b8b0] rounded-md shadow-xl">
      <div
        className="
        flex 
        flex-wrap 
        flex-row 
        justify-start 
        justify-items-center 
        space-x-5"
      >
        {/* // header with sort features component */}
        {/* <RecipeList recipes={props.recipes} /> */}
        {recipeItems}
      </div>
    </section>
  );
}

export default ListContainer;
