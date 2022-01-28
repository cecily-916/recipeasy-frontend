import React from "react";
// import Header from "./header";
import RecipeList from "./recipe-list";

function ListContainer(props) {
  return (
    // title
    <div>
      <h3>Recipe List</h3>
      {/* // header with sort features component */}
      {/* <Header></Header> */}
      {/* // recipe table - has it's own child components of category row and recipe */}
      <RecipeList recipes={props.recipes} />
    </div>
  );
}

export default ListContainer;
