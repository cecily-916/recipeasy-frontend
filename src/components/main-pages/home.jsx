import React from "react";
import ListContainer from "../recipes-list/list-container";
import { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import Userfront from '@userfront/react';
import ArchivePopup from '../archive/archive_popup.js';

function Home() {
    const user=Userfront.user

    const [recipesData, setRecipesData] = useState([]);
    const [archiveButton, setArchiveButton] = useState(false)
    const [change, setChange] = useState();

    useEffect(()=> {
        axios
            .get(`http://localhost:8080/${user.userId}/recipes`)
            .then((response) => {
            console.log(response);
            setRecipesData(response.data)
            })
            .catch((error) => {
            console.log("nope");
            });
    }, [change]);


    return (
        <div className=" bg-fixed bg-top bg-bg-img bg-cover pb-3 ">
            <header className="scroll-smooth pt-3 text-8xl text-center text-white">Recipeasy</header>
            <p className= "mt-16 text-lg text-center text-white">
                {/* Welcome to Recipeasy, where all your favorite recipes are just so easy peasy. */}
            </p>
            <ListContainer recipes={recipesData}/>
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