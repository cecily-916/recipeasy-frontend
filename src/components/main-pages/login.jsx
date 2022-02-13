import React from 'react';
import Userfront from "@userfront/react";


Userfront.init("vndxxrvn");

const LoginForm = Userfront.build({
    toolId: "dnranl"
});

function UserLogin(){

    return (
        <div className="bg-home-img bg-cover min-h-screen pb-24 ">
            <header className="pt-3 text-8xl text-center text-emerald-900">Recipeasy</header>
            <div className="m-auto max-w-lg max-h-fit bg-[#85878ad1] rounded-md shadow-xl">
                <h1 className= "mt-16 pt-4 text-lg font-extrabold text-center text-white">
                    Where all your favorite recipes are just so easy peasy.
                </h1>
                <div className='p-8'>
                    <LoginForm />
                </div>
            </div>
        </div> 
    )
}



export default UserLogin
