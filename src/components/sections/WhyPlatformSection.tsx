import { motion } from "framer-motion";
import SectionHeader from "../shared/SectionHeader";
import { facts } from "../../data/features";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function WhyPlatformSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Learning Facts & Insights"
          subtitle="Discover the impact of quality education and skill development in Kenya"
        />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {facts.map((fact, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center text-center"
              variants={fadeInUp}
            >
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{fact.stat}</div>
              <div className="text-lg font-semibold mb-1">{fact.title}</div>
              <div className="text-gray-500 dark:text-gray-300 text-sm">{fact.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}