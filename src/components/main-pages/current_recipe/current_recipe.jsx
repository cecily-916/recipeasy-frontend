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
            <RecipeOverview recipe={recipeData} className="col-span-2"/>
            <img
                className="rounded-sm max-h-60 col-span-1 col-end-4 max-w-fit"
                src={recipeData.image}
                alt=""
            />
            <div className="col-span-1 content-center">
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
        </div>
        </div>
    );
}

export default CurrentRecipe;