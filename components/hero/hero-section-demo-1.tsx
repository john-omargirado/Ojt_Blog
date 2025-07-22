"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypingEffect } from "@/components/ui/typing-effect";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { describe } from "node:test";

const cards = [
  {
    title: "BU ICTO Internship",
    image: 'images/Week1_Day1.jpg',
    desc: "Embarked on a transformative journey at Bicol University ICT Office, diving into the world of web development and IT operations.",
  },
  {
    title: "BU ICTO Internship",
    image: 'images/Slide2.jpg',
    desc: "Embarked on a transformative journey at Bicol University ICT Office, diving into the world of web development and IT operations.",
  },
  {
    title: "BU ICTO Internship",
    image: 'images/Slide3.jpeg',
    desc: "Embarked on a transformative journey at Bicol University ICT Office, diving into the world of web development and IT operations.",
  },
];

export default function HeroSectionOne() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 4000); // Rotate every 4 seconds
    return () => clearInterval(interval);
  }, []);

  // Scroll to sections
  const scrollToLearnings = () => {
    const learningsSection = document.getElementById('learnings-section');
    if (learningsSection) {
      learningsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToExperience = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getCardStyle = (index: number) => {
    const leftIndex = (currentIndex + cards.length - 1) % cards.length;
    const rightIndex = (currentIndex + 1) % cards.length;

    if (index === currentIndex) {
      return {
        zIndex: 10,
        scale: 1,
        blur: "blur-0",
        translateX: "translate-x-0",
        opacity: "opacity-100",
      };
    } else if (index === leftIndex) {
      return {
        zIndex: 5,
        scale: 0.9,
        blur: "blur-sm",
        translateX: "-translate-x-36",
        opacity: "opacity-50",
      };
    } else if (index === rightIndex) {
      return {
        zIndex: 5,
        scale: 0.9,
        blur: "blur-sm",
        translateX: "translate-x-36",
        opacity: "opacity-50",
      };
    } else {
      // Cards further away are less prominent and off-center to create a more dynamic feel
      return {
        zIndex: 0,
        scale: 0.8,
        blur: "blur-md",
        translateX:
          index < currentIndex
            ? "-translate-x-72"
            : "translate-x-72", // Push far left/right
        opacity: "opacity-0",
      };
    }
  };

  return (
    <motion.section
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }}
        />
        
        {/* Floating Orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/6 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -40, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        {/* Additional accent orbs */}
        <motion.div 
          className="absolute top-1/2 left-1/2 w-60 h-60 bg-blue-500/15 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-28 min-h-screen flex items-center">
        
        {/* Main Content Flex Container */}
        <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-16 lg:gap-20">
          
          {/* Left Column - Enhanced Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left px-4 lg:px-0">
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600/30 to-indigo-600/30 border border-purple-400/30 backdrop-blur-sm mb-10"
            >
              <span className="text-sm font-semibold text-purple-200">🎓 OJT Experience</span>
            </motion.div>

            {/* Main Title */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                <div className="bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent">
                  My OJT Journey
                </div>
                <div className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent text-4xl sm:text-5xl lg:text-6xl mt-2">
                  at BU ICTO
                </div>
              </h1>
            </motion.div>
            
            {/* Subtitle */}
            <motion.p
              className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Exploring the transformative experience of hands-on learning, 
              <span className="text-purple-300 font-medium"> technical growth, and professional development</span> 
              at Bicol University's ICT Office.
            </motion.p>

            {/* Call to Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                onClick={scrollToLearnings}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 transform transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Learnings
              </motion.button>
              <motion.button
                onClick={scrollToExperience}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold text-lg border border-white/20 shadow-lg hover:bg-white/15 transform transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Experience
              </motion.button>
            </motion.div>

          </div>

          {/* Right Column - Enhanced Carousel */}
          <div className="w-full lg:w-1/2 relative h-[35rem] flex items-center justify-center">
            <div className="relative w-full h-full perspective-1000">
              {cards.map((card, index) => {
                const style = getCardStyle(index);
                return (
                  <motion.div
                    key={index}
                    className={`absolute transition-all duration-700 ease-in-out ${style.blur} ${style.translateX} ${style.opacity}`}
                    style={{
                      zIndex: style.zIndex,
                      transform: `scale(${style.scale})`,
                    }}
                    whileHover={{ scale: style.scale * 1.02 }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.2 }}
                  >
                    <CardContainer className="w-[22rem] sm:w-[26rem] lg:w-[28rem]">
                      <CardBody className="relative group bg-white/5 backdrop-blur-lg border border-white/10 text-white shadow-2xl rounded-2xl p-6 lg:p-8 w-full h-[30rem] flex flex-col justify-between transform-gpu hover:bg-white/10 hover:border-purple-400/30 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
                        
                        {/* Card Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                        
                        {/* Week Badge */}
                        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                          Slide {index + 1}
                        </div>

                        {/* Content */}
                        <div className="relative z-10 flex flex-col h-full">
                          <CardItem
                            translateZ="50"
                            className="text-xl lg:text-2xl font-bold mb-2 text-white leading-tight group-hover:text-purple-200 transition-colors duration-300"
                          >
                            {card.title}
                          </CardItem>
                          
                          <CardItem translateZ="80" className="w-full flex-grow">
                            <div className="relative overflow-hidden rounded-xl h-64">
                              <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                          </CardItem>
                          
                          <CardItem
                            as="p"
                            translateZ="60"
                            className="text-gray-300 text-sm lg:text-base leading-relaxed"
                          >
                            {card.desc}
                          </CardItem>
                        </div>

                        {/* Card Hover Effects */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-indigo-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                      </CardBody>
                    </CardContainer>
                  </motion.div>
                );
              })}
            </div>

            {/* Carousel Navigation Dots */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              {cards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-purple-500 to-indigo-500 scale-125"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}