import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      await axios.post("/api/subscribe", { email });
      setIsSubscribed(true);
      setMessage("✅ Thanks for subscribing! We'll keep you updated.");
    } catch (error) {
      console.error("Subscription failed:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 10000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <section className="bg-gradient-to-r from-purple-700 via-gray-500 to-cyan-800 text-white py-12 p-6 shadow-lg">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {/* Heading + Description */}
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-semibold text-center mb-4 text-gray-200">
            Get notified! Stay Updated
          </h2>
          <p className="text-sm text-center sm:text-base text-slate-200 mt-1 font-normal">
            Subscribe to our newsletter and never miss important updates, news, or offers.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row items-center gap-4 w-full"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 rounded-lg bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isLoading || isSubscribed}
            className={` bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-500 border border-purple-400/20 hover:cursor-pointer ${
              isSubscribed
                ? "bg-green-600 cursor-default text-white"
                : isLoading
                ? "bg-blue-400 text-white cursor-wait"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {isLoading
              ? "Subscribing..."
              : isSubscribed
              ? "Subscribed ✅"
              : "Subscribe"}
            {!isLoading && !isSubscribed && <span className="ml-2">→</span>}
          </motion.button>
        </form>

        {/* Message */}
        {message && (
          <p
            className={`text-center text-sm ${
              isSubscribed ? "text-green-400" : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}

        {/* Unsubscribe */}
        <p className="text-center text-sm text-slate-300">
          You can{" "}
          <a href="/newsletter" className="text-blue-400 underline">
            unsubscribe
          </a>{" "}
          anytime.
        </p>
      </div>
    </section>
  );
}
