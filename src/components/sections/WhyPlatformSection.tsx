
import { motion } from "framer-motion"
import {
  Search,
  Clock,
  BookOpen,
  Target,
  PlayCircle,
  Award,
  Briefcase,
  CheckCircle,
  X,
  ArrowRight,
  Sparkles,
  Users,
  Code,
  Trophy,
} from "lucide-react"
import { useTheme } from "@/components/themeProvider";
import { problems, learningPath } from "@/data/whySkillKenyaData"





const successMetrics = [
  { label: "Structured Curriculum", icon: BookOpen },
  { label: "Hands-on Projects", icon: Code },
  { label: "Industry Certifications", icon: Trophy },
  { label: "Career Placement", icon: Users },
]

export default function WhySkillKenya() {

  const { theme } = useTheme();
  
  return (
    <section
      className={`py-10 px-6 ${
        theme === "dark" ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" : "bg-gradient-to-br from-slate-700 via-slate-500 to-slate-700"
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header - Left aligned */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Your Learning Journey</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              E-verse Academy?
            </span>
          </h2>

          <p className="text-xl text-gray-400 dark:text-gray-100 max-w-3xl mx-auto py-3">
            Stop wasting time on scattered tutorials and outdated content. Join thousands of students who've transformed
            their careers with our proven learning system.
          </p>
        </motion.div>

        {/* Main comparison */}
        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {/* Problems - Left aligned content */}
          <motion.div
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                <X className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-red-400">Learning Without Structure</h3>
            </div>

            <p className="text-slate-300 mb-6 text-left">
              Sound familiar? You're not alone. 87% of self-taught developers struggle with these exact challenges:
            </p>

            <div className="space-y-4">
              {problems.map((problem, idx) => {
                const Icon = problem.icon
                return (
                  <motion.div
                    key={problem.title}
                    className="p-4 bg-slate-700/30 rounded-xl"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start gap-3">
                      <Icon className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-200 mb-2">{problem.title}</h4>
                        <p className="text-slate-400 text-sm text-left leading-relaxed">{problem.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Solutions - Left aligned content */}
          <motion.div
            className="bg-gradient-to-br from-blue-900/30 to-emerald-900/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Learning With E-verse Academy
              </h3>
            </div>

            <p className="text-slate-200 mb-6 text-left">
              Be part of students who will successfully launch their tech careers with our structured approach:
            </p>

            <div className="space-y-4">
              {learningPath.map((solution, idx) => {
                const Icon = solution.icon
                return (
                  <motion.div
                    key={solution.title}
                    className="p-4 bg-white/5 rounded-xl border border-white/10"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-8 h-8 ${solution.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">{solution.title}</h4>
                        <p className="text-slate-300 text-sm text-left leading-relaxed">{solution.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Vertical Learning Path  */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          

          {/* Success metrics */}
          <div className="mt-8 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-2xl p-4 border border-blue-400/20">
            <div className="flex-1 items-center gap-2 mb-6">
              <ArrowRight className=" w-5 h-5 text-emerald-400" />
              <h4 className="text-xl  font-bold text-white">What You Get With Our Structured Approach</h4>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {successMetrics.map((metric, idx) => {
                const Icon = metric.icon
                return (
                  <div key={metric.label} className="flex flex-col items-center text-center p-4">
                    <div
                      className={`w-12 h-12 ${
                        idx === 0
                          ? "bg-purple-500"
                          : idx === 1
                            ? "bg-blue-500"
                            : idx === 2
                              ? "bg-emerald-500"
                              : "bg-orange-500"
                      } rounded-full flex items-center justify-center mb-3`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-medium text-slate-300">{metric.label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
