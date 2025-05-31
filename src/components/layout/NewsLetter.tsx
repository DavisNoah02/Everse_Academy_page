import React, { useState } from "react";
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
      // Send email to Resend API
      await axios.post("/api/subscribe", { email });

      // On success
      setIsSubscribed(true);
      setMessage("Thanks for subscribing! We'll keep you updated.");
    } catch (error) {
      console.error("Subscription failed:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-slate-700 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-slate-300 mb-6">
          Be the first to know when we launch. Subscribe to our newsletter for early access and beta testing opportunities.
        </p>

        {/* Success or Error Message */}
        {message && (
          <p className={`mb-4 ${isSubscribed ? "text-green-400" : "text-red-400"}`}>
            {message}
          </p>
        )}

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto border border-slate-600 p-4 rounded-lg bg-slate-800"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full sm:w-auto px-4 py-3 rounded-lg bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={isLoading || isSubscribed}
            className={`px-6 py-3 rounded-lg shadow-lg transition-all ${
              isSubscribed
                ? "bg-blue-500 text-white cursor-default"
                : "bg-blue-600 text-white hover:bg-blue-800"
            }`}
          >
            {isLoading ? "Subscribing..." : isSubscribed ? "Subscribed!" : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
}