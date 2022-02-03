import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from "react";
// import StepIngredients from './step_ingredients'
import axios from 'axios';
import RecipeOverview from './overview_container/recipe_container';

function CurrentRecipe() {

    const location = useLocation()
    const recipe = location.state

    const [recipeData, setRecipeData] = useState([])
    const [recipeStepsData, setRecipeStepsData] = useState([])
    // const [stepsData, setStepsData] = useState("")
    // const [stepsIngredientsData, setStepsIngredientsData] = useState("")
    // const [ingredientsData, setIngredientsData] = useState("")

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
            <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20220112T180000Z%2F20220112T200000Z&details=Learn%20all%20about%20the%20rules%20of%20the%20Motorway%20and%20how%20to%20access%20the%20fast%20lane.%0A%0Ahttps%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGridlock_%28Doctor_Who%29&location=New%20Earth&text=Welcome%20to%20the%20Motorway" class="cta btn-yellow" style="background-color: #F4D66C; font-size: 18px; font-family: Helvetica, Arial, sans-serif; font-weight:bold; text-decoration: none; padding: 14px 20px; color: #1D2025; border-radius: 5px; display:inline-block; mso-padding-alt:0; box-shadow:0 3px 6px rgba(0,0,0,.2);"><span style="mso-text-raise:15pt;">Add to your Google Calendar</span></a>

        </div>
        </div>
    );
}

export default CurrentRecipe;