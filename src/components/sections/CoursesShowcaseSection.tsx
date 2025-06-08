import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Code, Palette, TrendingUp, Star, Zap, Sparkles, Crown } from "lucide-react";
import { useTheme } from "@/components/themeProvider";

const freeCourses = [
  {
    title: "Programming",
    description: "Master web development, mobile apps & software engineering with hands-on projects",
    icon: Code,
    gradient: "from-slate-600 to-slate-700",
    glowColor: "shadow-slate-500/20",
    level: "Beginner",
    learnings: ["Full-stack web development", "Mobile app development", "Software architecture", "Cloud deployment"]
  },
  {
    title: "Graphic Design",
    description: "Learn digital design, branding & visual communication that captivates audiences",
    icon: Palette,
    gradient: "from-purple-500 via-pink-500 to-indigo-500",
    glowColor: "shadow-purple-500/25",
    level: "Beginner",
    learnings: ["Brand identity design", "UI/UX fundamentals", "Digital illustration", "Print & packaging"]
  },
  {
    title: "Digital Marketing",
    description: "Excel in social media, SEO & content marketing strategies that drive results",
    icon: TrendingUp,
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
    glowColor: "shadow-blue-500/25",
    level: "Beginner",
    learnings: ["Social media strategy", "SEO optimization", "Content marketing", "Analytics & tracking"]
  },
  {
    title: "Animation",
    description: "Create compelling visual effects & motion graphics that tell powerful stories",
    icon: Sparkles,
    gradient: "from-violet-500 via-purple-500 to-blue-500",
    glowColor: "shadow-violet-500/25",
    level: "Beginner",
    learnings: ["2D/3D animation", "Motion graphics", "Visual effects", "Video editing"]
  }
];

const premiumCourses = [
  {
    title: "Advanced Programming",
    description: "Build enterprise-level applications using cutting-edge frameworks and architectural patterns.",
    icon: Code,
    gradient: "from-slate-700 to-slate-800",
    glowColor: "shadow-slate-600/25",
    level: "Advanced",
    learnings: ["React & Node.js mastery", "Database architecture", "DevOps & deployment", "System design patterns"]
  },
  {
    title: "Professional Design",
    description: "Master advanced design systems and create industry-standard visual solutions that inspire.",
    icon: Palette,
    gradient: "from-purple-600 via-pink-600 to-indigo-600",
    glowColor: "shadow-purple-600/30",
    level: "Advanced",
    learnings: ["Design systems", "Advanced prototyping", "Brand strategy", "Design leadership"]
  },
  {
    title: "Marketing Strategy",
    description: "Develop comprehensive marketing campaigns and growth strategies that scale businesses.",
    icon: TrendingUp,
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    glowColor: "shadow-blue-600/30",
    level: "Intermediate",
    learnings: ["Growth hacking", "Conversion optimization", "Marketing automation", "Data-driven decisions"]
  },
  {
    title: "3D Animation Pro",
    description: "Create professional animations and visual effects for film and digital media industries.",
    icon: Crown,
    gradient: "from-violet-600 via-purple-600 to-blue-600",
    glowColor: "shadow-violet-600/30",
    level: "Intermediate",
    learnings: ["3D modeling", "Character animation", "VFX compositing", "Render optimization"]
  }
];

type Course = {
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  glowColor: string;
  level: string;
  learnings: string[];
};

interface CourseCardProps {
  course: Course;
  index: number;
  isPremium?: boolean;
}

