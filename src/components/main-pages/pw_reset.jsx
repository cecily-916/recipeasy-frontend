import React from 'react';
import Userfront from "@userfront/react";


Userfront.init("vndxxrvn");
const PasswordResetForm = Userfront.build({
    toolId: "omalmm"
});

function PasswordReset(){

    return (
        <div className='bg-emerald-800'>
            <div className='mt-8'>
                <PasswordResetForm/>
            </div>
        </div>
    )
}



export default PasswordReset

