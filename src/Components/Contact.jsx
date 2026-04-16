// src/components/Contact.jsx
import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 py-20 px-6 sm:px-12 lg:px-20 max-w-4xl mx-auto"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
          Contact Us
        </h2>
        <p className="text-lg md:text-xl text-gray-400">
          Let’s automate your fulfilment and make operations effortless.
        </p>
      </div>

      {/* Contact Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl 
                   p-10 shadow-lg hover:shadow-green-500/20 transition 
                   transform hover:-translate-y-2 text-center space-y-6"
      >
        <div className="flex items-center justify-center space-x-4">
          <EnvelopeIcon className="w-7 h-7 text-green-400" />
          <span className="text-gray-200 text-lg">musama@jsequitur.com</span>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <PhoneIcon className="w-7 h-7 text-green-400" />
          <span className="text-gray-200 text-lg">+92 3255222875</span>
        </div>
        <p className="text-gray-400 text-sm">
          Available Mon–Fri, 9am–6pm. We’ll get back to you within 24 hours.
        </p>
      </motion.div>

      {/* Button (outside card) wired to Cal.com */}
      <div className="text-center mt-8">
        <a
          href="https://cal.com/usamabuilds/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 rounded-lg bg-green-500 text-black font-semibold hover:bg-green-400 transition"
        >
          Let’s Connect
        </a>
      </div>
    </section>
  );
}
