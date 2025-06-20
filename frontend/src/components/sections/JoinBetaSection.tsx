import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/themeProvider";
import { Rocket, Check, Star, Target, Users, Gift, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { betaSteps, betaBenefits } from "@/data/betaSteps";
import BetaAccessModal from "@/components/shared/BetaAccessModal";

export default function JoinBetaSection() {
  const { theme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <section
      className={`py-12 px-6 ${
        theme === "dark" ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" : "bg-gradient-to-br from-slate-700 via-slate-500 to-slate-700"
      }`}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-purple-200 dark:bg-purple-00/30 rounded-full px-4 py-2 mb-4">
            <Star className="w-6 h-6 text-purple-700" />
            <span className="text-purple-600 text-sm font-medium">Limited Beta Access</span>
          </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-5">
            <Rocket className="w-8 h-10 py-1 text-purple-600" />
            Join Our <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Beta Program</span>
            </h2>
          <p className="text-xl text-gray-400 dark:text-gray-100 max-w-3xl mx-auto py-3">
            Be among the first 100 learners to experience Kenya's most innovative tech academy
          </p>
        </motion.div>

       {/* Main Content Grid */}
<div className="grid lg:grid-cols-2 gap-6 mb-12">
  {/* Benefits Card */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="bg-gray-400 dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 h-full">
      <div className="flex items-center space-x-3 mb-5">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <Gift className="w-4 h-4 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Beta Benefits</h3>
      </div>
      
      <div className="space-y-3">
        {betaBenefits.map((benefit, index) => (
          <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
            <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <span className="text-gray-700 dark:text-gray-300 text-sm">{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  </motion.div>

  {/* Steps Card */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    viewport={{ once: true }}
  >
    <div className="bg-gray-400 dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 h-full">
      <div className="flex items-center space-x-3 mb-5">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
          <Target className="w-4 h-4 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Getting Started</h3>
      </div>
      
      <div className="space-y-3">
        {betaSteps.map((step, index) => (
          <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
            <div className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0">
              {index + 1}
            </div>
            <span className="text-gray-700 dark:text-gray-300 text-sm">{step}</span>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
</div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          style={{ overflow: "visible" }}
        >
          <div className="relative max-w-4xl mx-auto bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl p-8 shadow-lg">
            {/* Join Other Beta Applicants */}
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Users className="w-6 h-6 text-purple-200" />
              <span className="text-purple-200">Join Other beta applicants</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-sm text-gray-300 mb-6">
              Join  other learners who are already preparing for the future of work in Kenya.
              Apply now and become part of Kenya's tech revolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Apply for Beta Access Button */}
              <motion.button
                className="relative z-40 bg-white text-gray-800 px-6 py-3 rounded-full font-medium text-sm shadow-md hover:shadow-lg transition-all hover:cursor-pointer bg-gradient-to-r from-blue-500 to-emerald-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
              >
                Apply for Beta Access
              </motion.button>

              {/* Learn More Button */}
              <motion.button
                className="relative z-40  bg-gray-800 text-white px-6 py-3 rounded-full font-medium text-sm shadow-md hover:bg-gray-700 hover:cursor-pointer transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/AboutUs")}
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Modal */}
      <BetaAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}