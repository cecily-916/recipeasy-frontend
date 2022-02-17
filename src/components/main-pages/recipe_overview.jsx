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
            .get(`${process.env.REACT_APP_BACKEND_URL}/recipes/${recipe.ID}`)
            .then((response) => {
                setRecipeData(response.data);
            })
            .catch((error) => {
                console.log("Recipe data cannot be rendered");
            });
    },[recipe.ID]);
    console.log(recipeData)
    console.log(recipeData.ingredients)


    return (
        <div className="flex flex-auto space-x-0 bg-[##FEF1CB]  align-middle ">
            <div className="w-1/2 mt-4 mx-8">
                <RecipeOverview recipe={recipeData} />
            </div>
            <div className="grid grid-rows-6 w-40% mt-4">
                {recipeData.image ? <img
                    className="rounded-md row-start-1 w-full row-end-3 max-h-96 max-w-md  drop-shadow-md "
                    src={recipeData.image}
                    alt=""
                />:""}
                <Link
                    className="
                    w-2/3
                    self-center
                    transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110
                    link
                    font-extrabold
                    font-quicksand
                    text-center
                    shadow-md
                    h-20
                    px-7
                    border border-[#E5E7EB]
                    rounded-md 
                    text-2xl 
                    m-3 
                    p-3 
                    bg-emerald-900 text-white "
                    to={`./steps`}
                    state={recipeData}
                    >
                    Begin Recipe &nbsp;
                </Link>
            <span className="flex flex-row h-40 mx-auto space-x-2 content-top">
                    <button            
                    className="w-1/2
                    transition duration-600 ease-in-out hover:-translate-y-1 hover:scale-110
                    py-2
                    px-7
                    border-2 border-emerald-900
                    rounded-md 
                    text-base text-body-color 
                    font-medium 
                    shadow-sm 
                    
                    p-3 
                    bg-white text-emerald-900"
                    onClick={() => setCalendarButton(true)}>
                        <span className='text-5xl material-icons-outlined'>event_available</span>
                        <br />
                        Add to Google Calendar</button>
                    <AddToCalendarPopup recipe={recipeData} trigger={calendarButton} setTrigger={setCalendarButton}/>
                    <button            
                    className="
                    transition duration-600 ease-in-out hover:-translate-y-1 hover:scale-110
                    basis-1/2
                    py-2
                    px-7
                    border-2 border-emerald-900
                    rounded-md 
                    text-base text-body-color 
                    font-medium 
                    shadow-sm 
                    p-3 
                    bg-white text-emerald-900"
                    onClick={() => setCollectionsButton(true)}>
                        <span className='text-5xl material-icons-outlined'>library_add</span>
                        <br />
                        Add to Collection</button>
                    <AddToCollectionPopup recipe={recipeData} trigger={collectionsButton} setTrigger={setCollectionsButton}/>
                    </span>
                <span className='flex h-40 space-x-2 mx-auto flex-row content-top'>
                    <button            
                    className="
                    transition duration-600 ease-in-out hover:-translate-y-1 hover:scale-110
                    w-1/2
                    py-2
                    px-7
                    border border-[#E5E7EB]
                    rounded-md 
                    text-base text-body-color 
                    font-medium 
                    shadow-sm 
                    p-3 
                    bg-white text-emerald-800"
                    onClick={() => setArchiveRecipeButton(true)}>
                        <span className='text-5xl material-icons'>archive</span>
                        <br/>
                        Archive</button>
                    <ArchiveRecipePopup recipe={recipeData} trigger={archiveRecipeButton} setTrigger={setArchiveRecipeButton}/>
                    <button            
                    className="
                    transition duration-600 ease-in-out hover:-translate-y-1 hover:scale-110
                    w-1/2
                    py-2
                    px-7
                    border border-[#E5E7EB]
                    rounded-md 
                    text-base text-body-color 
                    font-medium 
                    shadow-sm 
                    p-3 
                    bg-white text-emerald-800"
                    onClick={() => window.print()}>
                        <span className='text-5xl material-icons'>print</span>
                        <br />

                        Print</button>
                </span>
        </div>
        </div>
    );
}

export default CurrentRecipe;

