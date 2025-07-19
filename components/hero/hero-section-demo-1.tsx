"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypingEffect } from "@/components/ui/typing-effect";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const cards = [
  {
    title: "BU ICTO Internship",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Worked on real-world projects involving system maintenance, documentation, and web development, gaining hands-on experience in a professional IT environment.",
  },
  {
    title: "Web System Debugging",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Successfully identified and resolved critical bugs in Laravel and WordPress platforms, ensuring smooth operation for various Bicol University offices.",
  },
  {
    title: "Documentation Tasks",
    image:
      "https://images.unsplash.com/photo-1457305237443-44c3d0a5d45b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Created comprehensive user manuals and detailed technical documentation for internal systems, improving usability and maintainability for staff.",
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
      className="relative flex items-center justify-center h-screen w-full overflow-hidden text-white px-4 py-12 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Overlay for subtle texture */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
      <div className="absolute inset-0 z-0 radial-gradient-mask"></div> {/* Radial gradient mask */}


      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-7xl gap-12 md:gap-8 items-center justify-center">
        {/* Left Column - Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left p-6">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg"
          >
            <TypingEffect text="My OJT Journey at BU ICTO" />
          </motion.div>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed opacity-90 drop-shadow-md"
          >
            <TypingEffect text="A brief look into my internship experience, skills applied, and lessons learned at Bicol University's ICT Office." />
          </motion.div>
        </div>

        {/* Right Column - Carousel with layered cards */}
        <div className="w-full md:w-1/2 relative h-[30rem] sm:h-[32rem] flex items-center justify-center perspective-1000">
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
                whileHover={{ scale: 1.05 }} // Slight hover effect
              >
                <CardContainer className="w-[24rem] sm:w-[28rem] md:w-[30rem] lg:w-[32rem]">
                  <CardBody className="bg-gradient-to-br from-white/95 to-gray-100/90 text-gray-900 shadow-2xl rounded-xl p-6 sm:p-8 w-full h-[26rem] sm:h-[28rem] flex flex-col justify-between transform-gpu">
                    <CardItem
                      translateZ="40"
                      className="text-xl sm:text-2xl font-bold mb-2 text-neutral-800"
                    >
                      {card.title}
                    </CardItem>
                    <CardItem translateZ="60" className="w-full flex-grow mt-4">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="h-48 sm:h-56 w-full object-cover rounded-lg shadow-md"
                      />
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-700 text-sm sm:text-base mt-4 leading-relaxed"
                    >
                      {card.desc}
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}