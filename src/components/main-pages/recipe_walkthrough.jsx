import { useLocation } from 'react-router-dom'
import { useState } from "react";
// import StepIngredients from './step_ingredients'
import RecipeOverview from '../recipe_overview/recipe_container';
import StepContainer from '../recipe_walkthrough/WALKTHROUGH/step_container/step_container';
import IngredientsList from '../recipe_overview/ingredients_list';
import StepWalkthroughContainer from '../recipe_walkthrough/WALKTHROUGH/sidebar_checklist';
function RecipeWalkthrough() {
    const location = useLocation()
    const recipeData = location.state

    const findStep = (order) => {        
        for (let step of recipeData.steps) {
            if (step.order === order) {
                return step
            };
        };
        return false
    }

    const [currentOrder, setCurrentOrder] = useState(1)
    const [currentStep, setCurrentStep] = useState(findStep(currentOrder))
    
    const advanceStep = () => {
        const nextStepNum = currentOrder + 1
        const nextStep = findStep(nextStepNum)
        if (!nextStep) {
            return null
        } else {
            setCurrentOrder(nextStepNum)
            setCurrentStep(nextStep)
        }
    }

    return (
        <div className="relative grid grid-col-4">
            <div className="sticky top-0 m-5 h-8">
                <RecipeOverview recipe={recipeData}/>
            </div>
            <div className="col-end-5 col-span-3 m-5">
                <StepWalkthroughContainer />
                <IngredientsList ingredients = {recipeData.ingredients} />
                <br/>
                <StepContainer step={currentStep} changeStep={advanceStep}/>
            </div>
        </div>
    );
}

export default RecipeWalkthrough;