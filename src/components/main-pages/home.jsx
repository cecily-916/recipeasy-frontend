import React from "react";
import ListContainer from "../recipes-list/list-container";
import { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import Userfront from '@userfront/react';
import ArchivePopup from '../archive/archive_popup.js';
import SearchBar from "../recipes-list/search_bar"
import SearchButton from "../recipes-list/search_button"

function Home() {
    const user=Userfront.user

    const [recipesData, setRecipesData] = useState([]);
    const [archiveButton, setArchiveButton] = useState(false)
    const [change, setChange] = useState();
    const [searchBar, setSearchBar] = useState(false)
    const [foundRecipes, setFoundRecipes] = useState([]);

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
        <div className=" bg-fixed bg-top bg-bg-img bg-cover pb-3 ">
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
                            text-black
                            hover:border-primary 
                            hover:bg-emerald-800 hover:text-emerald-800
                            transition"
                    >Create Recipe</Link>
                </div>
                <SearchButton trigger={searchBar} setChange={setChange} setTrigger={setSearchBar} />
                <SearchBar setChange={setChange} trigger={searchBar} recipes={recipesData} setFoundRecipes={setFoundRecipes} />
            </div>
            <ListContainer recipes={foundRecipes}/>
            <button className="
                        text-xl
                        font-quicksand 
                        align-center
                        py-2
                        px-7
                        border border-[#E5E7EB]
                        bg-white
                        rounded-full
                        text-black
                        hover:border-primary 
                        
                        hover:bg-emerald-800 hover:text-emerald-800
                        transition" onClick={()=>setArchiveButton(true)}>Archive</button>
            <ArchivePopup change={change} setChange={setChange} userID={user.userId} trigger={archiveButton} setTrigger={setArchiveButton}/>
        </div>
    );
}


export default Home;