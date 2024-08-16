import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/contact';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import './index.css';

const App = () => {
    return (
        <div>
            <Navbar />
            {/* Wrapping each section in an Element with a name */}
            <Element name="introduction">
                <Introduction />
            </Element>
            <Element name="experience">
                <Experience />
            </Element>
            <Element name="services">
                <Services />
            </Element>
            <Element name="contact">
                <Contact />
            </Element>
            <WhatsAppFloatingButton />
        </div>
    );
};

export default App;
