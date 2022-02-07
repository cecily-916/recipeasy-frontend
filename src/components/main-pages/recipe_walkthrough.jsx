import { useLocation } from 'react-router-dom'
import { useEffect, useState } from "react";
// import StepIngredients from './step_ingredients'
import RecipeOverview from '../recipe_overview/recipe_container';
import StepsContainer from '../recipe_walkthrough/WALKTHROUGH/step_container/steps_container';
import IngredientsList from '../recipe_overview/ingredients_list';
import SidebarChecklist from '../recipe_walkthrough/WALKTHROUGH/sidebar_checklist';
function RecipeWalkthrough() {
    const location = useLocation()
    console.log(location)
    const recipeData = location.state
    
    const [currentStepNum, setCurrentStepNum] = useState(1)

    return (
        <div className="relative grid grid-col-4">
            <div className="sticky top-0 m-5 h-8">
                {/* <RecipeOverview recipe={recipeData}/> */}
                <SidebarChecklist recipe={recipeData} stepNum={currentStepNum} setCurrentStepNum={setCurrentStepNum}/>
                <br/>
                <IngredientsList ingredients = {recipeData.ingredients} />
            </div>
            <div className="col-end-5 col-span-3 m-5">
                <StepsContainer recipe={recipeData} currentStep={currentStepNum} setCurrentStepNum={setCurrentStepNum}/>
            </div>
        </div>
    );
}

export default RecipeWalkthrough;