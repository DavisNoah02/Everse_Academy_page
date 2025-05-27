import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import CountdownTimer from "../shared/CountdownTimer";

// Profile Stacking Component
function ProfileStack() {
  const profiles = [
    "/placeholder.svg?height=40&width=40",
    "/placeholder.svg?height=40&width=40",
    "/placeholder.svg?height=40&width=40",
    "/placeholder.svg?height=40&width=40",
    "/placeholder.svg?height=40&width=40",
  ];

  return (
    <motion.div
      className="flex items-center justify-center mt-8"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <div className="flex items-center">
        <div className="flex -space-x-2">
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
            >
              <img
                src={profile || "/placeholder.svg"}
                alt={`Profile ${index + 1}`}
                className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-purple-400 to-pink-400"
              />
            </motion.div>
          ))}
          <motion.div
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white flex items-center justify-center text-white text-sm font-semibold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.7 }}
          >
            +10K
          </motion.div>
        </div>
        <motion.p
          className="ml-4 text-white/80 text-sm"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8 }}
        >
          Join 10,000+ learners already waiting
        </motion.p>
      </div>
    </motion.div>
  );
}

export default function HeroLaunchSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          E-verse Academy
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Your gateway to professional skills. Empowering Kenyans with industry-ready expertise.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <CountdownTimer />
        </motion.div>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Badge variant="secondary" className="text-lg px-4 py-2">
            <Clock className="w-4 h-4 mr-2" />
            Launching Soon
          </Badge>
        </motion.div>
        <ProfileStack />
      </motion.div>
    </section>
  );
}