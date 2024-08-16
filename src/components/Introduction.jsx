import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { LanguageContext } from './LanguageContext';
import introImage from '../assets/intro.avif';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0, opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Introduction = () => {
  const { language } = useContext(LanguageContext);
  const content = {
    en: {
      title: "Bagavan Digital",
      text: "Bagavan Digital is a leading name in the digital printing industry, offering high-quality printing solutions for over 15 years. Known for our commitment to excellence and timely delivery, we have established ourselves as a trusted partner for businesses and individuals alike. Our dedication to quality and customer satisfaction has made us a go-to choice for all types of printing needs.",
    },
    ta: {
      title: "அறிமுகம்",
      text: "பகவான் டிஜிட்டல், 15 ஆண்டுகளுக்கும் மேலாக உயர் தரமான அச்சிடல் தீர்வுகளை வழங்கி வரும் டிஜிட்டல் அச்சிடல் தொழிலில் முன்னணி பெயராக விளங்குகிறது. மிகுதி மற்றும் நேரமான விநியோகத்திற்கு நாங்கள் நமக்கு நம்பகமான துணையாக எம்மை நிறுவியுள்ளோம். தரமும் வாடிக்கையாளர் திருப்தியும் மீதம் வைக்க எங்களை நாங்கள் சமர்ப்பித்து வந்துள்ளோம்.",
    },
  };

  return (
    <div className="relative min-h-screen border-b border-neutral-900 pb-4 lg:mb-35">
      {/* Background Div */}
      <div className="absolute top-0 left-0 w-full h-full z-0 transform rotate-180 bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,0.5)_100%)]"></div>

      {/* Content Div */}
      <div className="flex flex-wrap justify-center items-center relative z-10">
        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <div className="container mx-auto mt-10 ml-10 px-4">
            <motion.h2
              variants={container(0)}
              initial="hidden"
              whileInView="visible" // This makes the animation trigger on scroll
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4 lg:text-5xl"
            >
              {content[language].title}
            </motion.h2>
            <motion.p
              variants={container(0.5)}
              initial="hidden"
              whileInView="visible" // This makes the animation trigger on scroll
              viewport={{ once: true }}
              className="text-lg max-w-xl py-6 font-light tracking-tighter"
            >
              {content[language].text}
            </motion.p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }} // This makes the animation trigger on scroll
              transition={{ duration: 1, delay: 1.2 }}
              viewport={{ once: true }}
              src={introImage}
              alt="Introduction"
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
