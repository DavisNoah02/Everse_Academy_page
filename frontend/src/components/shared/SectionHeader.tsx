import { motion } from "framer-motion";


interface SectionHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function SectionHeader({ title, subtitle, className = "" }: SectionHeaderProps) {
  return (
    <motion.div className={`text-center mb-16 ${className}`} {...fadeInUp}>
      
      <h2 className="text-4xl font-bold text-gradient bg-gradient-to-r from-purple-900 to-blue-600 bg-clip-text text-transparent">{title}</h2>
      <p className="text-xl text-slate-600 max-w-2xl mx-auto py-3">
        {subtitle}
      </p>
    </motion.div>
  );
}

