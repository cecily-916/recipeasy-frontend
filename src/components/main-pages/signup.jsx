import React from 'react';
import Userfront from "@userfront/react";


Userfront.init("vndxxrvn");
const SignupForm = Userfront.build({
    toolId: "mrnbro"
});

function UserSignUp(){

    return (

        <div className='mt-8'>
            <SignupForm/>
        </div>
    )
}



export default UserSignUp

