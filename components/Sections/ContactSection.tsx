"use client";

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLaptopCode, FaPaintBrush, FaCode, FaGitAlt, FaServer, FaCloudUploadAlt } from 'react-icons/fa';

export default function TimelineSection() {
  const elements = [
    {
      title: 'OJT Kickoff & Initial Setup',
      subtitle: 'Project Briefing and Mockup Task',
      date: 'Week 1',
      content: 'Our first week at BU ICTO began with an orientation where we were introduced to the office’s goals, workflows, and the significance of maintaining standardization across BU web systems. After the briefing, we were assigned our initial task—to refactor the UI/UX of the Bicol University Faculty Center website. We started by evaluating its current layout and were instructed to create a mockup design that followed BU’s official web design standards. This marked the beginning of our involvement in real-world web development practices aligned with institutional guidelines.',
      icon: FaLaptopCode, // Icon for setup/environment
      type: 'work'
    },
    {
      title: 'Getting Familiar with Laravel',
      subtitle: 'Understanding the Framework',
      date: 'Week 2',
      content: 'In our second week, we began exploring Laravel to understand its fundamental concepts and structure. We followed a series of YouTube tutorials to get hands-on experience with Laravel’s MVC architecture, routing, controllers, and blade templates. This initial exposure helped us build confidence in navigating Laravel and laid the groundwork for future backend development tasks.',
      icon: FaPaintBrush, // Icon for UI/UX design
      type: 'work',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Tailwind CSS Mastery',
      subtitle: 'Responsive Design and Utility Classes',
      date: 'Week 3',
      content: 'The third week centered around design implementation using Tailwind CSS. We applied what we learned by styling the template given by our mentor, aligning it with the official BUSIS (Bicol University Student Information System) design guidelines. This week helped solidify our understanding of utility-first CSS and responsive design, ensuring our layouts remained consistent across different devices.',
      icon: FaCode, // Icon for frontend coding
      type: 'work',
      gradient: 'from-green-600 to-emerald-600'
    },
    {
      title: 'Livewire and Laravel Integration',
      subtitle: 'Dynamic Interfaces with Livewire',
      date: 'Week 4',
      content: 'In the fourth week, we delved into Livewire, a full-stack framework for Laravel that enables building reactive interfaces without writing JavaScript. We explored how Livewire integrates seamlessly with Laravel and practiced building dynamic components, enhancing user interactivity on the web pages. This helped us simplify front-end behavior while staying within the Laravel ecosystem.',
      icon: FaGitAlt, // Icon for Git/version control
      type: 'work',
      gradient: 'from-cyan-600 to-blue-600'
    },
    {
      title: 'Frontend Deployment Strategies',
      subtitle: 'Launching React Applications',
      date: 'Week 5',
      content: 'Week five was dedicated to refining the overall user interface of our project. We revisited the design and made several enhancements to improve the visual appeal and user experience. By applying better UI/UX principles such as spacing, alignment, color consistency, and component usability, we achieved a cleaner and more intuitive layout that aligned with modern web standards.',
      icon: FaServer,
      type: 'work',
      skills: ['UI/UX Enhancement', 'Modern Web Standards', 'Visual Design'],
      achievements: ['UI refinement', 'Better UX', 'Modern standards compliance'],
      gradient: 'from-red-600 to-pink-600'
    },
    {
      title: 'Deployment & Performance Optimization',
      subtitle: 'Preparing for Production & Final Review',
      date: 'Week 6',
      content: 'Explored deployment strategies for web applications, including preparing the project for production environments. Conducted performance optimization, bug fixing, and a final review of the Faculty Center website, ensuring it met all requirements before handover.',
      icon: FaCloudUploadAlt,
      type: 'work',
      skills: ['Deployment Strategies', 'Performance Optimization', 'Production Readiness'],
      achievements: ['Production deployment', 'Performance optimization', 'Final project review'],
      gradient: 'from-orange-600 to-red-600'
    }
  ];

  const [selectedWeek, setSelectedWeek] = useState<ElementType | null>(null);
  type ElementType = typeof elements[number];

  // Function to convert Tailwind gradient to CSS gradient
  const convertGradientToCss = (tailwindGradient: string) => {
    const gradientMap: { [key: string]: string } = {
      'from-blue-600 to-purple-600': 'rgb(37, 99, 235), rgb(147, 51, 234)',
      'from-purple-600 to-pink-600': 'rgb(147, 51, 234), rgb(219, 39, 119)',
      'from-cyan-600 to-blue-600': 'rgb(8, 145, 178), rgb(37, 99, 235)',
      'from-green-600 to-emerald-600': 'rgb(22, 163, 74), rgb(5, 150, 105)',
      'from-red-600 to-pink-600': 'rgb(220, 38, 38), rgb(219, 39, 119)',
      'from-orange-600 to-red-600': 'rgb(234, 88, 12), rgb(220, 38, 38)',
    };
    
    return gradientMap[tailwindGradient] || 'rgb(139, 92, 246), rgb(79, 70, 229)';
  };

  // Function to truncate text for card display
  const truncateText = useCallback((text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    }
    const truncated = text.substring(0, text.lastIndexOf(' ', maxLength));
    return truncated + '...';
  }, []);

  const handleOpenModal = useCallback((item: ElementType) => {
    setSelectedWeek(item);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedWeek(null);
  }, []);

  return (
    <div id="contact-section" className="relative min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 text-white overflow-hidden">
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
            <span className="text-sm font-semibold text-purple-200">📅 Weekly Timeline</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent">
              My OJT Journey
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent text-3xl sm:text-4xl lg:text-5xl">
              Week by Week
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Follow my progressive development through each week of the internship,
            <span className="text-purple-300 font-medium"> tracking skills, achievements, and milestones</span>.
          </motion.p>
        </motion.div>

        {/* Enhanced Timeline Layout */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-indigo-500 to-purple-500 transform md:-translate-x-1/2 rounded-full"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12 lg:space-y-16">
            {elements.map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.8, ease: 'easeOut' }}
              >
                {/* Timeline Node */}
                <motion.div
                  className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20 z-20"
                  style={{
                    background: `linear-gradient(135deg, ${convertGradientToCss(item.gradient || 'from-purple-600 to-indigo-600')})`,
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon Background Circle */}
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white drop-shadow-lg" />
                  </div>
                </motion.div>

                {/* Content Card */}
                <motion.div
                  className={`flex ${
                    index % 2 === 0 
                      ? 'md:justify-start pl-24 md:pl-0 md:pr-8 md:mr-auto md:w-5/12' 
                      : 'md:justify-end pl-24 md:pl-8 md:ml-auto md:w-5/12'
                  }`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 lg:p-8 cursor-pointer transition-all duration-500 hover:bg-white/10 hover:border-purple-400/30 hover:shadow-2xl hover:shadow-purple-500/20 w-full ${
                      index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                    }`}
                    onClick={() => handleOpenModal(item)}
                  >
                    {/* Week Badge */}
                    <div 
                      className={`absolute -top-3 ${
                        index % 2 === 0 ? '-right-3' : '-left-3'
                      } text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg`}
                      style={{
                        background: `linear-gradient(135deg, ${convertGradientToCss(item.gradient || 'from-purple-600 to-indigo-600')})`,
                      }}
                    >
                      {item.date}
                    </div>

                    {/* Card Content */}
                    <div className="space-y-4">
                      <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-purple-200 transition-colors duration-300">
                        {item.title}
                      </h3>
                      
                      <p className="text-purple-300 text-sm font-medium bg-purple-500/10 px-3 py-1 rounded-full inline-block">
                        {item.subtitle}
                      </p>

                      <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                        {truncateText(item.content, 120)}
                      </p>

                      {/* Skills Preview */}
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                        {item.skills?.slice(0, 3).map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 text-purple-200 text-xs rounded-md border border-purple-300/30"
                          >
                            {skill}
                          </span>
                        ))}
                        {item.skills && item.skills.length > 3 && (
                          <span className="text-purple-300 text-xs">+{item.skills.length - 3} more</span>
                        )}
                      </div>

                      {/* CTA */}
                      <motion.div
                        className={`flex items-center pt-2 ${
                          index % 2 === 0 ? 'justify-between' : 'justify-between md:flex-row-reverse'
                        }`}
                        whileHover={{ x: index % 2 === 0 ? 5 : -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-purple-300 hover:text-purple-200 font-semibold text-sm transition-colors duration-200">
                          View Details
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
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {selectedWeek && (
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
                    className="flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${convertGradientToCss(selectedWeek.gradient || 'from-purple-600 to-indigo-600')})`,
                    }}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
                  >
                    <selectedWeek.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <motion.h2
                      className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      {selectedWeek.title}
                    </motion.h2>
                    <motion.div
                      className="flex flex-wrap items-center gap-4"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <span 
                        className="px-4 py-2 text-white text-sm font-semibold rounded-full shadow-md"
                        style={{
                          background: `linear-gradient(135deg, ${convertGradientToCss(selectedWeek.gradient || 'from-purple-600 to-indigo-600')})`,
                        }}
                      >
                        {selectedWeek.date}
                      </span>
                      <span className="text-gray-600 text-lg font-medium">
                        {selectedWeek.subtitle}
                      </span>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                {/* Description */}
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div 
                      className="w-2 h-8 rounded-full"
                      style={{
                        background: `linear-gradient(to bottom, ${convertGradientToCss(selectedWeek.gradient || 'from-purple-600 to-indigo-600')})`,
                      }}
                    ></div>
                    <h3 className="text-2xl font-bold text-gray-800">Weekly Overview</h3>
                  </div>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {selectedWeek.content}
                    </p>
                  </div>
                </div>

                {/* Skills Section */}
                {selectedWeek.skills && (
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div 
                        className="w-2 h-8 rounded-full"
                        style={{
                          background: `linear-gradient(to bottom, ${convertGradientToCss(selectedWeek.gradient || 'from-purple-600 to-indigo-600')})`,
                        }}
                      ></div>
                      <h3 className="text-2xl font-bold text-gray-800">Skills Developed</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {selectedWeek.skills.map((skill, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.7 + index * 0.1 }}
                          className="px-4 py-2 text-white text-sm font-medium rounded-full shadow-md"
                          style={{
                            background: `linear-gradient(135deg, ${convertGradientToCss(selectedWeek.gradient || 'from-purple-600 to-indigo-600')})`,
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Achievements Section */}
                {selectedWeek.achievements && (
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div 
                        className="w-2 h-8 rounded-full"
                        style={{
                          background: `linear-gradient(to bottom, ${convertGradientToCss(selectedWeek.gradient || 'from-purple-600 to-indigo-600')})`,
                        }}
                      ></div>
                      <h3 className="text-2xl font-bold text-gray-800">Key Achievements</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedWeek.achievements.map((achievement, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + index * 0.1 }}
                          className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
                        >
                          <div 
                            className="w-2 h-2 rounded-full"
                            style={{
                              background: `linear-gradient(135deg, ${convertGradientToCss(selectedWeek.gradient || 'from-purple-600 to-indigo-600')})`,
                            }}
                          ></div>
                          <span className="text-gray-700 font-medium">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
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
