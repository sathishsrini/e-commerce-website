import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import logo from '../assets/logo.jpg';

const Navbar = () => {
    const { language, toggleLanguage } = useContext(LanguageContext);

    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="Bagavan Digital-logo" className="ml-5 w-10 h-10"/>
            </div>
            <button
                onClick={toggleLanguage}
                className="mr-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
            >
                {language === 'en' ? 'தமிழ்' : 'English'}
            </button>
        </nav>
    );
};

export default Navbar;
