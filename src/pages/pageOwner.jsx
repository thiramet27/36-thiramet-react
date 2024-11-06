import React from "react";

function renderPage(){
    return(
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className='pb-9 text-5xl font-bold'>Beckham - Group F -36</h1>
            <img src="https://i.pinimg.com/736x/03/29/dd/0329dd592928957d90ab9f310f34ffca.jpg" alt="profile" className='pb-9 text-5xl font-bold'/>
            <h3 className='pb-9 text-5xl font-bold'>Short Biography</h3>
            <p className="px-96 text-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    );
}

export default renderPage;