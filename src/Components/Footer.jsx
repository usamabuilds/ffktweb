// src/Components/Footer.jsx
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6"; // ✅ X logo (Twitter new icon)

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative z-10 backdrop-blur-md bg-white/5 border-t border-white/10 mt-20 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center text-gray-400 space-y-4">
        {/* Logo centered */}
        <div className="text-3xl font-bold text-white">
          Fulfilment<span className="text-green-400">Kit</span>
        </div>

        {/* Tagline */}
        <p className="text-gray-300 text-sm">
          Fulfilment without chaos. Scale with confidence.
        </p>

        {/* Built with love */}
        <p className="flex items-center gap-2 text-gray-400 text-sm">
          Built with love by Muhammad
          <a
            href="https://twitter.com/usamabuilds"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400 transition hover:scale-110"
          >
            <FaXTwitter size={16} />
          </a>
        </p>

        {/* Bottom Note */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} FulfilmentKit. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
