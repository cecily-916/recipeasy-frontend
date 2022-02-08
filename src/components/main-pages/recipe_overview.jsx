import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from "react";
// import StepIngredients from './step_ingredients'
import axios from 'axios';
import RecipeOverview from '../recipe_overview/recipe_container';
import AddToCalendarPopup from '../recipe_overview/calendar_popup';

function CurrentRecipe() {

    const location = useLocation()
    const recipe = location.state

    const [recipeData, setRecipeData] = useState([])
    const [calendarButton, setCalendarButton] = useState(false);
    // const [collection, setCalendarButton] = useState(false);

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
        <div className="grid grid-cols-4 gap-24 grid-rows-3 mt-11 mx-11 content-center">
            <div className="col-span-2 row-span-3 content-center">
                <RecipeOverview recipe={recipeData} />
            </div>
            <div className="col-span-1 row-span-1 col-end-4">
            <img
                className="rounded-sm max-h-60 max-w-fit content-center"
                src={recipeData.image}
                alt=""
            />
            </div>
            <div className="row-start-2 col-span-1 col-end-4 content-center">
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
                onClick={() => setCalendarButton(true)}>Add Recipe to Google Calendar</button>
                <AddToCalendarPopup recipe={recipeData} trigger={calendarButton} setTrigger={setCalendarButton}/>
        </div>
        </div>
    );
}

export default CurrentRecipe;


{/* <button            
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
onClick={()=>{deleteRecipe()}}>Delete Recipe</button> */}