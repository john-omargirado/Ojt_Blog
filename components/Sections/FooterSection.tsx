"use client";

import { motion } from 'framer-motion';
import React from 'react';

export default function FooterSection() {
  const copyrightText = "John Omar N. Girado, 3rd Year Computer Science Student, OJT at Bicol University Information and Communications Technology Office, Mid-Year 2025";

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 text-white overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
               `,
               backgroundSize: '30px 30px'
             }}
        />
        
        {/* Floating Orbs */}
        <motion.div 
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-48 h-48 bg-indigo-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12 py-8 lg:py-12">
        
        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 lg:p-8 max-w-3xl mx-auto shadow-xl"
        >
          {/* Card Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-indigo-500/5 rounded-xl" />
          
          {/* Content Section */}
          <div className="relative z-10 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/30 to-indigo-600/30 border border-purple-400/30 backdrop-blur-sm mb-4"
            >
              <span className="text-xs font-semibold text-purple-200">🎓 OJT Complete</span>
            </motion.div>

            {/* Copyright Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-4"
            >
              <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
                {copyrightText}
              </p>
            </motion.div>

            {/* Year Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-400/20 backdrop-blur-sm"
            >
              <span className="text-xs font-medium text-purple-200">© 2025</span>
            </motion.div>
          </div>

          {/* Card Hover Effects */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-indigo-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
        </motion.div>
      </div>
    </footer>
  );
}
