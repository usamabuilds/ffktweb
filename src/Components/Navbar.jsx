// src/Components/Navbar.jsx
export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 backdrop-blur-md bg-black/40 border-b border-white/10">
      {/* Logo same style as footer */}
      <a href="#hero" className="text-2xl font-bold text-white">
        Fulfilment<span className="text-green-400">Kit</span>
      </a>

      {/* Nav links */}
      <nav className="space-x-6 text-gray-300 text-sm font-medium hidden md:flex">
        <a href="#hero" className="hover:text-green-300 transition">
          Home
        </a>
        <a href="#focus" className="hover:text-green-300 transition">
          Our Focus
        </a>
        <a href="#features" className="hover:text-green-300 transition">
          Features
        </a>
        <a href="#pricing" className="hover:text-green-300 transition">
          Pricing
        </a>
        <a href="#testimonials" className="hover:text-green-300 transition">
          Testimonials
        </a>
        <a href="#contact" className="hover:text-green-300 transition">
          Contact Us
        </a>
      </nav>

      {/* CTA button wired to Cal.com */}
      <a
        href="https://cal.com/usamabuilds/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-6 px-6 py-2 rounded-full bg-green-500 text-black font-semibold shadow-lg hover:bg-green-400 transition hidden md:inline-block"
      >
        Get Started →
      </a>
    </header>
  );
}
