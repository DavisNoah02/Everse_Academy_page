import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, 
  Target, 
  MapPin, 
  Award, 
  Briefcase, 
  Users, 
  BookOpen, 
  Search, 
  Clock, 
  CheckCircle,
  X,
  Youtube,
  Github,
  Chrome,
  ArrowRight,
  Sparkles,
  PlayCircle
} from "lucide-react";
import { useTheme } from "@/components/themeProvider";

const problemPoints = [
  {
    icon: Search,
    title: "Endless Searching",
    description: "Hours wasted finding the right tutorials across multiple platforms",
    platforms: ["YouTube", "StackOverflow", "Medium", "Reddit"]
  },
  {
    icon: Clock,
    title: "Outdated Content",
    description: "Following tutorials from 2018 that no longer work with current technology",
    platforms: ["Old Blogs", "Deprecated Docs", "Legacy Courses"]
  },
  {
    icon: BookOpen,
    title: "Fragmented Learning",
    description: "Jumping between different teaching styles with no clear progression path",
    platforms: ["FreeCodeCamp", "W3Schools", "Random Tutorials"]
  },
  {
    icon: Target,
    title: "No Clear Direction",
    description: "Learning random skills without a roadmap to your career goals",
    platforms: ["Scattered Resources", "No Structure", "Confusion"]
  }
];

const solutionPath = [
  {
    icon: PlayCircle,
    title: "Learn Fundamentals",
    description: "Start with solid foundations using our structured curriculum",
    color: "from-purple-500 to-indigo-500",
    step: 1
  },
  {
    icon: Target,
    title: "Build Real Projects", 
    description: "Apply your skills on industry-relevant projects with guidance",
    color: "from-blue-500 to-cyan-500",
    step: 2
  },
  {
    icon: Award,
    title: "Get Certified",
    description: "Earn recognized certifications that validate your expertise",
    color: "from-emerald-500 to-teal-500", 
    step: 3
  },
  {
    icon: Briefcase,
    title: "Land Your Job",
    description: "Connect with our hiring partners and launch your tech career",
    color: "from-amber-500 to-orange-500",
    step: 4
  }
];

const FloatingPlatforms = () => {
  const platforms = [
    { name: "YouTube", icon: Youtube, color: "text-red-500", delay: 0 },
    { name: "GitHub", icon: Github, color: "text-gray-600", delay: 0.5 },
    { name: "StackOverflow", icon: Chrome, color: "text-orange-500", delay: 1 },
    { name: "Reddit", icon: Chrome, color: "text-orange-600", delay: 1.5 },
    { name: "Medium", icon: BookOpen, color: "text-green-600", delay: 2 }
  ];

  return (
    <div className="relative w-full h-64 flex items-center justify-center">
      {/* Tangled lines representing confusion */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
        <motion.path
          d="M50,100 Q150,50 250,120 T450,80 Q500,140 400,180 T200,200 Q100,160 50,100"
          stroke="rgba(156, 163, 175, 0.3)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M100,80 Q200,140 350,60 T500,120 Q450,180 300,150 T150,190"
          stroke="rgba(156, 163, 175, 0.2)"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
        />
      </svg>
      
      {/* Floating platform icons */}
      {platforms.map((platform, idx) => {
        const PlatformIcon = platform.icon;
        return (
          <motion.div
            key={platform.name}
            className={`absolute bg-white rounded-lg p-3 shadow-lg border border-gray-200 ${platform.color}`}
            style={{
              left: `${20 + (idx * 15)}%`,
              top: `${30 + (idx % 2 === 0 ? 0 : 40)}%`,
              zIndex: 10
            }}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotate: 0,
              y: [0, -10, 0]
            }}
            transition={{ 
              duration: 0.8,
              delay: platform.delay,
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <PlatformIcon className="w-6 h-6" />
          </motion.div>
        );
      })}
      
      {/* Confused learner in center */}
      <motion.div
        className="relative z-20 bg-gray-800 text-white rounded-full p-4 shadow-xl"
        animate={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Users className="w-8 h-8" />
      </motion.div>
    </div>
  );
};

const LearningPath = () => {
  return (
    <div className="relative">
      {/* Connecting line */}
      <div className="absolute left-1/2 top-8 bottom-8 w-1 bg-gradient-to-b from-purple-400 via-blue-400 via-emerald-400 to-orange-400 transform -translate-x-1/2 rounded-full" />
      
      <div className="space-y-12">
        {solutionPath.map((step, idx) => {
          const StepIcon = step.icon;
          return (
            <motion.div
              key={step.title}
              className="relative flex items-center"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Step circle */}
              <div className="relative flex items-center justify-center w-16 h-16 mx-auto">
                <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-full shadow-lg`} />
                <div className="relative bg-white rounded-full p-2 shadow-sm">
                  <StepIcon className="w-6 h-6 text-gray-700" />
                </div>
                {/* Step number */}
                <div className="absolute -top-2 -right-2 bg-white border-2 border-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold text-gray-600">
                  {step.step}
                </div>
              </div>
              
              {/* Content */}
              <div className={`absolute ${idx % 2 === 0 ? 'right-full mr-8' : 'left-full ml-8'} w-64`}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/60">
                  <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default function WhySkillKenya() {
  const [activeTab, setActiveTab] = useState('problem');
  const { theme } = useTheme();

  return (
    <section className={`relative py-24 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-700 text-black"} overflow-hidden`}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm 
                      border border-white/20 rounded-full px-6 py-3 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 text-sm font-semibold">The Problem & Solution</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Why{" "}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              E-verse Academy?
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Transform your learning journey from chaos to clarity with Kenya's first comprehensive tech education platform
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Without E-verse Academy */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mr-4">
                  <X className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-200">
                  Without <span className="text-red-400">E-verse Academy</span>
                </h3>
              </div>
              
              <p className="text-slate-300 mb-8 leading-relaxed">
                Endless scattered tutorials. Navigating outdated lessons. Lost amidst overwhelming coding content with no clear direction.
              </p>

              <FloatingPlatforms />

              <div className="space-y-4 mt-8">
                {problemPoints.map((point, idx) => {
                  const PointIcon = point.icon;
                  return (
                    <motion.div
                      key={point.title}
                      className="flex items-start space-x-3 p-4 bg-slate-700/30 rounded-xl border border-slate-600/30"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <PointIcon className="w-4 h-4 text-red-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-200 mb-1">{point.title}</h4>
                        <p className="text-slate-400 text-sm">{point.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* With E-verse Academy */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-blue-900/30 to-emerald-900/30 backdrop-blur-sm rounded-3xl p-8 border border-blue-500/30 h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  With <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">E-verse Academy</span>
                </h3>
              </div>
              
              <p className="text-slate-200 mb-8 leading-relaxed">
                Streamlined, structured learning. Dive into current, curated content. Master coding with clarity and confidence at your own pace.
              </p>

              <div className="h-64 flex items-center justify-center">
                <LearningPath />
              </div>

              <div className="mt-8">
                <div className="bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-2xl p-6 border border-blue-400/30">
                  <h4 className="font-bold text-white mb-4 flex items-center">
                    <ArrowRight className="w-5 h-5 mr-2 text-emerald-400" />
                    Your Clear Path to Success
                  </h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center text-slate-200">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-2" />
                      Structured Curriculum
                    </div>
                    <div className="flex items-center text-slate-200">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
                      Hands-on Projects
                    </div>
                    <div className="flex items-center text-slate-200">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2" />
                      Industry Certifications
                    </div>
                    <div className="flex items-center text-slate-200">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-2" />
                      Career Placement
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}