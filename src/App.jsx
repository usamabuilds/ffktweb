// src/App.jsx
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import Focus from "./Components/Focus.jsx";
import Features from "./Components/Features.jsx";
import Pricing from "./Components/Pricing.jsx";
import Testimonials from "./Components/Testimonials.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden flex flex-col">
      {/* Background layer */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-green-950" />
        <div className="absolute bottom-10 right-10 w-[26rem] h-[26rem] bg-green-500/70 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section id="hero">
        <Hero />
      </section>

      {/* Focus */}
      <motion.section
        id="focus"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Focus />
      </motion.section>

      {/* ✅ Features (no motion wrapper) */}
      <section id="features">
        <Features />
      </section>

      {/* Pricing */}
      <motion.section
        id="pricing"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Pricing />
      </motion.section>

      {/* Testimonials */}
      <motion.section
        id="testimonials"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Testimonials />
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Contact />
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
