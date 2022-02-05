import React from 'react';
import AddRecipeForm from "../new-recipe-input/add_recipe_form"
import NewRecipePreview from '../new-recipe-input/preview';
import { useState } from "react";

function NewRecipe(){


    const [newRecipe, setNewRecipe] = useState({
    title: "",
    description: "",
    prepTime: "",
    cookTime: "",
    image: "",
    servings: "",
    steps: [],
    });

    const handleSubmit = (event) => {
    event.preventDefault();

    console.log(newRecipe);
    // axios
    //     .post("http://localhost:8080/recipes", newRecipe)
    //     .then((response) => {
    //     console.log("Response:", response.data);
    //     // const recipe = [...recipesData];
    //     // recipe.push(response.data);
    //     // setRecipesData(recipe);
    //     })
    //     .catch((error) => {
    //     console.log("Error:", error);
    //     alert("Couldn't create a new recipe.");
    //     });

    alert("You've created a new recipe!");
    };

    return(
        <div className="grid grid-cols-2">
            <div className="col-span-1">
                <AddRecipeForm handleSubmit={handleSubmit} newRecipe={newRecipe} setNewRecipe={setNewRecipe}/>
            </div>
            <div className="col-span-1 cols-end-3">

                <NewRecipePreview newRecipe={newRecipe}/>
            </div>

        </div>


    )


}

export default NewRecipe