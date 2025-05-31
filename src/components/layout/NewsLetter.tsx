import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <section className="bg-gradient-to-r from-purple-600 via-gray-600 to-cyan-400 text-white rounded-md p-6 shadow-lg">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {/* Heading + Description */}
        <div className="text-center sm:text-left">
          <h2 className="text-lg sm:text-xl font-semibold">
            Get notified! Stay Updated
          </h2>
          <p className="text-sm sm:text-base text-slate-200 mt-1 font-normal">
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
          <button
            type="submit"
            disabled={isLoading || isSubscribed}
            className={` hover:cursor-pointer px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2 ${
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
          </button>
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
