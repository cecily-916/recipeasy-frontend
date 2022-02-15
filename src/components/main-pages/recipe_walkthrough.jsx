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
    const [isListening, setIsListening] = useState(false);

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
        <div className=" grid grid-col-5 bg-newreci-img bg-right bg-fixed">
            <div className="sticky top-1 mx-3 h-2">
                <div className=" min-h-content bg-[#67704C] bg-opacity-60 rounded-md">
                    <section className='bg-white p-2 m-5'>
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
                            transition" onClick={()=>setSideBar(false)}>
                            <span className="text-4xl material-icons-outlined">
                            all_out
                            </span>
                            <br/>
                                Fullscreen
                        </button>
                        <Speech currentStep={currentStepNum} setCurrentStepNum={setCurrentStepNum} isListening={isListening} setIsListening={setIsListening}/>
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
                        <SidebarChecklist recipe={recipeData} stepNum={currentStepNum} setCurrentStepNum={setCurrentStepNum} />
                        <br/>
                        <IngredientsList ingredients = {recipeData.ingredients} />
                </section>
            </div>
            </div>
            <div className="col-end-6 col-span-4">
                <StepsContainer  recipe={recipeData} currentStep={currentStepNum} setSideBar={setSideBar} setCurrentStepNum={setCurrentStepNum} sideBar={sideBar} setConversionPopup={setConversionPopup}/>
            </div>
        </div>
    ):(
    <div>
        <div className="col-end-6 col-span-4">
            <StepsContainer  recipe={recipeData} currentStep={currentStepNum} setSideBar={setSideBar} setIsListening={setIsListening} isListening={isListening} setCurrentStepNum={setCurrentStepNum} sideBar={sideBar} setConversionPopup={setConversionPopup}/>
            <button onClick={()=>document.body.scrollTop = document.documentElement.scrollTop = 0}>Back to top</button>
        </div>
    </div>
    )
}

export default RecipeWalkthrough;