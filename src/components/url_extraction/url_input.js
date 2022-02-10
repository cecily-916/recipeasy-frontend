import React, { useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

function ExtractRecipe() {
  const [recipeData, setRecipeData] = useState({});
  const [url, setUrl] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .get(
        `https://api.spoonacular.com/recipes/extract?url=${url}&apiKey=2c4f1747d35249b3bc820cfdc62db875`
      )
      .then((response) => {
        console.log("Response:", response.data);
        setRecipeData(response.data);
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Couldn't create a new recipe.");
      });
  };

  const handleURL = (event) => {
    setUrl(event.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
    text-lg
    font-quicksand 
    align-center
    py-2
    px-7
    border border-[#E5E7EB]
    bg-white
    rounded-full
    text-black
    hover:border-primary"
    >
      Extract Recipe From Website:
      <br />
      <input
        type="url"
        value={url}
        onChange={handleURL}
        placeholder="Input URL"
      />
      <input type="submit" />
      <Link to={`./recipe/extract/${recipeData.id}`} state={recipeData}>
        Go to recipe
      </Link>
    </form>
  );
}

export default ExtractRecipe;
