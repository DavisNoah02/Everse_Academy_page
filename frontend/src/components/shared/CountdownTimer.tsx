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
  const [progress, setProgress] = useState(0); // Progress percentage (days passed)

  useEffect(() => {
    // Check if a launch date already exists in local storage
    let launchDate = localStorage.getItem("launchDate");

    if (!launchDate) {
      // If no launch date exists, set it to 60 days from now and save it in local storage
      const newLaunchDate = new Date();
      newLaunchDate.setDate(newLaunchDate.getDate() + 60);
      launchDate = newLaunchDate.toISOString();
      localStorage.setItem("launchDate", launchDate);
    }

    const totalDuration = new Date(launchDate).getTime() - new Date().getTime(); // Total countdown duration in milliseconds

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(launchDate).getTime() - now;

      // Calculate time left
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      // Calculate progress percentage (days passed)
      const elapsedPercentage = Math.min(((totalDuration - distance) / totalDuration) * 100, 100); // Ensure it doesn't exceed 100%
      setProgress(elapsedPercentage);

      // Stop the timer if the countdown is complete
      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setProgress(100); // Set progress to 100% when countdown ends
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
          className="h-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500"
          style={{ width: `${progress}%` }} // Dynamic width based on days passed
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: "linear" }}
        />
      </div>
    </div>
  );
}