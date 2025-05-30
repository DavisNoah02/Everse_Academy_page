import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Mail, ArrowRight } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  interface NewsletterFormState {
    email: string;
    isSubmitting: boolean;
    isSubmitted: boolean;
    isEmailValid: boolean;
    isFocused: boolean;
  }
  interface EmailChangeEvent {
    target: { value: string };
  }

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsEmailValid(validateEmail(value));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isEmailValid) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
      setIsEmailValid(false);
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="text-center p-8 bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl max-w-md mx-auto"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <Check className="w-8 h-8 text-white" />
        </motion.div>
        
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl font-semibold text-white mb-2"
        >
          You're all set!
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-slate-300"
        >
          Check your inbox for a confirmation email.
        </motion.p>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit} className="relative">
        <motion.div 
          className={`relative flex items-center bg-slate-800 border-2 rounded-2xl transition-all duration-300 ${
            isFocused 
              ? 'border-slate-600 shadow-xl shadow-slate-900/20' 
              : 'border-slate-700 hover:border-slate-600'
          }`}
          whileTap={{ scale: 0.98 }}
        >
          {/* Email Icon */}
          <div className="pl-4">
            <Mail className={`w-5 h-5 transition-colors duration-200 ${
              isFocused || email ? 'text-white' : 'text-slate-400'
            }`} />
          </div>

          {/* Input Field */}
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={handleEmailChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            required
            className="flex-1 border-none bg-transparent px-4 py-4 text-white placeholder-slate-400 
                     focus:outline-none focus:ring-0 focus:border-transparent"
          />

          {/* Submit Button */}
          <motion.div
            className="pr-2"
            whileHover={isEmailValid ? { scale: 1.02 } : {}}
            whileTap={isEmailValid ? { scale: 0.98 } : {}}
          >
            <Button
              type="submit"
              disabled={!isEmailValid || isSubmitting}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                isEmailValid && !isSubmitting
                  ? 'bg-white hover:bg-slate-100 text-slate-900 shadow-md hover:shadow-lg'
                  : 'bg-slate-700 text-slate-500 cursor-not-allowed'
              }`}
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-slate-500 border-t-white rounded-full"
                />
              ) : (
                <div className="flex items-center gap-2">
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </Button>
          </motion.div>
        </motion.div>

        {/* Email Validation Indicator */}
        <motion.div 
          className="mt-3 flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: email ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className={`w-2 h-2 rounded-full transition-colors duration-200 ${
            isEmailValid ? 'bg-white' : 'bg-slate-500'
          }`} />
          <span className={`text-sm transition-colors duration-200 ${
            isEmailValid ? 'text-white' : 'text-slate-400'
          }`}>
            {isEmailValid ? 'Valid email address' : 'Please enter a valid email'}
          </span>
        </motion.div>
      </form>

      {/* Privacy Notice */}
      <motion.p 
        className="text-center text-sm text-slate-400 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        We respect your privacy. Unsubscribe at any time.
      </motion.p>
    </motion.div>
  );
}