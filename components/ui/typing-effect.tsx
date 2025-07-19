"use client";

import * as React from "react";
import { motion } from "framer-motion";

export function TypingEffect({
  text = "Typing Effect",
  textSize = "text-md"
}: {
  text: string;
  textSize?: string;
}) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setIndex(index + 1);
      }, 50); // typing speed

      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <h2 className={`${textSize} font-medium text-center`}>
      {text.substring(0, index).split("").map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.05 }}
        >
          {letter}
        </motion.span>
      ))}
    </h2>
  );
}
