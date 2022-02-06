import React from "react";
import { PasswordReset } from ".";
import { useEffect, useState} from 'react';
import axios from 'axios';

function Profile({user}) {

    const [currentUser, setCurrentUser] = useState()

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
    }, [user.userId]);

    console.log(currentUser.name)
    return (
    <div className="profile">
        <div className="container">
        <div className="row align-items-center my-5">
            <h1>Welcome {currentUser.name}</h1>
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

// Include the reset password thing
{/* <div className="col-lg-5">
<h1 className="font-weight-light">Profile Settings</h1>
<PasswordReset />
</div> */}