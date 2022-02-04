import React from "react";
import { PasswordReset } from ".";

function Profile() {
    return (
    <div className="profile">
        <div className="container">
        <div className="row align-items-center my-5">
            <div className="col-lg-5">
            <h1 className="font-weight-light">Profile Settings</h1>
            <PasswordReset />
            </div>
        </div>
        </div>
    </div>
    );
}

export default Profile;

