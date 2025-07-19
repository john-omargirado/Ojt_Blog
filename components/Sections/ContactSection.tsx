"use client";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaPaintBrush, FaCode, FaGitAlt, FaServer, FaCloudUploadAlt } from 'react-icons/fa'; // Specific icons for weekly updates

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
      type: 'work'
    },
    {
      title: 'Tailwind CSS Mastery',
      subtitle: 'Responsive Design and Utility Classes',
      date: 'Week 3',
      content: 'The third week centered around design implementation using Tailwind CSS. We applied what we learned by styling the template given by our mentor, aligning it with the official BUSIS (Bicol University Student Information System) design guidelines. This week helped solidify our understanding of utility-first CSS and responsive design, ensuring our layouts remained consistent across different devices.',
      icon: FaCode, // Icon for frontend coding
      type: 'work'
    },
    {
      title: 'Livewire and Laravel Integration',
      subtitle: 'Dynamic Interfaces with Livewire',
      date: 'Week 4',
      content: 'In the fourth week, we delved into Livewire, a full-stack framework for Laravel that enables building reactive interfaces without writing JavaScript. We explored how Livewire integrates seamlessly with Laravel and practiced building dynamic components, enhancing user interactivity on the web pages. This helped us simplify front-end behavior while staying within the Laravel ecosystem.',
      icon: FaGitAlt, // Icon for Git/version control
      type: 'work'
    },
    {
      title: 'Frontend Deployment Strategies',
      subtitle: 'Launching React Applications',
      date: 'Week 5',
      content: 'Week five was dedicated to refining the overall user interface of our project. We revisited the design and made several enhancements to improve the visual appeal and user experience. By applying better UI/UX principles such as spacing, alignment, color consistency, and component usability, we achieved a cleaner and more intuitive layout that aligned with modern web standards.',
      icon: FaServer, // Icon for backend/server
      type: 'work'
    },
    {
      title: 'Deployment & Performance Optimization',
      subtitle: 'Preparing for Production & Final Review',
      date: 'Week 6',
      content: 'Explored deployment strategies for web applications, including preparing the project for production environments. Conducted performance optimization, bug fixing, and a final review of the Faculty Center website, ensuring it met all requirements before handover.',
      icon: FaCloudUploadAlt, // Icon for deployment
      type: 'work'
    }
  ];

  // Function to truncate text for card display
  const truncateText = useCallback((text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    }
    // Find the last space before maxLength to avoid cutting words
    const truncated = text.substring(0, text.lastIndexOf(' ', maxLength));
    return truncated + '...';
  }, []);

  // Define a set of colors to cycle through for each timeline element
  const timelineColors = [
    "rgb(30, 58, 138)",    // Deeper Blue (Week 1)
    "rgb(126, 34, 206)",   // Rich Purple (Week 2)
    "rgb(6, 182, 212)",    // Vibrant Cyan (Week 3)
    "rgb(16, 204, 82)",    // Vibrant Green (Week 4)
    "rgb(239, 68, 68)",    // Bright Red (Week 5)
    "rgb(255, 159, 64)"    // Orange (Week 6)
  ];

  return (
    <div className='relative py-16 md:py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white min-h-screen font-inter'>
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

      <motion.h1
        className="relative z-10 text-5xl md:text-6xl font-extrabold mb-12 text-center tracking-tight drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My OJT Journey: Week by Week
      </motion.h1>

      <VerticalTimeline
        className="vertical-timeline"
        animate={true}
        lineWidth={3} // Thinner line for a more modern look
        lineColor="rgba(139, 92, 246, 0.5)" // Subtler purple line
      >
        {elements.map((item, index) => {
          // Assign colors based on the index to cycle through the defined palette
          const backgroundColor = timelineColors[index % timelineColors.length];
          const iconBackgroundColor = backgroundColor; // Icon background matches card background
          const iconColor = '#fff'; // Icon color remains white for contrast

          return (
            <VerticalTimelineElement
              key={index}
              className={`vertical-timeline-element--${item.type}`}
              contentStyle={{
                background: backgroundColor,
                color: '#fff',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Softer shadow
                borderRadius: '10px', // Slightly rounded corners for cards
                padding: '25px', // More internal padding
              }}
              contentArrowStyle={{ borderRight: `7px solid ${backgroundColor}` }}
              iconStyle={{
                background: iconBackgroundColor,
                color: iconColor,
                boxShadow: '0 0 0 4px rgba(139, 92, 246, 0.7), inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 rgba(0, 0, 0, 0.05)', // Enhanced icon shadow
              }}
              icon={
                item.icon && React.createElement(item.icon, { className: "h-6 w-6 md:h-8 md:w-8" }) // Adjust icon size
              }
              date={item.date}
              dateClassName="text-gray-300 text-base md:text-lg font-medium" // Styling for the date
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }} // Staggered animation
              >
                <h3 className="vertical-timeline-element-title text-2xl font-bold mb-1 leading-tight">
                  {item.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle text-lg font-light opacity-90 mb-2">
                  {item.subtitle}
                </h4>
                {/* Display truncated content on the timeline element */}
                <p className="text-base leading-relaxed opacity-95">
                  {truncateText(item.content, 200)} {/* Truncate content for timeline display */}
                </p>
              </motion.div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}
