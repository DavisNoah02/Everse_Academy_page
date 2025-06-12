import React, { useState } from "react";
import { X, CheckCircle } from "lucide-react";

interface BetaAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BetaAccessModal({ isOpen, onClose }: BetaAccessModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    location: "",
    interest: "",
    github: "",
    consent: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" && "checked" in e.target ? (e.target as HTMLInputElement).checked : undefined;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.consent) {
      setError("Please fill required fields and agree to terms.");
      return;
    }
    setSubmitting(true);
    setError("");
    setTimeout(() => {
    //   console.log("Form submitted:", formData);
      setSuccess(true);
      setSubmitting(false);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-gray-900 rounded-xl p-6 w-full max-w-md relative shadow-lg border border-gray-700">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
          title="Close"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-white mb-2">Join Our Beta Program</h2>
          <p className="text-gray-400 text-sm">Get exclusive early access to cutting-edge learning experiences.</p>
        </div>

        {success ? (
          <div className="text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-green-400 mb-3">Application Submitted! 🎉</h3>
            <p className="text-gray-400 mb-6">Thank you for your interest. We will contact you soon.</p>
            <button
              onClick={onClose}
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-all"
            >
              Close
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
            data-vercel-analytics="true" // Vercel Forms integration
          >
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Full Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-800 text-gray-200 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Email Address *</label>
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-800 text-gray-200 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-1">Primary Learning Interest</label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-800 text-gray-200 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Choose your area of interest</option>
                <option value="Web Development">Web Development</option>
                <option value="Data Science">Data Science & Analytics</option>
                <option value="AI/ML">AI & Machine Learning</option>
                <option value="Mobile Development">Mobile Development</option>
                <option value="Cloud Computing">Cloud Computing</option>
                <option value="Cybersecurity">Cybersecurity</option>
                <option value="DevOps">DevOps & Infrastructure</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="w-5 h-5 text-blue-500 rounded focus:ring-blue-500 border-gray-600"
              />
              <label htmlFor="consent" className="text-sm text-gray-300 leading-relaxed">
                I agree to receive program updates and communications via email or other channels.
              </label>
            </div>

            {error && (
              <div className="p-3 bg-red-600 text-white rounded-lg">
                <p className="text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className={`w-full px-4 py-2 rounded-lg font-semibold text-white transition-all ${
                submitting
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
              }`}
            >
              {submitting ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Submitting...
                </span>
              ) : (
                "Submit Beta Application"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}