import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from "react";
// import StepIngredients from './step_ingredients'
import axios from 'axios';
import RecipeOverview from '../recipe_overview/recipe_container';
import AddToCalendarPopup from '../recipe_overview/calendar_popup';
import AddToCollectionPopup from '../recipe_overview/collections_popup';
import ArchiveRecipePopup from '../recipe_overview/archive_recipe_popup';
import React from 'react';


function CurrentRecipe() {

    const location = useLocation()
    const recipe = location.state

    window.scrollTo(0,0)

    const [recipeData, setRecipeData] = useState([])
    const [calendarButton, setCalendarButton] = useState(false);
    const [collectionsButton, setCollectionsButton] = useState(false)
    const [archiveRecipeButton, setArchiveRecipeButton] = useState(false)

    // Calls GET endpoint for recipe information (id, title, description, preptime, cooktime, rating)
    useEffect(() => {
        axios
            .get(`http://localhost:8080/recipes/${recipe.ID}`)
            .then((response) => {
                setRecipeData(response.data);
            })
            .catch((error) => {
                console.log("Recipe data cannot be rendered");
            });
    },[recipe.ID]);
    console.log(recipeData)
    console.log(recipeData.ingredients)

    // const deleteRecipe=() => {
    //     axios
    //         .delete(`http://localhost:8080/archive/${recipe.ID}`)
    //         .then((response)=>{
    //             alert("Recipe successfully deleted")
    //         })
    //         .catch((error) => {console.log("Error with delete.")})
    //     window.location.href = '/home'
    // }

    return (
        <div className="grid grid-cols-4 gap-24 grid-rows-2 mt-11 mx-11 content-center">
            <div className="col-span-2 row-span-2 content-center">
                <RecipeOverview recipe={recipeData} />
            </div>
            <div className="col-span-1 row-span-1 col-end-4">
            <img
                className=" rounded-md max-h-80 max-w-fit content-center drop-shadow-md "
                src={recipeData.image}
                alt=""
            />
            </div>
            <div className="row-start-2 col-span-1 col-end-4 content-top">
                <Link className="inline-block
                                py-2
                                px-7
                                border border-[#E5E7EB]
                                rounded-md 
                                text-base text-body-color 
                                font-medium 
                                shadow-sm 
                                m-3 
                                p-3 
                                bg-emerald-800 text-white" 
                                to={`./steps`} state={recipeData}>Begin Recipe</Link>
                <button            
                className="inline-block
                py-2
                px-7
                border border-[#E5E7EB]
                rounded-md 
                text-base text-body-color 
                font-medium 
                shadow-sm 
                m-3 
                p-3 
                bg-emerald-800 text-white"
                onClick={() => setCalendarButton(true)}>Add to Google Calendar</button>
                <AddToCalendarPopup recipe={recipeData} trigger={calendarButton} setTrigger={setCalendarButton}/>
                <button            
                className="inline-block
                py-2
                px-7
                border border-[#E5E7EB]
                rounded-md 
                text-base text-body-color 
                font-medium 
                shadow-sm 
                m-3 
                p-3 
                bg-emerald-800 text-white"
                onClick={() => setCollectionsButton(true)}>Add to Collection</button>
                <AddToCollectionPopup recipe={recipeData} trigger={collectionsButton} setTrigger={setCollectionsButton}/>
                <button            
                className="inline-block
                py-2
                px-7
                border border-[#E5E7EB]
                rounded-md 
                text-base text-body-color 
                font-medium 
                shadow-sm 
                m-3 
                p-3 
                bg-white text-emerald-800"
                onClick={() => setArchiveRecipeButton(true)}>Archive Recipe</button>
                <ArchiveRecipePopup recipe={recipeData} trigger={archiveRecipeButton} setTrigger={setArchiveRecipeButton}/>
        </div>
        </div>
    );
}

export default CurrentRecipe;

