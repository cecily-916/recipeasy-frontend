import React, { useEffect } from "react";
import { useState } from "react";

function SearchBar({ recipes, setFoundRecipes, setChange, trigger }) {
  const [query, setQuery] = useState("");
  console.log(recipes);
  console.log(query);
  //   const result = recipes.filter((recipe) => {
  //     if (query === "") {
  //       console.log("empty");
  //       setChange("reset");
  //       return <p>not found</p>;
  //     } else if (recipe.title.toLowerCase().includes(query.toLowerCase())) {
  //       console.log(recipe);
  //       setFoundRecipes((prevState) => [...prevState, recipe]);
  //       setRecipesData([foundRecipes]);
  //       return <p>found</p>;
  //     }
  //   });
  // };
  useEffect(() => {
    const results = recipes.filter((recipe) => {
      if (query === "") {
        return recipe;
      } else if (recipe.title.toLowerCase().includes(query.toLowerCase())) {
        return recipe;
      }
    });
    setFoundRecipes(results);
  }, [query]);

  return trigger ? (
    <div className="my-auto mx-2">
      <input
        className="rounded-sm focus:outline-amber-400"
        type="text"
        placeholder="    Enter recipe title"
        onChange={(event) => setQuery(event.target.value)}
      />
    </div>
  ) : (
    ""
  );
}

export default SearchBar;
