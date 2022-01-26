// Recipe list component displays all recipe items in an ordered list.
// The recipe information is displayed in either a listed grid format.
// The list has sortable columns for rating, servings, etc.
import { useEffect, useState } from "react";
import Recipe from "./recipe";
import axios from "axios";

function RecipeList() {
  // console.log(props);

  const [recipesData, setRecipesData] = useState([]);

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

  const recipeItems = recipesData.map((recipe) => {
    return (
      <ol>
        <Recipe recipe={recipe} />
      </ol>
    );
  });
  return <div>{recipeItems}</div>;
}

export default RecipeList;
