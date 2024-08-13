import React, { createContext, useState } from 'react';

// Create the context
export const LanguageContext = createContext();

// Create a provider component
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en'); // Default to English

    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === 'en' ? 'ta' : 'en'));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
