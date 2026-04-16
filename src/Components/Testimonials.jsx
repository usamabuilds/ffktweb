// src/components/Testimonials.jsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Testimonials() {
  const feedbacks = [
    {
      name: "Sarah L.",
      role: "E-commerce Founder",
      quote:
        "Fulfilment Kit saves me hours every week. My team finally stopped copy-pasting orders. Everything runs smoothly now.",
    },
    {
      name: "James K.",
      role: "Ops Manager",
      quote:
        "The automation cut our errors by 90%. Customers get updates instantly and our stock alerts keep us ahead.",
    },
    {
      name: "Aisha R.",
      role: "Brand Owner",
      quote:
        "Before this, fulfilment was chaos. Now it feels effortless. Honestly the best investment we made this year.",
    },
    {
      name: "David M.",
      role: "Supply Chain Lead",
      quote:
        "Inventory alerts save us from overselling. Customers are happier and so is my team.",
    },
    {
      name: "Emily W.",
      role: "Shopify Store Owner",
      quote:
        "I used to spend nights sending tracking numbers. Now it happens automatically. Huge relief.",
    },
    {
      name: "Hassan A.",
      role: "Operations Head",
      quote:
        "Order flow automation reduced our manual workload drastically. We can finally focus on growth.",
    },
    {
      name: "Priya N.",
      role: "Fashion Brand Owner",
      quote:
        "Customers love instant updates. It feels like a premium experience for them.",
    },
    {
      name: "Mark R.",
      role: "Fulfilment Manager",
      quote:
        "Best decision for our team. We haven’t missed a single update since switching to Fulfilment Kit.",
    },
    {
      name: "Sophia G.",
      role: "Startup Founder",
      quote:
        "Automating fulfilment early saved us from chaos as we scaled. A must-have tool.",
    },
    {
      name: "Ali T.",
      role: "Logistics Coordinator",
      quote:
        "The system is reliable and effortless. It feels like having an extra team member working 24/7.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % feedbacks.length);
    }, 5000); // auto slide every 5s
    return () => clearInterval(interval);
  }, [feedbacks.length]);

  return (
    <section className="relative z-10 py-24 px-6 md:px-16 text-center bg-transparent overflow-hidden">
      {/* Section Heading */}
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
          What Our Clients Say
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Real words from businesses that transformed their fulfilment.
        </p>
      </div>

      {/* Testimonial Card */}
      <div className="relative max-w-3xl mx-auto">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl 
                     p-10 shadow-lg hover:shadow-green-500/20 transition 
                     transform hover:-translate-y-2"
        >
          <p className="italic text-gray-300 mb-6">
            “{feedbacks[index].quote}”
          </p>
          <h4 className="text-lg font-semibold text-green-400">
            {feedbacks[index].name}
          </h4>
          <p className="text-sm text-gray-400">{feedbacks[index].role}</p>
        </motion.div>
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {feedbacks.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-green-400" : "bg-gray-600"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
