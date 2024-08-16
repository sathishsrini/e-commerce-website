import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="container mx-auto mt-10 px-4 relative">
            <div className="absolute inset-0 rounded-lg bg-slate-950 overflow-hidden">
                <div className="absolute bottom-[-20%] left-[-20%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
                <div className="absolute top-[-20%] right-[-20%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
            </div>
            <div className="relative z-10 text-white p-6 rounded-lg">
                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                <p className="text-lg mb-6">
                    For your digital advertising needs and any other inquiries, please reach out to us using the contact details below. We are here to assist you with all your requirements.
                </p>
                <div className="flex items-center mb-4">
                    <FaEnvelope className="text-2xl mr-4 text-blue-500" />
                    <a href="mailto:seenug1970@gmail.com" className="text-lg">
                        seenug1970@gmail.com
                    </a>
                </div>
                <div className="flex items-center mb-4">
                    <FaPhone className="text-2xl mr-4 text-green-500" />
                    <a href="tel:+9444002317" className="text-lg">
                        9444002317
                    </a>
                </div>
                <div className="flex items-center mb-4">
                    <FaMapMarkerAlt className="text-2xl mr-4 text-red-500" />
                    <a href="https://maps.app.goo.gl/WLZUyYfPvbisFXwg7" target="_blank" rel="noopener noreferrer" className="text-lg">
                        View Location on Google Maps
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
