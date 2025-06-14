
import {
  BookOpen,
  Code,
  Database,
  Brain,
  Briefcase,
  Smartphone,
  Cloud,
  Shield,
  TrendingUp,
} from "lucide-react"

// Course data structure
interface Course {
  title: string
  description: string
  icon: React.ElementType
  category: string
  duration?: string
  level: "Beginner" | "Intermediate" | "Advanced"
  features: string[]
}

/// Free Courses Data
export const freeCourses: Course[] = [
  {
    title: "HTML & CSS Crash Course",
    description: "Master the fundamentals of web development with hands-on projects",
    icon: Code,
    category: "Web Development",
    duration: "4 hours",
    level: "Beginner",
    features: ["Responsive layouts", "CSS Grid & Flexbox", "Modern HTML5", "Project portfolio"],
  },
  {
    title: "Introduction to JavaScript",
    description: "Learn JavaScript basics and start building interactive websites",
    icon: Code,
    category: "Web Development",
    duration: "6 hours",
    level: "Beginner",
    features: ["ES6+ syntax", "DOM manipulation", "Event handling", "Mini projects"],
  },
  
  {
    title: "Git & GitHub Basics",
    description: "Version control essentials every web developer needs to know",
    icon: Code,
    category: "Web Development",
    duration: "3 hours",
    level: "Beginner",
    features: ["Git commands", "GitHub workflow", "Collaboration", "Best practices"],
  },
  {
    title: "Python for Web Development",
    description: "Learn Python fundamentals for backend web development",
    icon: Code,
    category: "Web Development",
    duration: "8 hours",
    level: "Beginner",
    features: ["Python basics", "Web frameworks intro", "API concepts", "Database basics"],
  },
]

// Premium Courses Data
export const premiumCourses: Course[] = [
  {
    title: "Full-Stack Web Developer Bootcamp",
    description: "Complete MERN stack development with real-world projects and deployment",
    icon: Code,
    category: "Web Development",
    duration: "120 hours",
    level: "Advanced",
    features: ["MERN Stack", "Authentication", "Payment integration", "AWS deployment"],
  },
  {
    title: "Advanced JavaScript + TypeScript Mastery",
    description: "Master modern JavaScript and TypeScript for professional web development",
    icon: Code,
    category: "Web Development",
    duration: "80 hours",
    level: "Advanced",
    features: ["Advanced patterns", "TypeScript", "Testing", "Performance optimization"],
  },
  {
    title: "Next.js with Tailwind & GraphQL",
    description: "Build modern web applications with the latest React ecosystem",
    icon: Code,
    category: "Web Development",
    duration: "60 hours",
    level: "Intermediate",
    features: ["Next.js 14", "Tailwind CSS", "GraphQL", "Server components"],
  },
  
  {
    title: "Vue.js Complete Developer Course",
    description: "Master Vue.js 3 with Composition API and build modern SPAs",
    icon: Code,
    category: "Web Development",
    duration: "70 hours",
    level: "Intermediate",
    features: ["Vue 3", "Composition API", "Vuex", "Vue Router"],
  },
  
]