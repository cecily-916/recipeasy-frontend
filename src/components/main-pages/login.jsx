import React from 'react';
import Userfront from "@userfront/react";


Userfront.init("vndxxrvn");

const LoginForm = Userfront.build({
    toolId: "dnranl"
});

function UserLogin(){

    return (
            <div className='mt-8'>
                <LoginForm />
            </div> 
    )
}



export default UserLogin
