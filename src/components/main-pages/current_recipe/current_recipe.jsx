import { useLocation } from 'react-router-dom'
import RecipeList from '../../recipe-list/recipe-list'
import { useEffect, useState } from "react";
import StepsList from './steps_list'
import StepIngredients from './step_ingredients'
import axios from 'axios';
import IngredientsList from './ingredients_list';

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
    // Calls GET endpoint for all step information ()
    // useEffect(() => {
    //     axios
    //         .get(`http://localhost:8080/recipes/${recipe.ID}/steps`)
    //         .then((response) => {
    //             setRecipeStepsData(response.data.steps);
    //         })
    //         .catch((error) => {
    //             console.log("Recipe data cannot be rendered");
    //         });
    // },[]);


    return (
    <div className="about">
        <div className="container">
        <div className="row align-items-center my-5">
            <div className="col-lg-7">
            <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src={recipeData.image}
                alt=""
            />
            </div>
            <div className="col-lg-5">
            <h1 className="font-weight-light">{recipeData.title}</h1>
            <h2>{recipeData.description}</h2>
            <p>Rating: {recipeData.rating} Prep Time: {recipeData.prepTime} Cook Time: {recipeData.cookTime}</p>
            <StepsList steps={recipeData.steps}/>
            <IngredientsList ingredients={recipeData.ingredients}/>
            {/* <StepIngredients ingredients={ingredients}/> */}
            </div>
        </div>
        </div>
    </div>
    );
}

export default CurrentRecipe;