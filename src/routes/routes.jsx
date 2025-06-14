import React, { lazy } from "react";
import FloatingModeToggle from "@/components/shared/FloatingModeToggle";
import HeroLaunchSection from "@/components/sections/HeroLaunchSection";
import JoinBetaSection from "@/components/sections/JoinBetaSection";
import WhyPlatformSection from "@/components/sections/WhyPlatformSection";
import CoursesShowcaseSection from "@/components/sections/CoursesShowcaseSection";
import FAQsSection from "@/components/sections/FAQs_Section";
import Footer from "@/components/layout/Footer";


const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPage"));
const Terms = lazy(() => import("@/pages/TermsPage"));
const Cookies = lazy(() => import("@/pages/CookiesPage"));
const AboutUs = lazy(() => import("@/pages/AboutUsPage"));

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
  { path: "/Terms", element: <Terms /> },
  { path: "/Cookies", element: <Cookies /> },
  { path: "/AboutUs", element: <AboutUs /> },
];

export default routes;