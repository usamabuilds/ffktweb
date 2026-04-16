// src/Components/Hero.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const headlines = [
    "Automated Fulfilment.",
    "Happier Customers.",
    "Efficient Teams.",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 min-h-screen">
      {/* Headline container with fixed min-width */}
      <div className="flex items-center justify-center min-h-[7rem] md:min-h-[10rem] min-w-[22ch]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {/* Pulsing Glow */}
            <motion.span
              className="absolute inset-0 blur-2xl text-green-400 opacity-40 select-none"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              {headlines[index]}
            </motion.span>

            {/* Gradient text */}
            <h1
              className="relative text-6xl md:text-8xl font-extrabold leading-tight 
                         bg-gradient-to-r from-green-300 via-green-400 to-green-500 bg-clip-text text-transparent whitespace-nowrap"
            >
              {headlines[index]}
            </h1>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Tagline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-2xl text-gray-300 mt-12 mb-16"
      >
        <p>Fulfilment without chaos.</p>
        <p>Scale with confidence.</p>
      </motion.div>

      {/* CTA Button wired to Cal.com */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-14"
      >
        <a
          href="https://cal.com/usamabuilds/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-green-500 text-black font-bold text-lg rounded-2xl shadow-xl hover:bg-green-400 transition"
        >
          Get Started
        </a>
      </motion.div>
    </main>
  );
}
