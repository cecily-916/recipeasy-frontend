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
    source: "",
    author: "",
    prepTime: "",
    cookTime: "",
    image: "",
    servings: 0,
    steps: [],
    user: "",
    });

    const [mainImage, setMainImage] =useState(null)
    const [mainImageLink, setMainImageLink]=useState(null)

    const handleSubmit = (event) => {
        event.preventDefault();
        postImageImgur()

        setNewRecipe((prevState) => ({
            ...prevState,
            image: mainImageLink,
            user: user.userId,
            }));
        
        console.log(newRecipe);

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
    console.log(newRecipe);

    const postImageImgur =()=>{
        let FormData = require("form-data");
        const data = new FormData();
        data.append("image", mainImage);
        const config = {
            headers: {
            Authorization: "Client-ID 15bebad96249efe",
            },
        };

        axios
            .post("https://api.imgur.com/3/image", data, config)
            .then(function (response) {
            console.log(JSON.stringify(response.data));
            setMainImageLink(response.data.link);
            })
            .catch(function (error) {
            console.log(error);
            });
    }


    return(
        <div className="grid grid-cols-2 bg-newreci-img bg-cover min-h-screen bg-right">
            <div className="col-span-1 mx-auto ">
                <AddRecipeForm handleSubmit={handleSubmit} newRecipe={newRecipe} setMainImage={setMainImage} setNewRecipe={setNewRecipe}/>
            </div>
            <div className="col-span-1 cols-end-3">
                <NewRecipePreview newRecipe={newRecipe} mainImage={mainImage}/>
            </div>

        </div>
    )


}

export default NewRecipe