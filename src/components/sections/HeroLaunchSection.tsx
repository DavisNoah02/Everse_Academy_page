import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform} from "framer-motion";
import { Clock,GraduationCap , Sparkles, Code, Users, Trophy } from "lucide-react";
import ProfileStack from "../shared/profilestack";
import CountdownTimer from "../shared/CountdownTimer";
import AnimatedParticles from "../shared/AnimatedParticles";
import Grid3D from "../shared/3DGrid";
import { useTheme } from "@/components/themeProvider";
import LaunchingSoon from "../shared/LaunchingSoon"; 


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
      className={`relative min-h-screen flex items-center justify-center overflow-hidden py-8    ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-600 "
      }`}
    >
      
        
      {/* Enhanced background layers */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900/50 to-pink-900/30"
        style={{ y: y1 }}
      />

      {/* 3D Grid Background */}
      <Grid3D />
       
       {/* Animated Particles */}
      {/* <AnimatedParticles /> */}
      
      
      <motion.div
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Enhanced typography */}
        <motion.div
          className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-2 py-2 mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <GraduationCap className="w-6 h-6 text-green-400" />
          <span className="text-white/90 text-sm font-medium">Everse Tech Academy</span>
          <GraduationCap className="w-6 h-6 text-green-400" />
        </motion.div>

        <motion.h2
          className="text-4xl md:text-6xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-200 leading-tight mb-4"
        >
          Learn. Grow.
          <br />
          <span className="text-gradient bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Dominate.
          </span>
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 max-w-4xl mx-auto font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
           Kenya's{" "}
          <span className="font-semibold text-green-200">digital gateway</span>{" "}
          to professional tech skills.
          <br />
          Welcome{" "}
          <span className=" text-green-400"> to Your Future of Learning</span>{" "}
          and unlocking opportunity.
        </motion.p>

{/* feature highlights */}
        <FeatureHighlights />


{/* Launching Soon CTA */}
       {/* Improved Launching Soon CTA */}
<div className="mt-12 mb-8">
  <LaunchingSoon />
</div>




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