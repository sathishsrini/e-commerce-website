import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="container mx-auto mt-10 px-4">
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
            {/* <div className="flex justify-center mt-8">
                <img 
                    src="https://maps.googleapis.com/maps/api/staticmap?center=12.9715987,77.5945627&zoom=15&size=600x300&maptype=roadmap&key=YOUR_API_KEY" 
                    alt="Google Maps Location"
                    className="rounded-lg shadow-lg"
                />
            </div> */}
        </div>
    );
};

export default Contact;
