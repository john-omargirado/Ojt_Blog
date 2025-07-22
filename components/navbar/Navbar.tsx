// components/navbar.tsx
"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  // Removed NavbarButton as we'll custom implement it
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar"; // Assuming these are well-designed base components
import { useState } from "react";
import Image from "next/image"; // Import Next.js Image component for optimization
import React from "react";


export default function NavbarDemo() {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Learnings", link: "#learnings" },
    { name: "Experience", link: "#experience" }, // Renamed "Contact" to "Experience" for consistency with timeline
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md dark:bg-gray-900/80 transition-colors duration-300 shadow-sm">
      <Navbar>
        <NavBody>
          {/* Custom NavbarLogo for better branding */}
          <NavbarLogo />

          {/* Desktop Navigation Items */}
          <NavItems items={navItems} className="text-gray-600 dark:text-gray-300 font-medium text-lg" />

          {/* Desktop Social Media Buttons - REIMPLEMENTED */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/john-omargirado" // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500 bg-purple-500 text-white text-sm font-medium hover:bg-purple-600 hover:border-purple-600 transition-all duration-200 shadow-md whitespace-nowrap"
            >
              <Image src="/images/github.png" alt="Github" width={18} height={18} className="filter invert dark:filter-none" />
              Github
            </a>
            <a
              href="https://www.facebook.com/bunoy.omar/" // Replace with your Facebook URL
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-blue-600 bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 hover:border-blue-700 transition-all duration-200 shadow-md whitespace-nowrap"
            >
              <Image src="/images/fb.png" alt="Facebook" width={18} height={18} className="filter invert dark:filter-none" />
              Facebook
            </a>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            {/* Custom NavbarLogo for mobile */}
            <NavbarLogo />
            {/* Mobile Menu Toggle Button */}
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="bg-white dark:bg-gray-800"
          >
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-lg font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 rounded-lg"
              >
                {item.name}
              </a>
            ))}
            {/* Mobile Social Media Buttons - REIMPLEMENTED */}
            <div className="flex w-full flex-col gap-4 px-4 mt-6">
              <a
                href="https://github.com" // Replace with your GitHub URL
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-purple-500 bg-purple-500 text-white text-lg font-medium hover:bg-purple-600 hover:border-purple-600 transition-all duration-200 shadow-md"
              >
                <Image src="/images/github.png" alt="Github" width={20} height={20} className="filter invert dark:filter-none" />
                Github
              </a>
              <a
                href="https://facebook.com" // Replace with your Facebook URL
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-blue-600 bg-blue-600 text-white text-lg font-medium hover:bg-blue-700 hover:border-blue-700 transition-all duration-200 shadow-md"
              >
                <Image src="/images/fb.png" alt="Facebook" width={20} height={20} className="filter invert dark:filter-none" />
                Facebook
              </a>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}