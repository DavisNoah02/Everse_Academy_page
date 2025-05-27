export interface Course {
  title: string;
  category: string;
  rating: number;
}

export const freeCourses: Course[] = [
  { title: "Introduction to Digital Marketing", category: "Beginner", rating: 4.8 },
  { title: "Basic Computer Skills", category: "Beginner", rating: 4.9 },
  { title: "Financial Literacy", category: "Beginner", rating: 4.7 },
  { title: "Communication Skills", category: "Intermediate", rating: 4.6 },
];

export const premiumCourses: Course[] = [
  { title: "Full-Stack Web Development", category: "Advanced", rating: 4.9 },
  { title: "Data Science with Python", category: "Intermediate", rating: 4.8 },
  { title: "Digital Marketing Mastery", category: "Advanced", rating: 4.7 },
  { title: "Project Management Professional", category: "Intermediate", rating: 4.8 },
];