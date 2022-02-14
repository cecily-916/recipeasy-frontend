import React from 'react';
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
    prepTime: "",
    cookTime: "",
    image: "",
    servings: "",
    steps: [],
    user: "",
    });

    const [stepPreview, setStepPreview] =useState([])

    const handleSubmit = (event) => {
        event.preventDefault();

        setNewRecipe((prevState) => ({
            ...prevState,
            user: user.userId,
            }));

        console.log(newRecipe);
        axios
            .post(`${process.env.REACT_APP_BACKEND_URL}/recipes`, newRecipe)
            .then((response) => {
            console.log("Response:", response.data);
            })
            .catch((error) => {
            console.log("Error:", error);
            alert("Couldn't create a new recipe.");
            });

        alert("You've created a new recipe!");
    };

    return(
        <div className="grid grid-cols-2 bg-newreci-img bg-cover min-h-screen bg-right">
            <div className="col-span-1 mx-auto">
                <AddRecipeForm handleSubmit={handleSubmit} newRecipe={newRecipe} setNewRecipe={setNewRecipe}/>
            </div>
            <div className="col-span-1 cols-end-3">
                <NewRecipePreview newRecipe={newRecipe}/>
            </div>

        </div>
    )


}

export default NewRecipe