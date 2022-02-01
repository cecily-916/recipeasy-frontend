import React from "react";
import ListContainer from "../recipe-list/list-container";
import { useEffect, useState } from "react";
import axios from "axios"
// import NewRecipePopup from "../new-recipe-input/new-recipe";


function Home() {

    const [recipesData, setRecipesData] = useState([]);
    // const [newRecipeButton, setNewRecipeButton] = useState(false);

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

    // const createNewRecipe = (newRecipe) => {
    //     axios
    //         .post('http://localhost:8080/recipes', newRecipe)
    //         .then((response) => {
    //             console.log("Response:", response.data);
    //             const recipe = [...recipesData];
    //             recipe.push(response.data);
    //             setRecipesData(recipe);
    //         })
    //         .catch((error) => {
    //             console.log("Error:", error);
    //             alert("Couldn't create a new recipe.");
    //         });
    //     };
    console.log(recipesData)
    return (
        <div className="overscroll-auto bg-scroll bg-top bg-bg-img bg-cover pb-3 ">
            <header className="pt-3 text-8xl text-center text-white">Recipeasy</header>
            <p className= "mt-16 text-lg text-center text-white">
                Welcome to Recipeasy, where all your favorite recipes are just so easy peasy.
            </p>
            <ListContainer recipes={recipesData}/>
        </div>
    );
}

/* </div>
                <button onClick={() => setNewRecipeButton(true)}>Add New Recipe</button>
                <NewRecipePopup createNewRecipe={createNewRecipe} trigger={newRecipeButton} setTrigger={setNewRecipeButton}/>
                </div> */

export default Home;