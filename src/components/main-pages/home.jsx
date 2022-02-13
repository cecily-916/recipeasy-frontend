import React from "react";
import ListContainer from "../recipes-list/list-container";
import { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import Userfront from '@userfront/react';
import ArchivePopup from '../archive/archive_popup.js';
import SearchBar from "../recipes-list/search_bar"
import SearchButton from "../recipes-list/search_button"
import FeedbackForm from "../archive/feedback";

function Home() {
    const user=Userfront.user

    const [recipesData, setRecipesData] = useState([]);
    const [archiveButton, setArchiveButton] = useState(false)
    const [change, setChange] = useState();
    const [searchBar, setSearchBar] = useState(false)
    const [foundRecipes, setFoundRecipes] = useState([]);
    const [feedbackForm, setFeedbackForm] = useState(false)

    console.log( process.env)
    useEffect(()=> {
        axios
            .get(`${process.env.REACT_APP_BACKEND_URL}/${user.userId}/recipes`)
            .then((response) => {
            console.log(response);
            setRecipesData(response.data)
            setFoundRecipes(response.data)
            })
            .catch((error) => {
            console.log("nope");
            });
    }, [change]);


    return (
        <div className=" bg-top bg-bg-img bg-cover min-h-screen">
            <header className="scroll-smooth pt-3 text-8xl pb-9 text-center text-white">Recipeasy</header>
            <div className="flex 
                flex-wrap 
                flex-row 
                justify-start mx-24 mt-4">
                <div className="mx-auto my-2 h-8 w-fit">
                        <Link to="./new_recipe" className="
                                text-xl
                                font-quicksand 
                                align-center
                                py-2
                                px-7
                                border border-[#E5E7EB]
                                bg-white
                                rounded-full
                                text-emerald-900
                                hover:border-primary 
                                hover:bg-emerald-800 hover:text-emerald-800
                                transition"
                        >Create Recipe</Link>
                </div>
                <SearchButton trigger={searchBar} setChange={setChange} setTrigger={setSearchBar} />
                <SearchBar setChange={setChange} trigger={searchBar} recipes={recipesData} setFoundRecipes={setFoundRecipes} />
            </div>
            <div className="h-5/6">
            <ListContainer recipes={foundRecipes}/>
            </div>
            <button className="
                        text-md
                        font-quicksand 
                        align-center
                        py-1.5
                        px-3
                        border border-slate-100
                        bg-slate-200
                        rounded-full
                        text-slate-600
                        hover:border-primary 
                        mb-8 ml-14
                        hover:bg-slate-400 hover:text-white
                        transition" onClick={()=>setArchiveButton(true)}>Manage Archived Recipes</button>
            <ArchivePopup change={change} setChange={setChange} userID={user.userId} trigger={archiveButton} setTrigger={setArchiveButton}/>
            <button className="
                        text-md
                        font-quicksand 
                        align-center
                        py-1.5
                        px-3
                        border border-slate-100
                        bg-slate-200
                        rounded-full
                        text-slate-600
                        hover:border-primary 
                        mb-8 ml-14
                        hover:bg-slate-400 hover:text-white
                        transition" onClick={()=>setFeedbackForm(true)}>Submit Feedback</button>
            <FeedbackForm trigger={feedbackForm} setTrigger={setFeedbackForm}/>
        </div>
    );
}


export default Home;