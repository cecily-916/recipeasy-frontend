import React from "react";
// import Header from "./header";
import Recipe from "./recipe";
import StackGrid, { transitions } from "react-stack-grid";

const { scaleDown } = transitions;

function ListContainer({ recipes }) {
  // Map the recipe items to display individual recipes
  console.log(recipes);
  const recipeItems = recipes.map((recipe, index) => {
    return <Recipe key={index} recipe={recipe} />;
  });

  return (
    // title
    <section className="mx-12 mt-10 mb-20 bg-[#b3b5b8b0] rounded-md shadow-xl">
      {/* <div
        className="
        flex 
        flex-wrap 
        flex-row 
        justify-start 
        justify-items-center 
        space-x-5"
      > */}
      {
        {
          0: (
            <div className="max-w-lg  p-16 mx-auto">
              <p className="text-center rounded-md text-emerald-900 text-lg p-12 bg-white">
                Uh oh! No recipes found.
                <br /> Go to "Add Recipe" to create one!
              </p>
            </div>
          ),
        }[recipes.length]
      }
      <StackGrid
        columnWidth={250}
        gutterWidth={15}
        appear={scaleDown.appear}
        appeared={scaleDown.appeared}
        enter={scaleDown.enter}
        entered={scaleDown.entered}
        leaved={scaleDown.leaved}
      >
        {recipeItems}
      </StackGrid>
      {/* </div> */}
    </section>
  );
}

export default ListContainer;
