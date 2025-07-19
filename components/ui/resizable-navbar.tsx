"use client";

import { cn } from "@/lib/utils"; // Assuming cn utility is available for class merging
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion"; // Changed from "motion/react" to "framer-motion" for consistency


import React, { useRef, useState } from "react";
import { NavbarProps ,
  NavBodyProps,
  NavItemsProps,
  MobileNavProps,
  MobileNavHeaderProps,
  MobileNavMenuProps
} from "./types"; // Ensure these types are correctly defined in your types.ts file


export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show navbar when scrolled down more than 50px
    if (latest > 50) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      // Navbar is fixed at the top for a consistent experience
      className={cn("fixed inset-x-0 top-0 z-40 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        // Apply blur and dark background when visible
        backdropFilter: visible ? "blur(10px)" : "none",
        backgroundColor: visible ? "rgba(17, 24, 39, 0.8)" : "transparent", // Dark semi-transparent background
        // Keep the original complex shadow for a glassy, premium look
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        // Shrink width and move down slightly when visible
        width: visible ? "calc(100% - 4rem)" : "100%", // Adjusted width for better responsiveness
        y: visible ? 16 : 0, // Move down slightly when visible
        borderRadius: visible ? "9999px" : "0px", // Fully rounded when visible, sharp edges when at top
        paddingTop: visible ? "0.75rem" : "1rem", // py-3 vs py-4
        paddingBottom: visible ? "0.75rem" : "1rem", // py-3 vs py-4
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      // Removed minWidth for better responsiveness
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-none px-4 py-4 lg:flex transition-all duration-300 ease-in-out", // Added transition for smooth changes
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2",
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-neutral-300 hover:text-white transition-colors duration-200" // Text color adjusted for dark background
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-gray-700/50 dark:bg-neutral-800/70" // Adjusted hover background for better blend
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        backgroundColor: visible ? "rgba(17, 24, 39, 0.8)" : "transparent", // Dark semi-transparent background
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "calc(100% - 2rem)" : "100%", // Adjusted width for mobile
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "0.75rem" : "0px", // rounded-xl when visible, sharp when at top
        y: visible ? 16 : 0, // Move down slightly when visible
        paddingTop: visible ? "0.75rem" : "1rem",
        paddingBottom: visible ? "0.75rem" : "1rem",
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between rounded-none px-0 py-4 lg:hidden transition-all duration-300 ease-in-out", // Added transition for smooth changes
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-xl bg-gradient-to-br from-gray-900 to-black px-4 py-8 shadow-2xl dark:bg-neutral-950", // Added gradient and stronger shadow
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <IconX className="text-white dark:text-white" onClick={onClick} /> // Icon color adjusted for dark background
  ) : (
    <IconMenu2 className="text-white dark:text-white" onClick={onClick} /> // Icon color adjusted for dark background
  );
};

export const NavbarLogo = () => {
  return (
    <a
      href="#"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-white" // Text color adjusted for dark background
    >
      <img
        src="images/ICTO_Logo.png"
        alt="logo"
        width={30}
        height={30}
        onError={(e) => {
          e.currentTarget.src = "https://placehold.co/30x30/000000/FFFFFF?text=Logo"; // Placeholder on error
        }}
      />
      <span className="font-medium text-white dark:text-white">OJT</span>
    </a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-4 py-2 rounded-full text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-flex items-center gap-2 text-center"; // Added rounded-full to baseStyles

  const variantStyles = {
    primary:
      "bg-white text-gray-900 shadow-md hover:shadow-lg transition-all duration-300", // Refined shadow and transition
    secondary: "bg-transparent shadow-none text-white dark:text-white hover:text-gray-300 transition-colors duration-200", // Text color adjusted
    dark: "bg-gray-800 text-white shadow-md hover:shadow-lg transition-all duration-300", // Refined shadow and transition
    gradient:
      "bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-xl hover:shadow-purple-700/50 transition-all duration-300", // Gradient inspired by HeroSectionOne
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
