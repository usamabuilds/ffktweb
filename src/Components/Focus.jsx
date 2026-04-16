// src/components/Focus.jsx
import { motion } from "framer-motion";
import {
  ClockIcon,
  CheckBadgeIcon,
  FaceSmileIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/solid";

export default function Focus() {
  const items = [
    {
      title: "Save Time",
      desc: "Automate repetitive fulfilment tasks so your team can focus on growth.",
      icon: (
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400/20 to-green-600/20 shadow-md shadow-green-500/20">
          <ClockIcon className="w-8 h-8 text-green-400" />
        </div>
      ),
    },
    {
      title: "Reduce Errors",
      desc: "No more manual copy-paste mistakes. Every order, every update, 100% accurate.",
      icon: (
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400/20 to-green-600/20 shadow-md shadow-green-500/20">
          <CheckBadgeIcon className="w-8 h-8 text-green-400" />
        </div>
      ),
    },
    {
      title: "Happier Customers",
      desc: "Customers stay informed with real-time tracking and fewer support tickets.",
      icon: (
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400/20 to-green-600/20 shadow-md shadow-green-500/20">
          <FaceSmileIcon className="w-8 h-8 text-green-400" />
        </div>
      ),
    },
    {
      title: "Auto-Managed Inventory",
      desc: "Keep stock levels accurate across all channels with smart, automated syncing.",
      icon: (
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400/20 to-green-600/20 shadow-md shadow-green-500/20">
          <CubeTransparentIcon className="w-8 h-8 text-green-400" />
        </div>
      ),
    },
  ];

  return (
    <section
      id="focus"
      className="relative z-10 py-20 px-6 md:px-16 bg-transparent"
    >
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Your fulfilment should be smooth
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
          Creating that air-like experience for your customers that they return
          every time.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl 
                       p-10 shadow-lg hover:shadow-green-500/20 transition transform hover:-translate-y-2"
          >
            <div className="mb-6">{item.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-gray-300">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
