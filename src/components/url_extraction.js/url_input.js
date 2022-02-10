import React, { useState } from "react";
import axios from "axios";

function ExtractRecipe() {
  const [urlRecipeData, setUrlRecipeData] = useState({});
  const [url, setUrl] = useState();

  const handleURL = (event) => {
    setUrl(event.target.value);

    axios
      .get(`https://api.spoonacular.com/recipes/extract?url=${url}`)
      .then((response) => {
        console.log("Response:", response.data);
        setURLRecipesData(response.data);
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Couldn't create a new recipe.");
      });
  };

  return (
    <form
      className="
    text-xl
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
      <input type="url" value={url} onChange={handleURL}>
        Enter Recipe URL
      </input>
    </form>
  );
}

export default ExtractRecipe;
