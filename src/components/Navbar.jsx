import logo from "../assets/logo.jpg"
import React from 'react'

const Navbar = () => {
    return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className='flex flex-shrink-0 items-center'>
            <img src={logo} alt="Bagavan Digital-logo" className="ml-5 w-14 h-14"/>
        </div>
    </nav>
    );
};

export default Navbar
