import React from "react";
import { motion } from "framer-motion";
import { Shield, Users, Zap, Trophy, Star, TrendingUp, CheckCircle, Sparkles } from "lucide-react";

// Enhanced facts data with icons and improved content
const platformFacts = [
  {
    stat: "98%",
    title: "Success Rate",
    description: "Our students achieve their learning goals with personalized guidance and expert mentorship.",
    icon: Trophy,
    gradient: "from-emerald-500 to-green-600",
    glowColor: "emerald-500/25",
    bgPattern: "emerald-50/50"
  },
  {
    stat: "50k+",
    title: "Active Learners",
    description: "Join a thriving community of passionate learners from around the globe pursuing excellence.",
    icon: Users,
    gradient: "from-blue-500 to-indigo-600", 
    glowColor: "blue-500/25",
    bgPattern: "blue-50/50"
  },
  {
    stat: "24/7",
    title: "Expert Support",
    description: "Get instant help whenever you need it with our dedicated support team and AI-powered assistance.",
    icon: Shield,
    gradient: "from-purple-500 to-violet-600",
    glowColor: "purple-500/25", 
    bgPattern: "purple-50/50"
  },
  {
    stat: "15x",
    title: "Faster Learning",
    description: "Our adaptive learning technology accelerates your progress with personalized learning paths.",
    icon: Zap,
    gradient: "from-amber-500 to-orange-600",
    glowColor: "amber-500/25",
    bgPattern: "amber-50/50"
  },
  {
    stat: "4.9★",
    title: "Student Rating",
    description: "Consistently rated as the top learning platform by students and industry professionals worldwide.",
    icon: Star,
    gradient: "from-pink-500 to-rose-600",
    glowColor: "pink-500/25",
    bgPattern: "pink-50/50"
  },
  {
    stat: "500+",
    title: "Industry Partners",
    description: "Direct pathways to career opportunities with our extensive network of hiring partners.",
    icon: TrendingUp,
    gradient: "from-cyan-500 to-teal-600",
    glowColor: "cyan-500/25",
    bgPattern: "cyan-50/50"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

const StatCard = ({ fact, index }: { fact: typeof platformFacts[0], index: number }) => {
  const IconComponent = fact.icon;
  
  return (
    <motion.div
      variants={itemVariants}
      className="group relative"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Main Card */}
      <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 h-full 
                    border border-gray-200/60 shadow-sm hover:shadow-xl
                    transition-all duration-500 overflow-hidden
                    hover:border-gray-300/80">
        
        {/* Background Pattern */}
        <div className={`absolute inset-0 bg-gradient-to-br ${fact.bgPattern} opacity-0 
                        group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* Decorative Elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 
                       rounded-full opacity-20 group-hover:scale-125 transition-transform duration-700" />
        <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-tr from-gray-100 to-gray-200 
                       rounded-full opacity-20 group-hover:scale-110 transition-transform duration-700" />
        
        <div className="relative z-10">
          {/* Icon */}
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl 
                         bg-gradient-to-r ${fact.gradient} mb-6 shadow-lg shadow-${fact.glowColor}
                         group-hover:shadow-xl group-hover:shadow-${fact.glowColor} 
                         group-hover:scale-110 transition-all duration-500`}>
            <IconComponent className="w-8 h-8 text-white" />
          </div>
          
          {/* Stat */}
          <div className="mb-4">
            <motion.div 
              className={`text-5xl font-bold bg-gradient-to-r ${fact.gradient} bg-clip-text text-transparent
                         group-hover:scale-105 transition-transform duration-300`}
              whileInView={{ scale: [0.8, 1.1, 1] }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {fact.stat}
            </motion.div>
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 
                        transition-colors duration-300">
            {fact.title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 
                       transition-colors duration-300 text-sm">
            {fact.description}
          </p>
          
          {/* Hover Indicator */}
          <div className="mt-6 flex items-center text-transparent group-hover:text-gray-500 
                         transition-all duration-300 text-sm font-medium">
            <CheckCircle className="w-4 h-4 mr-2" />
            <span>Verified Achievement</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function WhyPlatformSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Geometric Patterns */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-slate-200/50 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 border border-blue-200/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/3 w-20 h-20 border border-purple-200/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-200/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative container mx-auto px-6 max-w-7xl">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm 
                      border border-blue-200/60 rounded-full px-6 py-3 mb-8 shadow-sm"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 text-sm font-semibold">Why Choose Us</span>
          </motion.div>
          
          {/* Main Title */}
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            The Numbers{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Speak for Themselves
            </span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful learners who've transformed their careers with our proven platform
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {platformFacts.map((fact, index) => (
            <StatCard key={index} fact={fact} index={index} />
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 shadow-2xl max-w-4xl mx-auto overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-emerald-500/5" />
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to join our{" "}
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  success story?
                </span>
              </h3>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Don't just take our word for it. Experience the difference yourself with our free trial.
              </p>
              <motion.button
                className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-10 py-4 
                          rounded-2xl font-bold text-lg shadow-lg shadow-blue-500/25 
                          hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey Today
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}