import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloatingButton = () => {
    const phoneNumber = '9444002317'; 
    const message = "Hi, this is a new customer. I need your services.";

    const handleClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div 
            className="fixed bottom-4 right-4 z-50 p-3 bg-green-500 text-white rounded-full shadow-lg cursor-pointer animate-blink-3d"
            onClick={handleClick}
            title="Chat with us on WhatsApp"
        >
            <FaWhatsapp size={24} />
        </div>
    );
};

export default WhatsAppFloatingButton;
