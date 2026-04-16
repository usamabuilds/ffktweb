// src/Components/Features.jsx
import { motion } from "framer-motion";
import {
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
  PaperAirplaneIcon,
  ArchiveBoxIcon,
  BellAlertIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export default function Features() {
  const features = [
    {
      title: "All Critical Information at a Glance",
      desc: "View all essential metrics — orders, revenue, inventory, and alerts — instantly from one unified dashboard.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400/20 to-green-600/20 shadow-lg shadow-green-500/30">
          <ChartBarIcon className="w-10 h-10 text-green-400" />
        </div>
      ),
      img: "/dashboard-feature.png",
    },
    {
      title: "Automatic Detection of Orders",
      desc: "Every new order is instantly captured and added to your dashboard without manual input.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400/20 to-green-600/20 shadow-lg shadow-green-500/30">
          <ClipboardDocumentCheckIcon className="w-10 h-10 text-green-400" />
        </div>
      ),
      img: "/orders-feature.png",
    },
    {
      title: "Auto Inventory Updates",
      desc: "Stock levels adjust automatically as orders are fulfilled, always accurate and visible in real time.",
      icon: (
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400/20 to-green-600/20 shadow-lg shadow-green-500/30">
          <ArchiveBoxIcon className="w-10 h-10 text-green-400" />
        </div>
      ),
      img: "/inventory-feature.png",
    },
    {
      title: "Team Notifications",
      desc: "Your team gets notified in real-time with all order details to stay aligned.",
      icon: (
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400/20 to-green-600/20 shadow-md shadow-green-500/20">
          <UserGroupIcon className="w-8 h-8 text-green-400" />
        </div>
      ),
    },
    {
      title: "Low Inventory Alerts",
      desc: "Get notified when stock is running low so you can restock in time.",
      icon: (
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400/20 to-green-600/20 shadow-md shadow-green-500/20">
          <BellAlertIcon className="w-8 h-8 text-green-400" />
        </div>
      ),
    },
    {
      title: "Customer Confirmation",
      desc: "Send instant confirmation messages with tracking numbers and a thank you note.",
      icon: (
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400/20 to-green-600/20 shadow-md shadow-green-500/20">
          <PaperAirplaneIcon className="w-8 h-8 text-green-400" />
        </div>
      ),
    },
  ];

  return (
    <section className="relative z-10 py-24 px-6 md:px-16 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-20 text-center"
        >
          Here's How FulfilmentKit Makes Your Business Life Easier
        </motion.h2>

        {/* ===== FEATURE PAIRS (Top 3 Big Sections) ===== */}
        {features.slice(0, 3).map((item, i) => (
          <div
            key={i}
            className={`flex flex-col lg:flex-row items-center gap-16 mb-32 ${
              i % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE SIDE */}
            {item.img && (
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 1 ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex-1 flex justify-center"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-3xl shadow-2xl shadow-green-900/40 border border-green-900/20 w-full max-w-5xl object-cover"
                />
              </motion.div>
            )}

            {/* CARD SIDE */}
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 1 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex-1 max-w-lg backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-12 shadow-xl hover:shadow-green-500/30 transition transform hover:-translate-y-2"
            >
              <div className="mb-8 flex justify-center lg:justify-start">
                {item.icon}
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">
                {item.title}
              </h3>
              <p className="text-gray-300 text-lg">{item.desc}</p>
            </motion.div>
          </div>
        ))}

        {/* ===== Remaining Feature Grid ===== */}
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-10">
            {[features[3], features[4]].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-10 shadow-lg hover:shadow-green-500/20 transition transform hover:-translate-y-2"
              >
                <div className="mb-6 flex justify-center lg:justify-start">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Centered last card */}
          <div className="flex justify-center mt-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-full sm:w-1/2 backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-10 shadow-lg hover:shadow-green-500/20 transition transform hover:-translate-y-2"
            >
              <div className="mb-6 flex justify-center lg:justify-start">
                {features[5].icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                {features[5].title}
              </h3>
              <p className="text-gray-300">{features[5].desc}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
