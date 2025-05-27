import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Target } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";
import { betaBenefits, betaSteps } from "../../data/betaSteps";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function JoinBetaSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Join Our Beta Program"
          subtitle="Be among the first to experience the future of learning in Kenya and help shape our platform"
        />

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Benefits Column */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Card className="h-full p-8 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-purple-200 dark:border-purple-800">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl text-gray-900 dark:text-white flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                    Beta Program Benefits
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Exclusive perks for our early adopters
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {betaBenefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3 p-3 rounded-lg bg-white/50 dark:bg-gray-800/50"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Steps Column */}
            <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
              <Card className="h-full p-8 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 border-green-200 dark:border-green-800">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl text-gray-900 dark:text-white flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                      <Target className="w-4 h-4 text-white" />
                    </div>
                    How to Apply
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Simple steps to join our beta program
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {betaSteps.map((step, index) => (
                      <motion.div
                        key={index}
                        className="flex gap-4 p-3 rounded-lg bg-white/50 dark:bg-gray-800/50"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 pt-1">{step}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-purple-600 to-blue-600 border-0 text-white">
              <CardContent className="space-y-4">
                <h3 className="text-2xl font-bold">Ready to Get Started?</h3>
                <p className="text-purple-100">
                  Join thousands of learners who are already preparing for the future of work in Kenya
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                    Apply for Beta Access
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}