function CourseCard({ course, index, isPremium = false }: CourseCardProps) {
  const IconComponent = course.icon;
  
  return (
    <motion.div
      className={`relative bg-white-600/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-500/60 hover:border-blue-300/40 transition-all duration-300 group overflow-hidden shadow-sm hover:shadow-md hover:border-green-900`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ y: -2, scale: 1.02, transition: { duration: 0.18, ease: "easeOut" } }}
    >
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {/* Premium badge */}
      {isPremium && (
      <div className="absolute top-4 right-4">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
        <Crown className="w-3 h-3" />
        <span>PRO</span>
        </div>
      </div>
      )}

      {/* Icon */}
      <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${course.gradient} flex items-center justify-center mb-5 shadow-sm group-hover:shadow-md transition-shadow duration-300`}>
      <IconComponent className="w-6 h-6 text-white" />
      </div>

      {/* Title & Description */}
      <h3 className="text-xl font-semibold text-white-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
      {course.title}
      </h3>
      <p className="text-white-700 text-sm mb-6 leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
      {course.description}
      </p>

      {/* What you'll learn */}
      <div className="mb-6">
      <h4 className="text-blue-600 font-medium text-sm mb-3 flex items-center space-x-2">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
        <span>What you'll learn:</span>
      </h4>
      <div className="space-y-2">
        {course.learnings.map((learning, idx) => (
        <motion.div 
          key={idx} 
          className="flex items-start text-gray-500 group-hover:text-gray-700 transition-colors duration-300"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.05 + idx * 0.03 }}
        >
          <div className="w-1 h-1 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0" />
          <span className="text-sm">{learning}</span>
        </motion.div>
        ))}
      </div>
      </div>

      {/* Level Badge */}
      <div className="mb-4">
      <span className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-300 ${
        course.level === 'Beginner' ? 'bg-green-50 text-green-700 border-green-200 group-hover:bg-green-100' :
        course.level === 'Intermediate' ? 'bg-amber-50 text-amber-700 border-amber-200 group-hover:bg-amber-100' :
        'bg-red-50 text-red-700 border-red-200 group-hover:bg-red-100'
      }`}>
        {course.level}
      </span>
      </div>
    </motion.div>
  );
}

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState('free');
   const { theme } = useTheme();

  return (
    <section
      className={`py-12 px-6 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-300 text-black"
      }`}
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Subtle geometric patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-20 left-20 w-32 h-32 border border-slate-200 rounded-full" />
          <div className="absolute top-40 right-32 w-24 h-24 border border-blue-200 rounded-full" />
          <div className="absolute bottom-32 left-1/4 w-20 h-20 border border-purple-200 rounded-full" />
          <div className="absolute bottom-20 right-20 w-28 h-28 border border-slate-200 rounded-full" />
        </div>
        
        {/* Minimal gradient overlays */}
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-purple-100/20 rounded-full blur-3xl" />
      </div>
      
      <div className="relative container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-6 shadow-sm"
            whileHover={{ scale: 1.02 }}
          >
            <BookOpen className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 text-sm font-medium">Course Catalog</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Courses
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From beginner-friendly free courses to advanced premium programs - discover your perfect learning journey
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-gray-200/60">
            <div className="grid grid-cols-2 gap-2">
              <motion.button
                className={`relative px-8 py-4 rounded-xl font-medium transition-all duration-300 flex items-center space-x-3 overflow-hidden ${
                  activeTab === 'free'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('free')}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <Zap className="w-5 h-5" />
                <span>Free Courses</span>
              </motion.button>
              
              <motion.button
                className={`relative px-8 py-4 rounded-xl font-medium transition-all duration-300 flex items-center space-x-3 overflow-hidden ${
                  activeTab === 'premium'
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('premium')}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <Star className="w-5 h-5" />
                <span>Premium Courses</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Course Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          layout
        >
          {activeTab === 'free' ? (
            freeCourses.map((course, index) => (
              <CourseCard key={`free-${index}`} course={course} index={index} isPremium={false} />
            ))
          ) : (
            premiumCourses.map((course, index) => (
              <CourseCard key={`premium-${index}`} course={course} index={index} isPremium={true} />
            ))
          )}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl p-10 shadow-2xl max-w-3xl mx-auto border border-slate-700/50 overflow-hidden group">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-indigo-500/5 group-hover:from-purple-500/10 group-hover:via-blue-500/10 group-hover:to-indigo-500/10 transition-all duration-700" />
            
            <div className="relative">
              <h3 className="text-3xl font-bold text-white mb-4">
                Can't find what you're{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  looking for?
                </span>
              </h3>
              <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                We're constantly adding new courses. Request a specific topic and we'll prioritize it for our community.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.button
                  className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-500 border border-purple-400/20 hover:cursor-pointer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request a Course
                </motion.button>
                <motion.button
                  className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-500 border border-blue-400/20 hover:cursor-pointer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All Courses
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}