"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WeeklyUpdatesSection() {
  const elements = [
    {
      title: 'OJT Kickoff & Orientation',
      subtitle: 'Project Briefing and Mockup Task',
      date: 'Week 1',
      content: 'Our first week at BU ICTO began with an orientation where we were introduced to the office’s goals, workflows, and the significance of maintaining standardization across BU web systems. After the briefing, we were assigned our initial task—to refactor the UI/UX of the Bicol University Faculty Center website. We started by evaluating its current layout and were instructed to create a mockup design that followed BU’s official web design standards. This marked the beginning of our involvement in real-world web development practices aligned with institutional guidelines.',
      icon: 'https://img.icons8.com/?size=100&id=8gfeOoqrHqJU&format=png&color=000000', // Assuming this icon is suitable
      images: [
       'images/day1_image.jpg',
        'images/day2_image.jpg',
        'images/day3_image.jpg',
      ],
    },
    {
      title: 'Getting Familiar with Laravel',
      subtitle: 'Understanding the Framework',
      date: 'Week 2',
      content: 'In our second week, we began exploring Laravel to understand its fundamental concepts and structure. We followed a series of YouTube tutorials to get hands-on experience with Laravel’s MVC architecture, routing, controllers, and blade templates. This initial exposure helped us build confidence in navigating Laravel and laid the groundwork for future backend development tasks.',
      icon: 'https://img.icons8.com/?size=100&id=hUvxmdu7Rloj&format=png&color=000000',
      images: [
        'images/day4_image.jpg',
        'images/day4_image1.jpg',
        'images/day4_image2.jpg',
      ],
    },
    {
      title: 'Tailwind CSS Mastery',
      subtitle: 'Responsive Design and Utility Classes',
      date: 'Week 3',
      content: 'The third week centered around design implementation using Tailwind CSS. We applied what we learned by styling the template given by our mentor, aligning it with the official BUSIS (Bicol University Student Information System) design guidelines. This week helped solidify our understanding of utility-first CSS and responsive design, ensuring our layouts remained consistent across different devices.',
      icon: 'https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000',
      images: [
        'images/Tailwindcss_Docu.png',
        'images/Document.png',
        'images/Tailwindcss_Docu3.png',
      ],
    },
    {
      title: 'Laravel Livewire Learnings ',
      subtitle: 'Dynamic Interfaces with Livewire',
      date: 'Week 4',
      content: 'In the fourth week, we delved into Livewire, a full-stack framework for Laravel that enables building reactive interfaces without writing JavaScript. We explored how Livewire integrates seamlessly with Laravel and practiced building dynamic components, enhancing user interactivity on the web pages. This helped us simplify front-end behavior while staying within the Laravel ecosystem.',
      icon: '/icons/Livewire.png', // Assuming this path is correct for your project
      images: [
        'images/LivewireDocu.png',
        'images/LivewireDocu1.png',
        'images/day7_image(1).jpg',
      ],
    },
    {
      title: 'Frontend Deployment Strategies',
      subtitle: 'Launching React Applications',
      date: 'Week 5',
      content: 'Week five was dedicated to refining the overall user interface of our project. We revisited the design and made several enhancements to improve the visual appeal and user experience. By applying better UI/UX principles such as spacing, alignment, color consistency, and component usability, we achieved a cleaner and more intuitive layout that aligned with modern web standards.',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg',
      images: [
        'https://images.unsplash.com/photo-1549692520-acc666928e0c?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
    },
    {
      title: 'Advanced React Concepts',
      subtitle: 'Hooks, Context API, and Optimization',
      date: 'Week 6',
      content: 'Explored advanced React concepts, including in-depth usage of `useState`, `useEffect`, and `useContext` for robust state management. Learned to create custom hooks for reusable logic and delved into performance optimization techniques to build highly efficient and scalable React applications.',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      images: [
        'https://images.unsplash.com/photo-1581472723648-5c7429141042?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
    },
  ];

  const [selected, setSelected] = useState<ElementType | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  type ElementType = typeof elements[number];

  // Function to truncate text for card display
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, text.lastIndexOf(' ', maxLength)) + '...';
  };

  // Effect for automatic carousel
  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;
    if (selected && autoPlay) {
      intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          selected && prevIndex === selected.images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change image every 3 seconds
    }
    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [selected, currentImageIndex, autoPlay]);

  const handleNextImage = useCallback(() => {
    setAutoPlay(false); // Stop autoplay when user interacts
    setCurrentImageIndex((prevIndex) =>
      selected && prevIndex === selected.images.length - 1 ? 0 : prevIndex + 1
    );
  }, [selected]);

  const handlePrevImage = useCallback(() => {
    setAutoPlay(false); // Stop autoplay when user interacts
    setCurrentImageIndex((prevIndex) =>
      selected && prevIndex === 0 ? selected.images.length - 1 : prevIndex - 1
    );
  }, [selected]);

  const handleOpenModal = useCallback((item: ElementType) => {
    setSelected(item);
    setCurrentImageIndex(0); // Reset to first image when opening modal
    setAutoPlay(true); // Start autoplay when modal opens
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelected(null);
    setCurrentImageIndex(0);
    setAutoPlay(false); // Stop autoplay when modal closes
  }, []);

  const toggleAutoPlay = useCallback(() => {
    setAutoPlay((prev) => !prev);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-tl from-gray-900 via-purple-900 to-blue-900 text-white px-6 py-12 font-inter overflow-hidden">
      {/* Custom CSS for text selection and animated background */}
      <style jsx>{`
        ::selection {
          background-color: #a78bfa; /* A lighter purple */
          color: #1a202c; /* Dark text for contrast */
        }
        ::-moz-selection {
          background-color: #a78bfa;
          color: #1a202c;
        }
        @keyframes subtle-gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animated-background-gradient {
          background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
          background-size: 400% 400%;
          animation: subtle-gradient-shift 15s ease infinite;
        }
        /* Radial gradient mask for a spotlight effect - consistent with Hero Section */
        .radial-gradient-mask {
          background: radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.5) 75%);
          pointer-events: none; /* Allows clicks to pass through */
        }
      `}</style>

      {/* Animated Background Element */}
      <div className="absolute inset-0 z-0 animated-background-gradient opacity-20"></div>
      {/* Background Overlay for subtle texture and depth */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
      {/* Radial gradient mask for consistent background effect */}
      <div className="absolute inset-0 z-0 radial-gradient-mask"></div>

      {/* Section Title and Description */}
      <motion.h1
        className="relative z-10 text-5xl md:text-6xl font-extrabold mb-4 text-center tracking-tight drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Weekly Progress
      </motion.h1>
      <motion.p
        className="relative z-10 text-lg md:text-xl mb-12 text-center max-w-2xl opacity-90 leading-relaxed drop-shadow-md"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Dive into the **key learnings and accomplishments** from each week of my On-the-Job Training at BU ICTO.
      </motion.p>

      {/* Grid of Update Cards */}
      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
        {elements.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white/95 text-gray-800 p-6 rounded-xl shadow-2xl cursor-pointer hover:shadow-purple-500/40 transition-all duration-300 ease-in-out border border-transparent hover:border-purple-400 transform-gpu"
            onClick={() => handleOpenModal(item)}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08, duration: 0.6, ease: 'easeOut' }}
            whileHover={{ scale: 1.03, z: 10 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-4 mb-4">
              {item.icon && (
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10 object-contain drop-shadow-sm"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/40x40/cccccc/333333?text=Icon`;
                    e.currentTarget.onerror = null;
                  }}
                />
              )}
              <h2 className="text-2xl font-bold text-gray-900">{item.title}</h2>
            </div>
            <p className="text-purple-700 text-md font-semibold mb-1">{item.date}</p>
            <p className="text-gray-600 text-base mb-4 leading-snug">{item.subtitle}</p>

            {/* Display truncated content on the card */}
            <p className="text-gray-700 text-sm mt-2 leading-relaxed">
              {truncateText(item.content, 150)} {/* Truncate content for card display */}
            </p>
            <span className="text-purple-600 hover:text-purple-800 text-sm font-semibold mt-2 block">
              Read More &rarr;
            </span>
          </motion.div>
        ))}
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 max-w-2xl w-full text-gray-800 relative shadow-2xl border border-gray-200"
              initial={{ scale: 0.7, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0, y: 50 }}
              transition={{ type: 'spring', stiffness: 250, damping: 25 }}
            >
              <button
                className="absolute top-4 right-5 text-gray-500 hover:text-gray-800 transition-colors p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                onClick={handleCloseModal}
                aria-label="Close modal"
              >
                {/* Close SVG Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="flex items-center gap-4 mb-4">
                {selected.icon && (
                  <img
                    src={selected.icon}
                    alt={selected.title}
                    className="w-12 h-12 object-contain drop-shadow-sm"
                    onError={(e) => {
                      e.currentTarget.src = `https://placehold.co/50x50/cccccc/333333?text=Icon`;
                      e.currentTarget.onerror = null;
                    }}
                  />
                )}
                <h2 className="text-3xl font-bold text-gray-900">{selected.title}</h2>
              </div>
              <p className="text-md text-gray-600 mb-6">
                <span className="font-semibold text-purple-700">{selected.date}</span> • {selected.subtitle}
              </p>

              {/* Image Carousel */}
              {selected.images && selected.images.length > 0 && (
                <div className="relative mb-6">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.img
                      key={currentImageIndex} // Key prop for AnimatePresence to detect changes
                      src={selected.images[currentImageIndex]}
                      alt={`${selected.title} - Image ${currentImageIndex + 1}`}
                      className="rounded-lg w-full h-64 md:h-80 object-cover shadow-md border border-gray-100"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                      onError={(e) => {
                        e.currentTarget.src = `https://placehold.co/600x400/cccccc/333333?text=Image+Not+Found`;
                        e.currentTarget.onerror = null;
                      }}
                    />
                  </AnimatePresence>

                  {selected.images.length > 1 && (
                    <>
                      {/* Left Arrow */}
                      <button
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
                        onClick={handlePrevImage}
                        aria-label="Previous image"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      {/* Right Arrow */}
                      <button
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
                        onClick={handleNextImage}
                        aria-label="Next image"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      {/* Image Indicators and Play/Pause Button */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center space-x-2 bg-black/30 rounded-full px-3 py-1">
                        {/* Play/Pause Button */}
                        <button
                          onClick={toggleAutoPlay}
                          className="p-1 rounded-full text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                          aria-label={autoPlay ? "Pause autoplay" : "Play autoplay"}
                        >
                          {autoPlay ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                          )}
                        </button>
                        {/* Image Indicators */}
                        {selected.images.map((_, idx) => (
                          <button
                            key={idx}
                            className={`h-2 w-2 rounded-full transition-all duration-300 ${
                              currentImageIndex === idx ? 'bg-white scale-125' : 'bg-gray-400 opacity-70'
                            }`}
                            onClick={() => {
                              setAutoPlay(false); // Stop autoplay when indicator is clicked
                              setCurrentImageIndex(idx);
                            }}
                            aria-label={`Go to image ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              <h3 className="font-semibold text-xl text-gray-700 mb-3">Weekly Activities & Accomplishments:</h3>
              {/* Display content as a single paragraph */}
              <p className="text-base text-gray-800 leading-relaxed">
                {selected.content}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
