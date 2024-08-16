import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import logo from '../assets/logo.jpg';
import Name_logo from "../assets/Name_logo.png";

const Navbar = () => {
    const { language, toggleLanguage } = useContext(LanguageContext);

    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="flex items-center justify-between py-6 bg-white text-black shadow-lg">
            <div className="flex items-center">
                <img src={logo} alt="Bagavan Digital-logo" className="ml-5 w-10 h-10"/>
                <img src={Name_logo} alt="Bagavan Digital-logo" className="ml-5 w-100 h-12"/>
            </div>
            <ul className="flex space-x-4 mr-10">
                <li>
                    <button 
                        onClick={() => scrollToSection('introduction')}
                        className="px-4 py-2 bg-indigo-800 text-white rounded hover:bg-indigo-700 transition"
                    >
                        Introduction
                    </button>
                </li>
                <li>
                    <button 
                        onClick={() => scrollToSection('experience')}
                        className="px-4 py-2 bg-indigo-800 text-white rounded hover:bg-indigo-700 transition"
                    >
                        Experience
                    </button>
                </li>
                <li>
                    <button 
                        onClick={() => scrollToSection('services')}
                        className="px-4 py-2 bg-indigo-800 text-white rounded hover:bg-indigo-700 transition"
                    >
                        Services
                    </button>
                </li>
                <li>
                    <button 
                        onClick={() => scrollToSection('contact')}
                        className="px-4 py-2 bg-indigo-800 text-white rounded hover:bg-indigo-700 transition"
                    >
                        Contact
                    </button>
                </li>
                <li>
                    <button
                        onClick={toggleLanguage}
                        className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition animate-blink-3d"
                    >
                        {language === 'en' ? 'தமிழ்' : 'English'}
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
