import { useLocation } from 'react-router-dom'
import RecipeList from '../../recipe-list/recipe-list'
import { useEffect, useState } from "react";
import StepsList from './steps_list'
import StepIngredients from './step_ingredients'
import axios from 'axios';

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
                setRecipeData(response.data[0]);
            })
            .catch((error) => {
                console.log("Recipe data cannot be rendered");
            });
    },[]);

    // Calls GET endpoint for all step information ()
    useEffect(() => {
        axios
            .get(`http://localhost:8080/recipes/${recipe.ID}/steps`)
            .then((response) => {
                setRecipeStepsData(response.data.steps);
            })
            .catch((error) => {
                console.log("Recipe data cannot be rendered");
            });
    },[]);


    return (
    <div className="about">
        <div className="container">
        <div className="row align-items-center my-5">
            <div className="col-lg-7">
            <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
                alt=""
            />
            </div>
            <div className="col-lg-5">
            <h1 className="font-weight-light">{recipeData.title}</h1>
            <h2>{recipeData.description}</h2>
            <p>Rating: {recipeData.rating} Prep Time: {recipeData.prepTime} Cook Time: {recipeData.cookTime}</p>
            <StepsList steps={recipeStepsData}/>
            {/* <StepIngredients ingredients={ingredients}/> */}
            </div>
        </div>
        </div>
    </div>
    );
}

export default CurrentRecipe;