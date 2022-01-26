import React from "react";
import ListContainer from "../recipe-list/list-container";
import { useEffect, useState } from "react";
import axios from "axios"
import NewRecipePopup from "../new-recipe-input/new-recipe";


function Home() {

    // const [recipesData, setRecipesData] = useState(0);
    const [newRecipeButton, setNewRecipeButton] = useState(false);

    // useEffect(() => {
    //     axios
    //     .get('http://localhost:8080/recipes')
    //     .then((response) => {
    //         console.log(response.data);
    //         setRecipesData(response.data);
    //     })
    //     .catch((error) => {
    //         console.log("didn't work sorry");
    //     });
    // }, [])

    return (
        <div className="home">
        <div className="container">
            <div className="row align-items-center my-5">
            <div className="col-lg-7">
                {/* <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/900x400"
                alt=""
                /> */}
            </div>
            <div className="col-lg-5">
                <h1 className="font-weight-light">Your Recipes</h1>
                <p>
                Welcome to Recipeasy, where all your favorite recipes are just so easy peasy.
                </p>
                <ListContainer />
                {/* recipe data goes here: { recipesData[0].title } */}
            </div>
            </div>
        </div>
        <div>
            <button onClick={() => setNewRecipeButton(true)}>Add New Recipe</button>
            <NewRecipePopup trigger={newRecipeButton} setTrigger={setNewRecipeButton}>
                <h3>My Popup</h3>
            </NewRecipePopup>
        </div>
        </div>
    );
}

export default Home;