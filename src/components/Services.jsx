import React, { useContext, useState } from 'react';
import { LanguageContext } from './LanguageContext';
import { motion } from 'framer-motion';
import flexImage from '../assets/flex.avif';
import visitingImage from '../assets/visiting.avif';
import posterImage from '../assets/poster.avif';
import acrylicImage from '../assets/arcylic.avif';
import wallImage from '../assets/wall.avif';
import lightboardImage from '../assets/lightboard.avif';

const images = [
  { src: flexImage, name: "Flex Printing" },
  { src: visitingImage, name: "Visiting Cards" },
  { src: posterImage, name: "Posters" },
  { src: acrylicImage, name: "Acrylic Boards" },
  { src: wallImage, name: "Wall Posters" },
  { src: lightboardImage, name: "Light Boards" },
];

const container = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  const { language } = useContext(LanguageContext);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const content = {
    en: {
      title: "Services",
      items: [
        { name: "Flex Printing", description: "Available in different materials, our flex printing services are perfect for banners, hoardings, and other large-format displays." },
        { name: "Visiting Cards", description: "We provide high-quality visiting card printing that leaves a lasting impression, with various customization options to suit your brand." },
        { name: "Posters", description: "Whether for advertising, events, or personal use, our poster printing services deliver vibrant and durable results." },
        { name: "Acrylic Boards", description: "Our acrylic board printing services are ideal for creating sleek and professional signage that stands out." },
        { name: "Wall Posters", description: "We specialize in producing wall posters that are perfect for decorating spaces with impactful visuals." },
        { name: "Light Boards", description: "Our light board printing services are among our most popular offerings, known for their eye-catching illumination and durability." },
      ]
    },
    ta: {
      title: "சேவைகள்",
      items: [
        { name: "ஃப்ளெக்ஸ் அச்சிடல்", description: "விண்ணப்பங்களுக்கான, விளம்பரங்களுக்கு, ஹோர்டிங்களுக்கு, மற்றும் மற்ற பெரிய அளவிலான காட்சிகளுக்கு எங்கள் ஃப்ளெக்ஸ் அச்சிடல் சேவைகள் மிகுந்த பொருத்தமாக உள்ளன." },
        { name: "பயண அட்டைகள்", description: "எங்கள் பயண அட்டைகள் உங்கள் பிராண்ட் அமைப்புக்கு அம்சங்களை பொருத்தும் என்ற ஒரு சிறப்பான மற்றும் உள்ளகமான பொருட்களை தருகிறது." },
        { name: "அபிப்பிராயங்கள்", description: "விளம்பரங்களுக்கு, நிகழ்வுகளுக்கு, அல்லது தனிப்பட்ட பயன்பாட்டுக்கு எங்கள் அபிப்பிராயங்கள் ஒளிரும் மற்றும் திடமாக்கும் முடிவுகளை தருகின்றன." },
        { name: "அக்ரிலிக் போர்டுகள்", description: "எங்கள் அக்ரிலிக் போர்டு அச்சிடல் சேவைகள் ஒரு மென்மையான மற்றும் தொழில்முறை விளம்பரத்தை உருவாக்க மிகவும் பொருத்தமானது." },
        { name: "சுவர் அட்டைகள்", description: "விளக்கப்படுத்தல் பகுதி மிகவும் விளக்கமாக இருக்கும்." },
        { name: "விளக்கக் குழுக்கள்", description: "எங்கள் விளக்கக் குழுக்கள் எங்கள் மிகவும் பிரபலமான பொருட்களில் ஒன்றாக விளங்குகிறது, சுவாரசியமான ஒளிர்வு மற்றும் திடமான தன்மையை கொண்டது." },
      ]
    }
  };

  const handleImageClick = (index) => {
    setSelectedService(content[language].items[index]);
    setSelectedIndex(index);
  };

  const handleBackClick = () => {
    setSelectedService(null);
    setSelectedIndex(null);
  };

  return (
    <div className="relative min-h-relative pt-1 pb-10 w-full bg-slate-950">
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-relative w-relative rounded bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-relative w-relative rounded bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>

      <div className="container mx-auto mt-10 px-4">
        <h2 className="text-3xl font-bold mb-4 text-white">{content[language].title}</h2>
        <motion.div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ${selectedService ? 'hidden' : ''}`}
          initial="hidden"
          whileInView="visible"
          variants={container}
        >
          {content[language].items.map((service, index) => (
            <motion.div
              key={index}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
              variants={item}
              whileHover={{ scale: 1.05, rotateY: 15 }}
              transition={{ duration: 0.5 }}
              onClick={() => handleImageClick(index)}
            >
              <img src={images[index].src} alt={service.name} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h3 className="text-2xl font-semibold text-white">{service.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {selectedService && (
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-center mt-8 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={images[selectedIndex].src}
              alt={selectedService.name}
              className="w-full lg:w-1/2 h-auto object-cover mb-4 lg:mb-0"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            />
            <motion.div
              className="lg:ml-8 w-full lg:w-1/2 text-white"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{selectedService.name}</h3>
              <p className="text-lg">{selectedService.description}</p>
            </motion.div>
            <button
              onClick={handleBackClick}
              className="absolute top-2 right-2 bg-gray-800 text-white px-3 py-1 rounded"
            >
              Back
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Services;
