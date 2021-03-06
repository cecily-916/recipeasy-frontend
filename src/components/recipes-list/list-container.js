import React from "react";
// import Header from "./header";
import Recipe from "./recipe";
// import StackGrid, { transitions } from "react-stack-grid";

// const { scaleDown } = transitions;

function ListContainer({ recipes }) {
  // Map the recipe items to display individual recipes
  console.log(recipes);
  const recipeItems = recipes.map((recipe, index) => {
    return <Recipe key={index} recipe={recipe} />;
  });

  return (
    // title
    <section className="mx-12 mt-10 mb-10 bg-[#c4ceddb0] min-h-full rounded-md shadow-xl">
      <div
        className="
        px-8
        flex 
        // flex-wrap 
        // flex-row 
        justify-center 
        justify-items-center 
        space-x-5"
        // flex-auto
      >
        {
          {
            0: (
              <div className="max-w-lg  p-16 mx-auto">
                <p className="text-center rounded-md text-emerald-900 text-lg p-12 bg-white">
                  No recipes found.
                  <br /> Go to "Add Recipe" to create one!
                </p>
              </div>
            ),
          }[recipes.length]
        }
        {/* <StackGrid
        columnWidth={230}
        gutterWidth={14}
        appear={scaleDown.appear}
        appeared={scaleDown.appeared}
        enter={scaleDown.enter}
        entered={scaleDown.entered}
        leaved={scaleDown.leaved}
      > */}
        {recipeItems}
        {/* </StackGrid> */}
      </div>
    </section>
  );
}

export default ListContainer;
