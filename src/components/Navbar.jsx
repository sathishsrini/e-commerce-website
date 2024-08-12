import logo from "../assets/logo.jpg"
import React from 'react'

const Navbar = () => {
    return (
    <nav className="bg-red-800 mb-20 flex items-center justify-between py-6">
        <div className='flex flex-shrink-0 items-center'>
            <img src={logo} alt="Bagavan Digital-logo"/>
        </div>
    </nav>
    );
};

export default Navbar
