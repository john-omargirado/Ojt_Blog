"use client";

import { motion } from 'framer-motion';
import React from 'react';

export default function FooterSection() {
  const copyrightText = "John Omar N. Girado, 3rd Year Computer Science Student, OJT at Bicol University Information and Communications Technology Office, Mid-Year 2025";

  return (
    <footer className="relative bg-gradient-to-br from-gray-950 to-black text-white py-10 border-t border-gray-800 shadow-inner">
      {/* Optional: Subtle overlay for texture, similar to HeroSectionOne */}
      <div className="absolute inset-0 bg-black opacity-20 z-0 pointer-events-none"></div>

      <div className="container mx-auto px-6 flex justify-center items-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-center text-lg text-gray-300 font-light tracking-wide drop-shadow-sm max-w-2xl leading-relaxed"
        >
          {copyrightText}
        </motion.p>
      </div>
    </footer>
  );
}
