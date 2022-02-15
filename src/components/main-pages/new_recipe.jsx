import React, { useEffect } from 'react';
import AddRecipeForm from "../new-recipe-input/add_recipe_form"
import NewRecipePreview from '../new-recipe-input/preview';
import { useState } from "react";
import axios from 'axios';
import Userfront from '@userfront/react';

function NewRecipe(){

    const user=Userfront.user

    const [newRecipe, setNewRecipe] = useState({
    title: "",
    description: "",
    source: "",
    author: "",
    prepTime: "",
    cookTime: "",
    image: "",
    imagedelete:"",
    imageid:"",
    servings: null,
    steps: [],
    user: user.userId,
    });

    const [finalStepOrder, setFinalStepOrder] = useState([])
    console.log(finalStepOrder)

    useEffect(()=>{
        setNewRecipe((prevState) => ({
            ...prevState,
            steps: finalStepOrder,
            }));
    }, [finalStepOrder])
    console.log(newRecipe);

    const handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post(`${process.env.REACT_APP_BACKEND_URL}/recipes`, newRecipe)
            .then((response) => {
            console.log("Response:", response.data);
            alert("You've created a new recipe!");
            })
            .catch((error) => {
            console.log("Error:", error);
            alert("Couldn't create a new recipe.");
            });
    };

    return(
        <div className="grid grid-cols-2 bg-newreci-img bg-cover min-h-screen bg-right">
            <div className="col-span-1 mx-auto ">
                <AddRecipeForm handleSubmit={handleSubmit} newRecipe={newRecipe} setNewRecipe={setNewRecipe}/>
            </div>
            <div className="col-span-1 cols-end-3">
                <NewRecipePreview newRecipe={newRecipe} setFinalStepOrder={setFinalStepOrder} />
            </div>
        </div>
    )
}

export default NewRecipe