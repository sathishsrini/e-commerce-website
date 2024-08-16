import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { motion } from 'framer-motion';
import expImage from '../assets/exp.avif';

const container = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Experience = () => {
  const { language } = useContext(LanguageContext);
  const content = {
    en: {
      title: "Experience",
      text: "With more than a decade and a half of experience in the market, Bagavan Digital has honed its expertise in delivering top-notch printing services. Our extensive experience has allowed us to understand the unique needs of our clients and adapt to the ever-evolving demands of the industry. Our skilled team and state-of-the-art equipment ensure that we consistently produce superior results, no matter the size or complexity of the project."
    },
    ta: {
      title: "அனுபவம்",
      text: "சந்தையில் பத்து ஆண்டுகளுக்கும் மேலான அனுபவத்துடன், பகவன் டிஜிட்டல் உயர் தரமான அச்சிடல் சேவைகளை வழங்குவதில் தனது திறமையை மேம்படுத்தியுள்ளது. எங்கள் விரிவான அனுபவம் எங்கள் வாடிக்கையாளர்களின் தனித்துவமான தேவைகளை புரிந்துகொள்ளவும், தொழில்துறையின் எப்போதும் மாற்றமடையும் தேவைகளுக்கு ஏற்ப பொறுப்பேற்கவும் எங்களை அனுமதித்துள்ளது. எங்கள் திறமையான குழுவும் அதிநவீன உபகரணங்களும் எந்த அளவு அல்லது சிக்கலான திட்டத்திலும் நாம் தொடர்ந்து உயர்ந்த முடிவுகளை உற்பத்தி செய்வதை உறுதி செய்கின்றன."
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 relative min-h-screen">
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              src={expImage}
              alt="Experience"
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="container mx-auto mt-10 px-4">
            <motion.h2
              variants={container(0)}
              initial="hidden"
              whileInView="visible"
              className="text-3xl font-bold mb-4 mr-36 lg:text-5xl text-right"
            >
              {content[language].title}
            </motion.h2>
            <motion.p
              variants={container(0.5)}
              initial="hidden"
              whileInView="visible"
              className="text-lg max-w-xl py-6 font-light tracking-tighter text-right"
            >
              {content[language].text}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
