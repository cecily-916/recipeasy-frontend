import React from "react";
import ListContainer from "../recipes-list/list-container";
import { useEffect, useState } from "react";
import axios from "axios"
import { Link, useLocation } from "react-router-dom";
import Userfront from '@userfront/react';
import Collection from "../recipes-list/collections/collection";

function CurrentCollection() {

    const location = useLocation()
    const collection = location.state

    const [collectionData, setCollectionData] = useState({Recipes:[]});

    useEffect(()=> {
        axios
            .get(`http://localhost:8080/collections/${collection.ID}`)
            .then((response) => {
            console.log(response);
            setCollectionData(response.data)
            })
            .catch((error) => {
            console.log("nope");
            });
    }, []);
    console.log(collectionData.Recipes)
    return (
        <div className=" bg-fixed bg-top bg-coll-img bg-cover pb-3 ">
            <header className="scroll-smooth pt-3 text-8xl text-center text-emerald-900">{collection.name}</header>
            <p className= "mt-16 text-lg text-center text-white">
                {/* Welcome to Recipeasy, where all your favorite recipes are just so easy peasy. */}
            </p>
            <ListContainer recipes={collectionData.Recipes}/>
        </div>
    );
}


export default CurrentCollection;