import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from "react";
// import StepIngredients from './step_ingredients'
import axios from 'axios';
import RecipeOverview from '../overview_container/recipe_container';
import StepContainer from '../step_container/step_container';

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
        <div className="grid grid-col-4">
            <div className="col-span-1 m-5">
                <RecipeOverview recipe={recipeData}/>
            </div>
            <div className="col-end-5 col-span-3 m-5">
                <StepContainer step={currentStep} changeStep={advanceStep}/>
            </div>
        </div>
    );
}

export default RecipeWalkthrough;