import React from "react";
import { useEffect, useState} from 'react';
import axios from 'axios';
import Userfront from '@userfront/react';
import AddCollectionPopup from '../recipes-list/collections/add_collection_button';
import CollectionsListContainer from "../recipes-list/collections/collections_list_container";

function Profile() {
    const user=Userfront.user

    const [userData, setUserData] = useState("")
    const [collectionsData, setCollectionsData] = useState([])
    const [collectionButton, setCollectionButton] = useState(false)
    const [pageUpdate, setPageUpdate] = useState()
    
    useEffect(()=> {
        axios
            .get(`${process.env.REACT_APP_BACKEND_URL}/${user.userId}`)
            .then((response) => {
            console.log(response);
            setUserData(response.data)
            })
            .catch((error) => {
            console.log("error: Get request failed.");
            });
    }, []);

    useEffect(()=> {
        axios
            .get(`${process.env.REACT_APP_BACKEND_URL}/${user.userId}/collections`)
            .then((response) => {
            console.log(response);
            setCollectionsData(response.data)
            })
            .catch((error) => {
            console.log("error: Get request failed.");
            });
    }, [pageUpdate]);
    console.log(collectionsData)

    return (
    <div className="profile">
        <div className="container">
        <div className="row align-items-center my-5">
            <h1>{userData.name}'s Collections</h1>
            <br />
            <button 
                        onClick={() => setCollectionButton(true)}
                        className="
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
                >New Collection</button>
            <AddCollectionPopup userid={user.userId} setPageUpdate={setPageUpdate} trigger={collectionButton} setTrigger={setCollectionButton}></AddCollectionPopup>
        </div>
        {/* <Collection>Something</Collection> */}
        </div>
        <CollectionsListContainer collections={collectionsData} setPageUpdate={setPageUpdate}/>
    </div>
    );
};


export default Profile;