import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Code, Palette, TrendingUp, Star, Zap } from "lucide-react";

const freeCourses = [
  {
    title: "Programming",
    description: "Master web development, mobile apps & software engineering",
    icon: Code,
    gradient: "from-blue-500 to-cyan-500",
    level: "Beginner",
    learnings: ["Full-stack web development", "Mobile app development", "Software architecture", "Cloud deployment"]
  },
  {
    title: "Graphic Design",
    description: "Learn digital design, branding & visual communication",
    icon: Palette,
    gradient: "from-pink-500 to-purple-500",
    level: "Beginner",
    learnings: ["Brand identity design", "UI/UX fundamentals", "Digital illustration", "Print & packaging"]
  },
  {
    title: "Digital Marketing",
    description: "Excel in social media, SEO & content marketing",
    icon: TrendingUp,
    gradient: "from-green-500 to-teal-500",
    level: "Beginner",
    learnings: ["Social media strategy", "SEO optimization", "Content marketing", "Analytics & tracking"]
  },
  {
    title: "Animation",
    description: "Create compelling visual effects & motion graphics",
    icon: Code,
    gradient: "from-purple-500 to-indigo-500",
    level: "Beginner",
    learnings: ["2D/3D animation", "Motion graphics", "Visual effects", "Video editing"]
  }
];

const premiumCourses = [
  {
    title: "Advanced Programming",
    description: "Build enterprise-level applications using modern frameworks and best practices.",
    icon: Code,
    gradient: "from-blue-600 to-indigo-600",
    level: "Advanced",
    learnings: ["React & Node.js mastery", "Database architecture", "DevOps & deployment", "System design patterns"]
  },
  {
    title: "Professional Design",
    description: "Master advanced design systems and create industry-standard visual solutions.",
    icon: Palette,
    gradient: "from-rose-500 to-pink-500",
    level: "Advanced",
    learnings: ["Design systems", "Advanced prototyping", "Brand strategy", "Design leadership"]
  },
  {
    title: "Marketing Strategy",
    description: "Develop comprehensive marketing campaigns and growth strategies for businesses.",
    icon: TrendingUp,
    gradient: "from-purple-600 to-pink-600",
    level: "Intermediate",
    learnings: ["Growth hacking", "Conversion optimization", "Marketing automation", "Data-driven decisions"]
  },
  {
    title: "3D Animation Pro",
    description: "Create professional animations and visual effects for film and digital media.",
    icon: Code,
    gradient: "from-emerald-500 to-teal-500",
    level: "Intermediate",
    learnings: ["3D modeling", "Character animation", "VFX compositing", "Render optimization"]
  }
];

type Course = {
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
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
      className="relative bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >

      {/* Icon */}
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.gradient} flex items-center justify-center mb-4`}>
        <IconComponent className="w-6 h-6 text-white" />
      </div>

      {/* Title & Description */}
      <h3 className="text-xl font-bold text-white mb-3">
        {course.title}
      </h3>
      <p className="text-slate-400 text-sm mb-6 leading-relaxed">
        {course.description}
      </p>

      {/* What you'll learn */}
      <div className="mb-6">
        <h4 className="text-blue-400 font-semibold text-sm mb-3">What you'll learn:</h4>
        <div className="space-y-2">
          {course.learnings.map((learning, idx) => (
            <div key={idx} className="flex items-start text-slate-300">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <span className="text-sm">{learning}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Level Badge */}
      <div className="mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          course.level === 'Beginner' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
          course.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
          'bg-red-500/20 text-red-400 border border-red-500/30'
        }`}>
          {course.level}
        </span>
      </div>

      
    </motion.div>
  );
}

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState('free');

  return (
    <section className="py-20 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-200">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2 mb-4">
            <BookOpen className="w-4 h-4 text-purple-600" />
            <span className="text-purple-700 text-sm font-medium">Course Catalog</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From beginner-friendly free courses to advanced premium programs - find your perfect learning path
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
            <div className="grid grid-cols-2 gap-2">
              <motion.button
                className={`px-8 py-3 rounded-xl font-semibold transition-all flex items-center space-x-2 ${
                  activeTab === 'free'
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setActiveTab('free')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Zap className="w-4 h-4 text-gray-700" />
                <span>Free Courses</span>
              </motion.button>
              
              <motion.button
                className={`px-8 py-3 rounded-xl font-semibold transition-all flex items-center space-x-2 ${
                  activeTab === 'premium'
                    ? 'bg-gradient-to-r from-green-400 to-cyan-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setActiveTab('premium')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Star className="w-4 h-4 text-gray-700" />
                <span>Premium Courses</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {activeTab === 'free' ? (
            freeCourses.map((course, index) => (
              <CourseCard key={index} course={course} index={index} isPremium={false} />
            ))
          ) : (
            premiumCourses.map((course, index) => (
              <CourseCard key={index} course={course} index={index} isPremium={true} />
            ))
          )}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-purple-500 via-blue-600 to-cyan-500 text-gray-600 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Can't find what you're looking for?
            </h3>
            <p className="text-gray-900 mb-6">
              We're constantly adding new courses. Request a specific topic and we'll prioritize it.
            </p>
            <div className="flex flex-row justify-center gap-4">
              <motion.button
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:border hover:border-gray-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              >
              Request a Course
              </motion.button>
              <motion.button
              className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:border hover:border-gray-200 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              >
              View All
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
