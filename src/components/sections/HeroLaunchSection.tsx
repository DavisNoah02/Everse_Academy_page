import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Clock, Sparkles, Code, Users, Trophy } from "lucide-react";
// import Wavify from "react-wavify";

// Animated particles component
function AnimatedParticles() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 10,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// 3D Grid background component
function Grid3D() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent transform -skew-y-12 h-full w-full"></div>
      <div className="grid-pattern absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-white/30"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
}

// Enhanced CountdownTimer component
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 65,
    hours: 12,
    minutes: 30,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <motion.div
      className="flex justify-center space-x-4 md:space-x-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 + index * 0.1 }}
        >
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 md:p-6 shadow-2xl">
              <motion.div
                key={unit.value}
                className="text-2xl md:text-4xl font-bold text-white"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {unit.value.toString().padStart(2, "0")}
              </motion.div>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-30 -z-10"></div>
          </div>
          <p className="text-white/70 text-sm md:text-base mt-2 font-medium">
            {unit.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}

// Enhanced ProfileStack with better animations
function ProfileStack() {
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
          className="flex items-center space-x-2 text-white/80"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1 + index * 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <feature.icon className="w-5 h-5 text-purple-400" />
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

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-800 via-purple-900 to-slate-700 flex items-center justify-center overflow-hidden">
      {/* Academy Logo/Heading */}
        <motion.div
            className="absolute top-6 left-6 z-20"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{
              rotate: [0, 2, -2, 2, -2, 0],  // shaky rotation
              scale: 1.03,
              transition: { duration: 0.4, repeat: 0, ease: "easeInOut" }
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
      
      <Grid3D />
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

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-200 leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Learn. Grow.
          <br />
          <span className="text-gradient bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Dominate.
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 max-w-4xl mx-auto font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          E-verse Academy is Kenya's{" "}
          <span className="font-semibold text-purple-300">digital gateway</span>{" "}
          to professional tech skills.
          <br />
          Join a movement{" "}
          <span className="font-semibold text-pink-300">redefining learning</span>{" "}
          and unlocking opportunity.
        </motion.p>

        <FeatureHighlights />

        <motion.div className="mb-12 mt-16">
          <CountdownTimer />
        </motion.div>

        

        {/* Launching Soon CTA */}
        <motion.div
          className="flex justify-center mb-8"
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