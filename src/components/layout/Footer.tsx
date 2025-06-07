import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const animations = {
  container: {
    initial: "initial",
    whileInView: "animate",
    viewport: { once: true, margin: "-50px" },
    variants: {
      initial: { opacity: 0 },
      animate: { 
        opacity: 1,
        transition: { staggerChildren: 0.1, duration: 0.6 }
      }
    }
  },
  item: {
    variants: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }
  }
};

const socialLinks = [
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" }
];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Instructors", href: "/instructors" },
  { name: "Blog", href: "/blog" }
];

const supportLinks = [
  { name: "Help Center", href: "/help" },
  { name: "Contact Us", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" }
];

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-800 via-gray-700 to-cyan-800 py-4 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-50 h-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(66, 119, 203, 0.05),transparent_50%)]" />

        <div className="relative">
          {/* Main Footer Content */}
          <motion.div className="container mx-auto px-6 py-3" {...animations.container}>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 items-start text-left">

              {/* Company Info */}
              <motion.div className="lg:col-span-2" {...animations.item}>
                <div className="mb-6">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-4">
                    Everse Academy Kenya
                  </h3>
                  <p className="text-slate-300 text-base leading-normal max-w-lg">
                    Empowering Kenyans with industry-ready expertise through accessible, high-quality education that bridges the Everse Academy gap and creates opportunities.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-slate-300">
                    <div className="p-2 bg-slate-800 rounded-lg">
                      <Mail className="w-5 h-5 text-blue-400" />
                    </div>
                    <span>everse@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <div className="p-2 bg-slate-800 rounded-lg">
                      <Phone className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span>+254 729 239 023</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <div className="p-2 bg-slate-800 rounded-lg">
                      <MapPin className="w-5 h-5 text-purple-400" />
                    </div>
                    <span>Nairobi, Kenya</span>
                  </div>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div {...animations.item}>
                <h4 className="text-xl font-semibold mb-4 text-white">Quick Links</h4>
                <ul className="space-y-2">
                  {quickLinks.map(({ name, href }) => (
                    <li key={name}>
                      <Link
                        to={href}
                        className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

            
              
              {/* Support Links */}
              <motion.div {...animations.item}>
                <h4 className="text-xl font-semibold mb-4 text-white">Support</h4>
                <ul className="space-y-2">
                  {supportLinks.map(({ name, href }) => (
                    <li key={name}>
                      <Link
                        to={href}
                        className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            className="container mx-auto px-6 py-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 text-center md:text-left"> <span className="ml-2">Made with ❤️ by noa.dave</span></p>
              <p className="text-slate-400 text-center md:text-left">
                &copy; {new Date().getFullYear()} Everse Academy Kenya. All rights reserved.
              </p>
              
              <div className="flex gap-6 text-sm text-slate-400">
                <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
                <Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
}