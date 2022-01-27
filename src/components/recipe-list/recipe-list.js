// Recipe list component displays all recipe items in an ordered list.
// The recipe information is displayed in either a listed grid format.
// The list has sortable columns for rating, servings, etc.
import { useEffect, useState } from "react";
import Recipe from "./recipe";
import axios from "axios";

function RecipeList() {
  const [recipesData, setRecipesData] = useState([]);

  // GET request to compile recipe instances in recipe list
  useEffect(() => {
    axios
      .get("http://localhost:8080/recipes")
      .then((response) => {
        console.log(response.data);
        setRecipesData(response.data);
      })
      .catch((error) => {
        console.log("didn't work sorry");
      });
  }, []);

  // Map the recipe items to display individual recipes
  const recipeItems = recipesData.map((recipe) => {
    return (
      <ol>
        <Recipe recipe={recipe} />
      </ol>
    );
  });


  // Return list of recipe jsx items to be displayed in the list container
  return <div>{recipeItems}</div>;
}

export default RecipeList;
