import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div className="grid md:grid-cols-4 gap-8" {...fadeInUp}>
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Skill Kenya</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering Kenyans with industry-ready expertise through accessible, high-quality education.
            </p>
            <div className="flex gap-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Instructors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@skillkenya.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+254 700 000 000</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Skill Kenya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}