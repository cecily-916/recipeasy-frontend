import React from "react";
import { useEffect, useState} from 'react';
import axios from 'axios';
import Userfront from '@userfront/react';
import AddCollectionPopup from '../recipes-list/collections/add_collection_button';


function Profile() {
    const user=Userfront.user

    const [userData, setUserData] = useState({name: ""})
    const [collectionButton, setCollectionButton] = useState(false)

    console.log(user.userId)
    
    useEffect(()=> {
        axios
            .get(`http://localhost:8080/${user.userId}`)
            .then((response) => {
            console.log(response);
            setUserData(response.data)
            })
            .catch((error) => {
            console.log("error: Get request failed.");
            });
    }, [user.userId]);


    return (
    <div className="profile">
        <div className="container">
        <div className="row align-items-center my-5">
            <h1>Welcome {userData.name}</h1>
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
            <AddCollectionPopup userid={userData.ID} trigger={collectionButton} setTrigger={setCollectionButton}></AddCollectionPopup>

        </div>
        </div>
    </div>
    );
}

export default Profile;