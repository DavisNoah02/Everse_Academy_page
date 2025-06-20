import React, { lazy } from "react";
import FloatingModeToggle from "@/components/shared/FloatingModeToggle";
import HeroLaunchSection from "@/components/sections/HeroLaunchSection";
import JoinBetaSection from "@/components/sections/JoinBetaSection";
import WhyPlatformSection from "@/components/sections/WhyPlatformSection";
import CoursesShowcaseSection from "@/components/sections/CoursesShowcaseSection";
import FAQsSection from "@/components/sections/FAQs_Section";
import Footer from "@/components/layout/Footer";
import NotFound from "@/pages/NotFoundPage";
// import Navbar from "@/components/layout/Navbar.tsx";



const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPage"));
const Terms = lazy(() => import("@/pages/TermsPage"));
const Cookies = lazy(() => import("@/pages/CookiesPage"));
const AboutUs = lazy(() => import("@/pages/AboutUsPage"));
const ContactUs = lazy(() => import("@/pages/ContactUsPage"));

const routes = [
  {
    path: "/",
    element: (
      <>
        <FloatingModeToggle />
        <HeroLaunchSection />
        <JoinBetaSection />
        <WhyPlatformSection />
        <CoursesShowcaseSection />
        <FAQsSection />
        <Footer />
      </>
    ),
  },
  { path: "/PrivacyPolicy", element: <PrivacyPolicy /> },
  { path: "/TermsOfService", element: <Terms /> },
  { path: "/CookiesPolicy", element: <Cookies /> },
  { path: "/AboutUs", element: <AboutUs /> },
  { path: "/ContactUs", element: <ContactUs /> },
  { path: "*", element: <NotFound /> },
];

export default routes;