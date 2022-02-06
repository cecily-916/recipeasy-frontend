import React from "react";
import { useEffect, useState} from 'react';
import axios from 'axios';
import Userfront from '@userfront/react';
import AddName from '../profile/add_name';

function Profile() {
    const user=Userfront.user

    const [currentUser, setCurrentUser] = useState({})
    
    useEffect(()=> {
        console.log(user.userId);
        axios
            .get(`http://localhost:8080/${user.userId}`)
            .then((response) => {
            console.log(response);
            setCurrentUser(response.data)
            })
            .catch((error) => {
            console.log("nope");
            });
    },[user.userId]);
    console.log(currentUser)

    // const [addNameButton, setAddNameButton] = useState(false)

    return (
    <div className="profile">
        <div className="container">
        <div className="row align-items-center my-5">
            <h1>Welcome {currentUser.name}</h1>
        {/* <button onClick={() => setAddNameButton(true)}>Edit Name</button> */}
        {/* <AddName user={currentUser} trigger={addNameButton} setTrigger={setAddNameButton}/> */}

            {/* <img
                className="rounded-sm max-h-60 max-w-fit content-center"
                src={recipeData.image}
                alt=""
                /> */}
        </div>
        </div>
    </div>
    );
}

export default Profile;