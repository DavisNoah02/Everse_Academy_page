import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [progress, setProgress] = useState(100); // Progress percentage

  useEffect(() => {
    // Hardcoded launch date (e.g., 60 days from a specific date)
    const launchDate = new Date("2025-06-12T00:00:00Z"); 
    const totalDuration = launchDate.getTime() - new Date().getTime(); 

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      // Calculate time left
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      // Calculate progress percentage
      const remainingPercentage = Math.max((distance / totalDuration) * 100, 0); // Ensure it doesn't go below 0
      setProgress(remainingPercentage);

      // Stop the timer if the countdown is complete
      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setProgress(0); // Set progress to 0 when countdown ends
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Countdown Timer */}
      <div className="flex gap-4 justify-center">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <motion.div
            key={unit}
            className="text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
              <div className="text-3xl font-bold text-white">{value.toString().padStart(2, "0")}</div>
              <div className="text-sm text-gray-300 capitalize">{unit}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-lg bg-gray-700 rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-pulse"
          style={{ width: `${progress}%` }} // Dynamic width based on progress
          initial={{ width: "100%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: "linear" }}
        />
      </div>
    </div>
  );
}