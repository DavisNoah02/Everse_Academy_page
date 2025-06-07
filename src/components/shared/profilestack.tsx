import react from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';


export default function ProfileStack() {
  const profiles = Array.from({ length: 2}, (_, i) => ({
    id: i,
    gradient: [
      "from-purple-500 to-pink-600",
     "from-purple-500 to-pink-600",
    ][i],
  }));

  return (
    <motion.div
      className="flex justify-center mt-12"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 1.5 }}
    >
      <div className="flex items-center">
        <div className="flex -space-x-3">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.id}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6 + index * 0.1 }}
              whileHover={{ scale: 1.1, zIndex: 10 }}
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${profile.gradient} border-3 border-white shadow-lg flex items-center justify-center`}>
                <Users className="w-5 h-5 text-white" />
              </div>
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity"
                initial={false}
              />
            </motion.div>
          ))}
          <motion.div
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg border-2 border-white/30 flex items-center justify-center text-white text-xs font-bold shadow-lg"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.2 }}
            whileHover={{ scale: 1.05 }}
          >
            +99
          </motion.div>
        </div>
        <motion.div
          className="ml-6"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.3 }}
        >
          <p className="text-white/90 text-sm md:text-base font-medium">
            Join  Other +99 learners
          </p>
          <p className="text-white/60 text-xs md:text-sm">
            Already subscribed for launch updates
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}