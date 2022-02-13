import { useLocation } from 'react-router-dom'
import { useEffect, useState } from "react";
import RecipeOverview from '../recipe_overview/recipe_container';
import StepsContainer from '../recipe_walkthrough/WALKTHROUGH/step_container/steps_container';
import IngredientsList from '../recipe_overview/ingredients_list';
import SidebarChecklist from '../recipe_walkthrough/WALKTHROUGH/sidebar_checklist';
import Speech from '../recipe_walkthrough/WALKTHROUGH/step_container/speech_recognition';
import React from 'react';
import ConversionPopup from '../recipe_walkthrough/conversion_popup/conversion_popup';

function RecipeWalkthrough() {
    const location = useLocation()
    console.log(location)
    useEffect(() => {window.scrollTo(0,0)},[])
    const recipeData = location.state
    
    const [sideBar, setSideBar] = useState(true)
    const [conversionPopup, setConversionPopup] = useState(false)

    const [currentStepNum, setCurrentStepNum] = useState(1)
    console.log(currentStepNum)

    const flip = () => {
        if (conversionPopup) {
            return false
        } else {
            return true
        }
    }
    console.log(conversionPopup)
    return sideBar ? (
        <div className=" grid grid-col-5">
            <div className="sticky top-8 m-5 h-8 z-10">
            <button className="
                    text-lg
                    font-quicksand 
                    align-center
                    py-1.5
                    px-3
                    border border-white
                    bg-slate-100
                    rounded-full
                    text-black
                    hover:border-primary 
                    ml-14
                    hover:bg-emerald-800 hover:text-white
                    transition" onClick={()=>setSideBar(false)}>Hide sidebar</button>
                <Speech currentStep={currentStepNum} setCurrentStepNum={setCurrentStepNum}/>
                <br />
                <button className="
                    text-lg
                    font-quicksand 
                    align-center
                    py-1.5
                    px-3
                    border border-white
                    bg-slate-100
                    rounded-full
                    text-black
                    hover:border-primary 
                    ml-14
                    hover:bg-emerald-800 hover:text-white
                    transition" onClick={()=>setConversionPopup(flip())}>Conversion Chart</button>
                {
                    {true: (
                        <div className="max-w-full py-4 mx-auto">
                            <img
                                className=""
                                src="https://www.tablespoon.com/-/media/Images/Articles/Images-for-Posts-PrePandoNext/2009/09/week2/Tbsp_conversion_Updated2.jpg"
                                alt="conversionchart"
                            />
                        </div>),
                    }[conversionPopup]}
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