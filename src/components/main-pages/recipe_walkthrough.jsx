import { useLocation } from 'react-router-dom'
import { useEffect, useState } from "react";
// import StepIngredients from './step_ingredients'
import RecipeOverview from '../recipe_overview/recipe_container';
import StepsContainer from '../recipe_walkthrough/WALKTHROUGH/step_container/steps_container';
import IngredientsList from '../recipe_overview/ingredients_list';
import SidebarChecklist from '../recipe_walkthrough/WALKTHROUGH/sidebar_checklist';
import Speech from '../recipe_walkthrough/WALKTHROUGH/step_container/speech_recognition';

function RecipeWalkthrough() {
    const location = useLocation()
    console.log(location)
    useEffect(() => {window.scrollTo(0,0)},[])
    const recipeData = location.state
    
    const [sideBar, setSideBar] = useState(true)

    const [currentStepNum, setCurrentStepNum] = useState(1)
    console.log(currentStepNum)
    return sideBar ? (
        <div className=" grid grid-col-5">
            <div className="sticky top-8 m-5 h-8">
                <button onClick={()=>setSideBar(false)}>Hide sidebar</button>
                <Speech currentStep={currentStepNum} setCurrentStepNum={setCurrentStepNum}/>
                <br />
                {/* <RecipeOverview recipe={recipeData}/> */}
                <SidebarChecklist recipe={recipeData} stepNum={currentStepNum} setCurrentStepNum={setCurrentStepNum}/>
                <br/>
                <IngredientsList ingredients = {recipeData.ingredients} />
            </div>

            <div className="col-end-6 col-span-4">
                <StepsContainer recipe={recipeData} currentStep={currentStepNum} setCurrentStepNum={setCurrentStepNum}/>
            </div>

        </div>
    ):(
        // <div className=" grid grid-col-5">
    <div>
        <div className="sticky top-8 m-5 h-8 inline">
            <button onClick={()=>setSideBar(true)}>Show sidebar</button>
            <Speech currentStep={currentStepNum} setCurrentStepNum={setCurrentStepNum}/>
            <br />
        </div> 
        <div className="col-end-6 col-span-4">
            <StepsContainer recipe={recipeData} currentStep={currentStepNum} setCurrentStepNum={setCurrentStepNum}/>
            <button onClick={()=>document.body.scrollTop = document.documentElement.scrollTop = 0}>Back to top</button>
        </div>

    </div>
    )
}

export default RecipeWalkthrough;