import { motion } from "framer-motion";
import SectionHeader from "../shared/SectionHeader";
import { facts } from "../../data/features";

const animations = {
  container: {
    animate: { transition: { staggerChildren: 0.15 } }
  },
  item: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function WhyPlatformSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-200">
      <div className="container mx-auto px-6 lg:px-8 ">
        <SectionHeader 
          title="Why Choose Our Platform" 
          subtitle="Discover what makes us different"
        />
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          variants={animations.container}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {facts.map((fact, idx) => (
            <motion.div
              key={idx}
              variants={animations.item}
              className="group p-8 rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-3xl 
                 border-2 border-gray-100 hover:border-green-300 
                 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl font-bold text-blue-900 mb-4 
                      group-hover:scale-110 transition-transform duration-300">
              {fact.stat}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-500 mb-3">
              {fact.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
              {fact.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}