import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroLaunchSection from "@/components/sections/HeroLaunchSection";
import JoinBetaSection from "@/components/sections/JoinBetaSection";
import WhyPlatformSection from "@/components/sections/WhyPlatformSection";
import CoursesShowcaseSection from "@/components/sections/CoursesShowcaseSection";
import NewsletterForm from "@/components/layout/NewsletterForm";
import Footer from "@/components/layout/Footer";
// import AboutPage from "@/pages/AboutPage";
// import CoursesPage from "@/pages/CoursesPage";
// import InstructorsPage from "@/pages/InstructorsPage";
// import TestimonialsPage from "@/pages/TestimonialsPage";
// import CareersPage from "@/pages/CareersPage";
// import BlogPage from "@/pages/BlogPage";
// import HelpPage from "@/pages/HelpPage";
// import SupportPage from "@/pages/SupportPage";
// import ContactPage from "@/pages/ContactPage";
import PrivacyPage from "@/pages/PrivacyPage";
import TermsPage from "@/pages/TermsPage";
import CookiesPage from "@/pages/CookiesPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <HeroLaunchSection />
              <JoinBetaSection />
              <WhyPlatformSection />
              <CoursesShowcaseSection />
              <section className="py-20 bg-purple-600">
                <NewsletterForm />
              </section>
              <Footer />
            </>
          }
        />
        {/* About Page Route */}
        {/* <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/instructors" element={<InstructorsPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/contact" element={<ContactPage />} /> */}
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/cookies" element={<CookiesPage />} />
      </Routes>
    </Router>
  );
}

export default App;