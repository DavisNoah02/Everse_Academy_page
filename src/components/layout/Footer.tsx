import { motion } from "framer-motion";
import {
  Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // simulate subscription
    setSubscribed(true);
    setMessage("✅ Thanks for subscribing!");
    setTimeout(() => setMessage(""), 5000);
  };

  return (
    <footer className="relative bg-slate-900 text-white px-6 py-14 overflow-hidden">
      {/* Radial background overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(66,119,203,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)] pointer-events-none" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-10"
      >
        {/* Company Info */}
        <div className="space-y-5">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
            Everse Academy Kenya
          </h2>
          <p className="text-slate-300">
            Bridging the gap in digital skills through world-class training for future-ready Kenyans.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="text-blue-400 w-5 h-5" />
              <span>everse@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-emerald-400 w-5 h-5" />
              <span>+254 729 239 023</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-purple-400 w-5 h-5" />
              <span>Nairobi, Kenya</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-slate-300">
            {["About Us", "Courses", "Instructors", "Blog"].map((item) => (
              <li key={item}>
                <Link to={`/${item.toLowerCase().replace(" ", "")}`} className="hover:text-white transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-slate-300">
            {["Contact Us", "Privacy Policy", "Cookies Policy", "Terms of Service"].map((item) => (
              <li key={item}>
                <Link to={`/${item.toLowerCase().replace(/ /g, "")}`} className="hover:text-white transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
          <p className="text-slate-300 mb-3">
            Get updates, tips, and offers directly to your inbox.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-slate-800 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
              disabled={subscribed}
            >
              {subscribed ? "Subscribed ✅" : "Subscribe"}
            </button>
          </form>
          {message && <p className="text-green-400 mt-2 text-sm">{message}</p>}
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="relative z-10 mt-12 pt-6 border-t border-slate-700 text-slate-400 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} Everse Academy Kenya. All rights reserved.</p>
        <div className="flex gap-6">
          {[
            { href: "#", icon: Facebook },
            { href: "#", icon: Twitter },
            { href: "#", icon: Instagram },
            { href: "#", icon: Linkedin },
          ].map(({ href, icon: Icon }, idx) => (
            <a key={idx} href={href} className="hover:text-white transition">
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
        <p>Built with ❤️ by <a href="https://github.com/noa-dave" target="_blank" className="text-blue-400 hover:underline">noa.dave</a></p>
      </div>
    </footer>
  );
};

export default Footer;
