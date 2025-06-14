import React, { useState } from "react";
import { X, CheckCircle, AlertCircle } from "lucide-react";
import { submitForm } from "@/services/formspree";
import { verifyEmailHunter } from "@/services/hunter";

interface BetaAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  interest: string;
  github: string;
  consent: boolean;
  botField: string;
}

interface ValidationErrors {
  [key: string]: string;
}

export default function BetaAccessModal({ isOpen, onClose }: BetaAccessModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    location: "",
    interest: "",
    github: "",
    consent: false,
    botField: "",
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [emailVerifying, setEmailVerifying] = useState(false);

  // Basic email format validation
  const isValidEmailFormat = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate individual fields
  const validateField = (name: string, value: any): string => {
    switch (name) {
      case 'name':
        if (!value || value.trim().length < 2) {
          return 'Name must be at least 2 characters long';
        }
        break;
      case 'email':
        if (!value) {
          return 'Email is required';
        }
        if (!isValidEmailFormat(value)) {
          return 'Please enter a valid email format';
        }
        break;
      case 'interest':
        if (!value) {
          return 'Please select your area of interest';
        }
        break;
      case 'consent':
        if (!value) {
          return 'You must agree to the terms to continue';
        }
        break;
      case 'github':
        if (value && !value.startsWith('https://github.com/')) {
          return 'Please enter a valid GitHub URL';
        }
        break;
      default:
        break;
    }
    return '';
  };

  // Validate all required fields
  const validateForm = (): ValidationErrors => {
    const newErrors: ValidationErrors = {};
    
    // Check required fields
    const requiredFields = ['name', 'email', 'interest', 'consent'];
    requiredFields.forEach(field => {
      const error = validateField(field, formData[field as keyof FormData]);
      if (error) {
        newErrors[field] = error;
      }
    });

    // Validate optional fields if they have values
    if (formData.github) {
      const githubError = validateField('github', formData.github);
      if (githubError) {
        newErrors.github = githubError;
      }
    }

    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" && "checked" in e.target ? (e.target as HTMLInputElement).checked : undefined;
    
    const newValue = type === "checkbox" ? checked : value;
    
    setFormData((prev) => ({ ...prev, [name]: newValue }));
    setTouched((prev) => ({ ...prev, [name]: true }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Verify email with Hunter.io when email field loses focus
  const handleEmailBlur = async () => {
    if (!formData.email || !isValidEmailFormat(formData.email)) {
      return; // Don't verify if email format is invalid
    }

    setEmailVerifying(true);
    
    try {
      const verification = await verifyEmailHunter(formData.email);
      
      if (!verification.result) {
        setErrors(prev => ({
          ...prev,
          email: `Email verification failed: ${verification.reason || 'Invalid email'}`
        }));
      } else {
        // Clear email error if verification passed
        setErrors(prev => ({ ...prev, email: '' }));
      }
    } catch (error) {
      console.warn('Email verification service unavailable:', error);
      // Don't block form submission if verification service fails
      setErrors(prev => ({ ...prev, email: '' }));
    } finally {
      setEmailVerifying(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allFields = Object.keys(formData);
    setTouched(allFields.reduce((acc, field) => ({ ...acc, [field]: true }), {}));
    
    // Validate form
    const validationErrors = validateForm();
    
    // Check for bot field
    if (formData.botField) {
      validationErrors.botField = 'Bot detected';
    }
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    setErrors({});

    try {
      const response = await submitForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        interest: formData.interest,
        github: formData.github,
        consent: formData.consent ? "yes" : "no",
      });
      
      console.log("Formspree response:", response);
      setSuccess(true);
    } catch (err: any) {
      console.error("Submission error:", err);
      setErrors({ submit: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-gray-900 rounded-xl p-6 w-full max-w-md relative shadow-lg border border-gray-700 max-h-[90vh] overflow-y-auto">
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
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* HoneyPot Field */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="botField" className="sr-only">Leave this field empty</label>
              <input
                type="text"
                name="botField"
                id="botField"
                value={formData.botField}
                onChange={handleChange}
                autoComplete="off"
                tabIndex={-1}
              />
            </div>

            {/* Full Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1 text-left">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 py-2 bg-gray-800 text-gray-200 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                  errors.name ? "border-red-500" : "border-gray-600"
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1 text-left">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleEmailBlur}
                  className={`w-full px-3 py-2 bg-gray-800 text-gray-200 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                    errors.email ? "border-red-500" : "border-gray-600"
                  }`}
                />
                {emailVerifying && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>
              {errors.email && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1 text-left">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="+254 700 000 000"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-800 text-gray-200 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* GitHub Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1 text-left">GitHub Profile</label>
              <input
                type="url"
                name="github"
                placeholder="https://github.com/yourusername"
                value={formData.github}
                onChange={handleChange}
                className={`w-full px-3 py-2 bg-gray-800 text-gray-200 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                  errors.github ? "border-red-500" : "border-gray-600"
                }`}
              />
              {errors.github && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.github}
                </p>
              )}
            </div>

            {/* Primary Learning Interest Field */}
            <div>
              <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-1 text-left">
                Primary Learning Interest <span className="text-red-500">*</span>
              </label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className={`w-full px-3 py-2 bg-gray-800 text-gray-200 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                  errors.interest ? "border-red-500" : "border-gray-600"
                }`}
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
              {errors.interest && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.interest}
                </p>
              )}
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className={`w-5 h-5 text-blue-500 rounded focus:ring-blue-500 border-gray-600 bg-gray-800 ${
                  errors.consent ? 'border-red-500' : ''
                }`}
              />
              <label htmlFor="consent" className="text-sm text-gray-300 leading-relaxed">
                I agree to receive program updates and communications via email or other channels. <span className="text-red-500">*</span>
              </label>
            </div>
            {errors.consent && (
              <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.consent}
              </p>
            )}

            {/* Submit Error */}
            {errors.submit && (
              <div className="p-3 bg-red-900/50 border border-red-500 text-red-200 rounded-lg">
                <p className="text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  {errors.submit}
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={submitting || emailVerifying}
              className={`w-full px-4 py-2 rounded-lg font-semibold text-white transition-all ${
                submitting || emailVerifying
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
              }`}
            >
              {submitting ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Submitting...
                </span>
              ) : emailVerifying ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Verifying Email...
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