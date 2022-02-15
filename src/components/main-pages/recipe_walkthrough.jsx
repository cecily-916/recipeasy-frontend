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
            <div className="sticky top-1 mx-3 h-2 min-w-fit">
                    {/* <section className='bg-white p-2 m-5'> */}
                        <div className=' grid grid-cols-3 grid-rows-1 gap-1 -ml-3 mr-3 '>
                        <button className="
                            row-start-1 col-start-1
                            border border-[#E5E7EB]
                            w-full
                            rounded-md 
                            text-base text-body-color 
                            font-medium 
                            shadow-sm 
                            // m-3 
                            cursor-pointer
                            bg-white
                            p-3
                            text-emerald-800 hover:text-amber-500 "
                            onClick={()=>setSideBar(false)}>
                            <span className="text-4xl material-icons-outlined">
                            all_out
                            </span>
                            <br/>
                                fullscreen
                        </button>
                        <button
                            className="
                        border border-[#E5E7EB]
                        rounded-md 
                        row-start-1 col-start-2
                        w-full
                        bg-white
                        text-base text-body-color 
                        font-medium 
                        shadow-sm 
                        m-3 
                        cursor-pointer
                        p-3
                        text-emerald-800 hover:text-amber-500 "
                        >
                        <Speech currentStep={currentStepNum} setCurrentStepNum={setCurrentStepNum} isListening={isListening} setIsListening={setIsListening}/>          
                        </button>
                        <button className="
                            border border-[#E5E7EB]
                            row-start-1 col-start-3
                            rounded-md 
                            text-base text-body-color 
                            min-w-fit
                            overflow
                            font-medium 
                            shadow-sm 
                            bg-white
                            m-3 
                            cursor-pointer
                            p-3
                            text-emerald-800 hover:text-amber-500" onClick={()=>setConversionPopup(flip())}>
                            <span class="text-4xl material-icons-outlined">sync_alt</span>
                            <br />
                            <p className="text-sm ">conversions</p></button>
                        
                        </div>
                        <div className=" min-h-content bg-white rounded-md p-4 ">
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
                {/* </section> */}
            </div>
            </div>
            <div className="col-end-6 col-span-4">
            <StepsContainer  recipe={recipeData} currentStep={currentStepNum} setSideBar={setSideBar} setIsListening={setIsListening} isListening={isListening} setCurrentStepNum={setCurrentStepNum} sideBar={sideBar} setConversionPopup={setConversionPopup}/>
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