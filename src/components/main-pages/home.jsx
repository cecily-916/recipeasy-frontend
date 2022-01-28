import React from "react";
import ListContainer from "../recipe-list/list-container";
import { useEffect, useState } from "react";
import axios from "axios"
import NewRecipePopup from "../new-recipe-input/new-recipe";


function Home() {

    const [recipesData, setRecipesData] = useState([]);
    const [newRecipeButton, setNewRecipeButton] = useState(false);

    useEffect(() => {
        axios
            .get("http://localhost:8080/recipes")
            .then((response) => {
                setRecipesData(response.data);
            })
            .catch((error) => {
                console.log("didn't work sorry");
            });
    }, []);

    const createNewRecipe = (newRecipe) => {
        axios
            .post('http://localhost:8080/recipes', newRecipe)
            .then((response) => {
                console.log("Response:", response.data);
                const recipe = [...recipesData];
                recipe.push(response.data);
                setRecipesData(recipe);
            })
            .catch((error) => {
                console.log("Error:", error);
                alert("Couldn't create a new recipe.");
            });
        };

    return (
        <div className="home">
        <div className="container">
            <div className="row align-items-center my-5">
            {/* <div className="col-lg-7"> */}
                {/* <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/900x400"
                alt=""
                /> */}
            {/* </div> */}
            <div className="col-lg-5">
                <h1 className="font-weight-light">Your Recipes</h1>
                <p>
                Welcome to Recipeasy, where all your favorite recipes are just so easy peasy.
                </p>
                <ListContainer recipes={recipesData} />
            </div>
            </div>
        </div>
        <div>
            <button onClick={() => setNewRecipeButton(true)}>Add New Recipe</button>
            <NewRecipePopup createNewRecipe={createNewRecipe} trigger={newRecipeButton} setTrigger={setNewRecipeButton}/>
        </div>
        </div>
    );
}

export default Home;