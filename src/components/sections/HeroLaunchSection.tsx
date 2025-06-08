import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Clock, Sparkles, Code, Users, Trophy } from "lucide-react";
import ProfileStack from "../shared/profilestack";
import CountdownTimer from "../shared/CountdownTimer";
import AnimatedParticles from "../shared/AnimatedParticles";
import Grid3D from "../shared/3DGrid";
import { useTheme } from "@/components/themeProvider";

// import Wavify from "react-wavify";


// Feature highlights component
function FeatureHighlights() {
  const features = [
    { icon: Code, label: "Professional Skills" },
    { icon: Users, label: "Expert Mentors" },
    { icon: Trophy, label: "Certified Programs" },
  ];

  return (
    <motion.div
      className="flex justify-center space-x-8 mt-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0 }}
    >
      {features.map((feature, index) => (
        <motion.div
          key={feature.label}
          className="flex items-center  space-x-2 text-white/80"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1 + index * 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
        <feature.icon className="w-8 h-8 text-green-600" />
          <span className="text-sm md:text-base font-medium">{feature.label}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function HeroLaunchSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, 50]);
  const { theme } = useTheme();


  return (
    <section
      className={`relative min-h-screen py-12 px-6 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-600 text-black"
      }`}
    >
      {/* Academy Logo/Heading */}
        <motion.div
            className="absolute top-6 left-6 z-20"
            initial={{ opacity: 0, y: -40, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 10, delay: 0.1 }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 32px 8px rgba(168,85,247,0.25)",
              filter: "brightness(1.15)",
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-6 py-3 shadow-2xl">
              <h2 className="text-white font-bold text-lg md:text-xl">
          E-verse Academy
          <span className="block text-sm font-medium text-purple-300">Kenya</span>
              </h2>
            </div>
        </motion.div>
      {/* Enhanced background layers */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900/50 to-pink-900/30"
        style={{ y: y1 }}
      />

      {/* 3D Grid Background */}
      <Grid3D />
       
       {/* Animated Particles */}
      <AnimatedParticles />
      
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"
        style={{ y: y2 }}
      />
      <motion.div
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Enhanced typography */}
        <motion.div
          className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-4 py-2 mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="text-white/90 text-sm font-medium">Kenya's Premier Tech Academy</span>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-6xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-200 leading-tight mb-4"
        >
          Learn. Grow.
          <br />
          <span className="text-gradient bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Dominate.
          </span>
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 max-w-4xl mx-auto font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          E-verse Academy is Kenya's{" "}
          <span className="font-semibold text-green-200">digital gateway</span>{" "}
          to professional tech skills.
          <br />
          Join a movement{" "}
          <span className="font-semibold text-green-400">redefining learning</span>{" "}
          and unlocking opportunity.
        </motion.p>

{/* feature highlights */}
        <FeatureHighlights />


{/* Launching Soon CTA */}
        <motion.div
          className="flex justify-center mt-12 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 backdrop-blur-lg rounded-full px-8 py-4 shadow-2xl font-semibold text-lg flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>Launching Soon</span>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity -z-10"></div>
          </motion.div>
        </motion.div>


{/* Countdown Timer */}
        <motion.div className="mb-12 mt-16">
          <CountdownTimer />
        </motion.div>

{/* Animated Profile Stack */}
        <div className="pb-8">
          <ProfileStack />
        </div>
      </motion.div>

     
      {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <Wavify
          fill="url(#2E2F32)" 
          paused={false}
          options={{
            height: 30, 
            amplitude: 10, 
            speed: 0.2,
            points: 3,
          }}
        >
          <defs>
      <linearGradient id="hero-to-beta-gradient" gradientTransform="rotate(90)">
        <stop offset="0%" stopColor="#6B46C1" /> 
        <stop offset="100%" stopColor="#4B0082" /> 
      </linearGradient>
    </defs>
        </Wavify>
      </div> */}
      
    </section>
  );
}