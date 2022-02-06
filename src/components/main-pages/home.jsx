import React from "react";
import ListContainer from "../recipes-list/list-container";
import { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import Userfront from '@userfront/react';


function Home() {
    const user=Userfront.user

    const [recipesData, setRecipesData] = useState([]);

    useEffect(()=> {
        axios
            .get(`http://localhost:8080/${user.userId}/recipes`)
            .then((response) => {
            console.log(response);
            setRecipesData(response.data)
            })
            .catch((error) => {
            console.log("nope");
            });
    }, [user.userId]);
    // const [newRecipeButton, setNewRecipeButton] = useState(false);
    // onClick={() => setNewRecipeButton(true)}
    // trigger={newRecipeButton} setTrigger={setNewRecipeButton}
    // useEffect(() => {
    //     axios
    //         .get("http://localhost:8080/recipes")
    //         .then((response) => {
    //             setRecipesData(response.data);
    //         })
    //         .catch((error) => {
    //             console.log("didn't work sorry");
    //         });
    // }, []);

    // console.log(recipesData)
    return (
        <div className="overscroll-auto bg-scroll bg-top bg-bg-img bg-cover pb-3 ">
            <header className="pt-3 text-8xl text-center text-white">Recipeasy</header>
            <p className= "mt-16 text-lg text-center text-white">
                {/* Welcome to Recipeasy, where all your favorite recipes are just so easy peasy. */}
            </p>
            <div className="mx-auto my-4 h-8 w-fit">
                <Link to="./new_recipe" className="
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