import React from 'react';
import Userfront from "@userfront/react";


Userfront.init("vndxxrvn");
const PasswordResetForm = Userfront.build({
    toolId: "omalmm"
});

function PasswordReset(){

    return (
            <div className='mt-8'>
                <PasswordResetForm/>
            </div>
    )
}



export default PasswordReset

