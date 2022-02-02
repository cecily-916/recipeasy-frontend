import React from "react";
import ListContainer from "../recipe-list/list-container";
import { useEffect, useState } from "react";
import axios from "axios"
import NewRecipePopup from "../new-recipe-input/new-recipe";
import { Link } from "react-router-dom";


function Home() {

    const [recipesData, setRecipesData] = useState([]);
    // const [newRecipeButton, setNewRecipeButton] = useState(false);
    // onClick={() => setNewRecipeButton(true)}
    // trigger={newRecipeButton} setTrigger={setNewRecipeButton}
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

    console.log(recipesData)
    return (
        <div className="overscroll-auto bg-scroll bg-top bg-bg-img bg-cover pb-3 ">
            <header className="pt-3 text-8xl text-center text-white">Recipeasy</header>
            <p className= "mt-16 text-lg text-center text-white">
                Welcome to Recipeasy, where all your favorite recipes are just so easy peasy.
            </p>
            <div className="mx-auto my-4 h-8 w-fit">
                <Link to="./add-recipe" className="
                        text-xl
                        font-quicksand 
                        align-center
                        py-2
                        px-7
                        border border-[#E5E7EB]
                        bg-white
                        rounded-full
                        text-black
                        hover:border-primary 
                        hover:bg-emerald-800 hover:text-emerald-800
                        transition"
                >Add New Recipe</Link>
            </div>
            <ListContainer recipes={recipesData}/>
        </div>
    );
}


export default Home;