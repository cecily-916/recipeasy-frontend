import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from "react";
// import StepIngredients from './step_ingredients'
import axios from 'axios';
import RecipeOverview from './overview_container/recipe_container';
import AddToCalendarPopup from './calendar_popup';

function CurrentRecipe() {

    const location = useLocation()
    const recipe = location.state

    const [recipeData, setRecipeData] = useState([])
    const [calendarButton, setCalendarButton] = useState(false);

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
    },[]);
    console.log(recipeData)
    console.log(recipeData.ingredients)


    return (
        <div className="grid grid-cols-3 gap-4 grid-rows-2 mt-11 mx-11 content-center">
            <RecipeOverview recipe={recipeData} className="col-span-3 content-center"/>
            <img
                className="rounded-sm max-h-60 col-span-2 col-end-4 max-w-fit content-center"
                src={recipeData.image}
                alt=""
            />
            <div className="row-start-2 col-span-1 content-center">
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
                            to={`./steps/1`} state={recipeData}>Begin Recipe</Link>
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
            onClick={() => setCalendarButton(true)}>Add Recipe your Google Calendar</button>
            <AddToCalendarPopup recipe={recipeData} trigger={calendarButton} setTrigger={setCalendarButton}/>

        </div>
        </div>
    );
}

export default CurrentRecipe;


