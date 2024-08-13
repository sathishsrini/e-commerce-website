import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Experience from './components/Experience';
import Services from './components/Services';
import './index.css';
import Contact from './components/contact';


const App = () => {
    return (
        <div>
            <Navbar />
            <Introduction />
            <Experience />
            <Services />
            <Contact />
        </div>
    );
};

export default App;
