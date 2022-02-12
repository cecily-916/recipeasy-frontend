import React from "react";
import ListContainer from "../recipes-list/list-container";
import { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";


function PublicHome() {

    const [recipesData, setRecipesData] = useState([]);
    // const [newRecipeButton, setNewRecipeButton] = useState(false);
    // onClick={() => setNewRecipeButton(true)}
    // trigger={newRecipeButton} setTrigger={setNewRecipeButton}
    useEffect(() => {
        axios
            .get("${process.env.REACT_APP_BACKEND_URL}/recipes")
            .then((response) => {
                setRecipesData(response.data);
            })
            .catch((error) => {
                console.log("didn't work sorry");
            });
    }, []);

    // const createNewRecipe = (newRecipe) => {
    //     axios
    //         .post('${process.env.REACT_APP_BACKEND_URL}/recipes', newRecipe)
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
        <div className="overscroll-auto bg-scroll bg-home-img bg-cover pb-3 ">
            <header className="pt-3 text-8xl text-center text-emerald-900">Recipeasy</header>
            <div className="mx-auto mt-20 mb-12 h-8 w-fit">
                <Link to="./login" className="
                        text-xl
                        font-quicksand 
                        align-center
                        font-extrabold
                        py-2
                        px-7
                        border border-[#E5E7EB]
                        bg-white
                        rounded-full
                        text-black
                        hover:border-primary 
                        hover:bg-emerald-800 hover:text-emerald-800
                        transition"
                >LOGIN</Link>
            </div>
            <ListContainer recipes={recipesData}/>
        </div>
    );
}


export default PublicHome;