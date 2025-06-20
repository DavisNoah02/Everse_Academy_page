import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FuzzyText from "../components/FuzzyText"; // Adjust if path differs

export default function NotFound() {
  const [seconds, setSeconds] = useState(25);
  const navigate = useNavigate();

  useEffect(() => {
    if (seconds === 0) {
      navigate("/");
      return;
    }
    const timer = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [seconds, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="animate-fade-in backdrop-blur-xl bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 shadow-xl rounded-2xl p-10 max-w-xl text-center space-y-6">
        
        {/* 404 + Not Found text */}
        <div className="flex flex-col items-center justify-center">
          <FuzzyText
            baseIntensity={0.3}
            hoverIntensity={0.5}
            enableHover={true}
            className="text-6xl md:text-7xl text-slate-800 dark:text-white"
          >
            404
          </FuzzyText>
          <FuzzyText
            baseIntensity={0.1}
            hoverIntensity={0.3}
            enableHover={true}
            className="text-lg md:text-xl text-slate-700 dark:text-slate-300 font-medium -mt-1"
          >
            Page Not Found
          </FuzzyText>
        </div>

        <p className="text-slate-600 dark:text-slate-400">
          The content you're looking for doesn't exist. Let's get you back on track.
        </p>

        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold shadow-md hover:bg-emerald-700 transition focus:outline-none focus:ring-2 focus:ring-emerald-500 hover:cursor-pointer active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Go to Homepage
        </button>

        <div className="text-slate-700 dark:text-slate-300 text-sm">
          Redirecting in{" "}
          <span className="font-bold text-emerald-600 dark:text-emerald-400">
            {seconds}
          </span>{" "}
          seconds...
        </div>
      </div>
    </div>
  );
}
