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
      title: 'Frontend Refinement & Quality Assurance',
      subtitle: 'Checking of Output',
      date: 'Week 5',
      content: 'Week five was dedicated to refining the overall user interface of our project. We revisited the design and made several enhancements to improve the visual appeal and user experience. By applying better UI/UX principles such as spacing, alignment, color consistency, and component usability, we achieved a cleaner and more intuitive layout that aligned with modern web standards. After the week ended, we showed our output to Sir Davie for evaluation and feedback. He provided minor comments to fix certain design aspects of the website and recommended functionalities to implement, such as adding a feature for downloading grades.',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg',
      images: [
        'images/WEEK5.jpg',
        'images/WEEK5(1).jpg',
        'images/week5(2).png',
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
    <div id="learnings-section" className="relative min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 text-white overflow-hidden">
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
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        {/* Enhanced Header Section */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600/30 to-indigo-600/30 border border-purple-400/30 backdrop-blur-sm mb-6"
          >
            <span className="text-sm font-semibold text-purple-200">📚 Learning Journey</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent">
              Weekly Progress
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent text-4xl sm:text-5xl lg:text-6xl">
              & Achievements
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore the transformative journey through each week of my OJT experience, 
            <span className="text-purple-300 font-medium"> showcasing key learnings, technical growth, and real-world applications</span>.
          </motion.p>

          {/* Progress Indicator */}
          <motion.div
            className="mt-8 flex justify-center items-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
              <span className="text-sm text-gray-400">Weeks Completed:</span>
              <span className="text-lg font-bold text-white">{elements.length}</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {elements.map((item, idx) => (
            <motion.div
              key={idx}
              className="group relative"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: 'easeOut' }}
            >
              {/* Card Container */}
              <div
                className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 lg:p-8 cursor-pointer transition-all duration-500 hover:bg-white/10 hover:border-purple-400/30 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2"
                onClick={() => handleOpenModal(item)}
              >
                {/* Week Badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                  {item.date}
                </div>

                {/* Card Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <motion.div
                    className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-xl flex items-center justify-center border border-purple-300/30"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.icon && (
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-8 h-8 object-contain"
                        onError={(e) => {
                          e.currentTarget.src = `https://placehold.co/32x32/8B5CF6/FFFFFF?text=📚`;
                          e.currentTarget.onerror = null;
                        }}
                      />
                    )}
                  </motion.div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 leading-tight group-hover:text-purple-200 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-purple-300 text-sm font-medium bg-purple-500/10 px-3 py-1 rounded-full inline-block">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Content Preview */}
                <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-6 line-clamp-3">
                  {truncateText(item.content, 150)}
                </p>

                {/* Image Preview */}
                {item.images && item.images.length > 0 && (
                  <div className="relative mb-6 overflow-hidden rounded-xl">
                    <motion.img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-full h-32 lg:h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src = `https://placehold.co/400x200/374151/9CA3AF?text=Preview`;
                        e.currentTarget.onerror = null;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Image Count Badge */}
                    {item.images.length > 1 && (
                      <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                        +{item.images.length - 1} more
                      </div>
                    )}
                  </div>
                )}

                {/* Call to Action */}
                <motion.div
                  className="flex items-center justify-between"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-purple-300 hover:text-purple-200 font-semibold text-sm transition-colors duration-200">
                    Explore Details
                  </span>
                  <motion.div
                    className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </motion.div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced Modal Overlay */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl p-8 lg:p-10 max-w-4xl w-full max-h-[90vh] overflow-y-auto text-gray-800 relative shadow-2xl border border-gray-200"
              initial={{ scale: 0.7, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0, y: 100 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 rounded-full flex items-center justify-center transition-all duration-200 z-10 shadow-lg"
                onClick={handleCloseModal}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Modal Header */}
              <div className="mb-8">
                <div className="flex items-start space-x-6 mb-4">
                  <motion.div
                    className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
                  >
                    {selected.icon && (
                      <img
                        src={selected.icon}
                        alt={selected.title}
                        className="w-10 h-10 object-contain"
                        onError={(e) => {
                          e.currentTarget.src = `https://placehold.co/40x40/FFFFFF/8B5CF6?text=📚`;
                          e.currentTarget.onerror = null;
                        }}
                      />
                    )}
                  </motion.div>
                  
                  <div className="flex-1">
                    <motion.h2
                      className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      {selected.title}
                    </motion.h2>
                    <motion.div
                      className="flex flex-wrap items-center gap-4"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-semibold rounded-full shadow-md">
                        {selected.date}
                      </span>
                      <span className="text-gray-600 text-lg font-medium">
                        {selected.subtitle}
                      </span>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Enhanced Image Carousel */}
              {selected.images && selected.images.length > 0 && (
                <motion.div
                  className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <div className="relative h-80 lg:h-96">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.img
                        key={currentImageIndex}
                        src={selected.images[currentImageIndex]}
                        alt={`${selected.title} - Image ${currentImageIndex + 1}`}
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                        onError={(e) => {
                          e.currentTarget.src = `https://placehold.co/800x400/E5E7EB/6B7280?text=Image+${currentImageIndex + 1}`;
                          e.currentTarget.onerror = null;
                        }}
                      />
                    </AnimatePresence>

                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />

                    {selected.images.length > 1 && (
                      <>
                        {/* Navigation Arrows */}
                        <motion.button
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
                          onClick={handlePrevImage}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label="Previous image"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </motion.button>
                        
                        <motion.button
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
                          onClick={handleNextImage}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label="Next image"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.button>

                        {/* Enhanced Controls */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-4 bg-black/30 backdrop-blur-sm rounded-full px-6 py-3">
                          {/* Auto-play Toggle */}
                          <motion.button
                            onClick={toggleAutoPlay}
                            className="w-8 h-8 text-white hover:text-purple-300 transition-colors flex items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label={autoPlay ? "Pause autoplay" : "Play autoplay"}
                          >
                            {autoPlay ? (
                              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                            ) : (
                              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                              </svg>
                            )}
                          </motion.button>

                          {/* Image Indicators */}
                          <div className="flex space-x-2">
                            {selected.images.map((_, idx) => (
                              <motion.button
                                key={idx}
                                className={`transition-all duration-300 ${
                                  currentImageIndex === idx 
                                    ? 'w-8 h-3 bg-white rounded-full' 
                                    : 'w-3 h-3 bg-white/50 hover:bg-white/75 rounded-full'
                                }`}
                                onClick={() => {
                                  setAutoPlay(false);
                                  setCurrentImageIndex(idx);
                                }}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={`Go to image ${idx + 1}`}
                              >
                                {currentImageIndex === idx && (
                                  <motion.div
                                    layoutId="activeImageIndicator"
                                    className="w-full h-full bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"
                                  />
                                )}
                              </motion.button>
                            ))}
                          </div>

                          {/* Image Counter */}
                          <div className="text-white text-sm font-medium">
                            {currentImageIndex + 1} / {selected.images.length}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Content Section */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-gray-800">Weekly Activities & Accomplishments</h3>
                </div>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {selected.content}
                  </p>
                </div>
              </motion.div>

              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-100/50 to-transparent rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-indigo-100/50 to-transparent rounded-full blur-2xl pointer-events-none" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
