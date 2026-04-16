// src/components/Pricing.jsx
import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      features: ["Up to 50 orders", "Team notifications"],
    },
    {
      name: "Growth",
      price: "$25/mo", // discounted price
      oldPrice: "$55/mo", // original crossed-out price
      features: [
        "Up to 5,000 orders",
        "Team notifications",
        "Client confirmation messages",
        "Inventory updates",
        "Low inventory updates",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Unlimited orders",
        "Everything in Growth",
        "Custom workflow automation",
      ],
    },
  ];

  return (
    <section className="relative z-10 py-24 px-6 md:px-16 bg-transparent">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
          Pricing Plans
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
          Start free, then scale as your business grows.
        </p>
      </div>

      {/* Plans Grid */}
      <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl 
                       p-10 shadow-lg transition transform hover:-translate-y-2 
                       hover:shadow-green-500/20 flex flex-col ${
                         plan.highlighted
                           ? "ring-2 ring-green-500 shadow-green-500/30 scale-105"
                           : ""
                       }`}
          >
            <div className="flex-grow flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-4 text-white">
                {plan.name}
              </h3>

              {/* Price with discount logic */}
              {plan.oldPrice ? (
                <div className="mb-6 text-center">
                  <p className="text-2xl font-semibold text-gray-400 line-through">
                    {plan.oldPrice}
                  </p>
                  <p className="text-5xl font-extrabold text-green-400">
                    {plan.price}
                  </p>
                </div>
              ) : (
                <p className="text-4xl font-extrabold text-green-400 mb-6">
                  {plan.price}
                </p>
              )}

              <ul className="space-y-3 text-gray-300 mb-8 text-left">
                {plan.features.map((feature) => (
                  <li key={feature}>✔ {feature}</li>
                ))}
              </ul>
            </div>

            {/* CTA button aligned across all plans */}
            <a
              href="https://cal.com/usamabuilds/30min"
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-auto px-6 py-3 rounded-xl font-semibold transition w-full text-center ${
                plan.highlighted
                  ? "bg-green-500 text-black hover:bg-green-400"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              Get Started
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
