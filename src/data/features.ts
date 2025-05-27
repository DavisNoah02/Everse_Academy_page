import { BookOpen, Users, Award, TrendingUp, Brain, Target, Lightbulb } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Fact {
  icon: LucideIcon;
  stat: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: BookOpen,
    title: "Diverse Courses",
    description: "From tech skills to business fundamentals, explore courses designed for the Kenyan market",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Learn from industry professionals and experienced educators who understand local needs",
  },
  {
    icon: Award,
    title: "Recognized Certifications",
    description: "Earn certificates that are valued by employers across Kenya and East Africa",
  },
];

export const facts: Fact[] = [
  {
    icon: TrendingUp,
    stat: "85%",
    title: "Skills Gap in Kenya",
    description: "85% of Kenyan employers report difficulty finding skilled workers in key industries",
  },
  {
    icon: Brain,
    stat: "3x",
    title: "Learning Retention",
    description: "Interactive online learning increases knowledge retention by 3x compared to traditional methods",
  },
  {
    icon: Target,
    stat: "67%",
    title: "Career Advancement",
    description: "67% of professionals who complete online courses report career advancement within 6 months",
  },
  {
    icon: Lightbulb,
    stat: "92%",
    title: "Student Satisfaction",
    description: "92% of our beta testers report high satisfaction with our learning methodology",
  },
];