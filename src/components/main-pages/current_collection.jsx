import React from "react";
import ListContainer from "../recipes-list/list-container";
import { useEffect, useState } from "react";
import axios from "axios"
import { Link, useLocation } from "react-router-dom";
import Userfront from '@userfront/react';
import Collection from "../recipes-list/collections/collection";
import SearchBar from "../recipes-list/search_bar";
import SearchButton from "../recipes-list/search_button";
function CurrentCollection() {

    const location = useLocation()
    const collection = location.state

    const [collectionData, setCollectionData] = useState({Recipes:[]});
    const [change, setChange] = useState();
    const [searchBar, setSearchBar] = useState(false)
    const [foundRecipes, setFoundRecipes] = useState([]);

    useEffect(()=> {
        axios
            .get(`${process.env.REACT_APP_BACKEND_URL}/collections/${collection.ID}`)
            .then((response) => {
            console.log(response);
            setCollectionData(response.data)
            setFoundRecipes(response.data.Recipes)
            })
            .catch((error) => {
            console.log("nope");
            });
    }, [change]);

    return (
        <div className=" bg-fixed bg-top bg-coll-img bg-cover pb-3 ">
            <header className="scroll-smooth pt-3 text-8xl text-center text-emerald-900">{collection.name}</header>
            <p className= "mt-16 text-lg text-center text-white">
            </p>
            <div className="flex 
                flex-wrap 
                flex-row 
                justify-end mx-24 mt-4">
                <SearchButton trigger={searchBar} setChange={setChange} setTrigger={setSearchBar} />
                <SearchBar setChange={setChange} trigger={searchBar} recipes={collectionData.Recipes} setFoundRecipes={setFoundRecipes} />
            </div>
            <ListContainer recipes={foundRecipes}/>
        </div>
    );

}


export default CurrentCollection;