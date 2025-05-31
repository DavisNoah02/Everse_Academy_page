import React, { lazy } from "react";
// import Wavify from "react-wavify";
import HeroLaunchSection from "@/components/sections/HeroLaunchSection";
import JoinBetaSection from "@/components/sections/JoinBetaSection";
import NewsletterSection from "@/components/layout/NewsLetter";
import WhyPlatformSection from "@/components/sections/WhyPlatformSection";
import CoursesShowcaseSection from "@/components/sections/CoursesShowcaseSection";
import FAQsSection from "@/components/sections/FAQs_Section";
import Footer from "@/components/layout/Footer";

const PrivacyPage = lazy(() => import("@/pages/PrivacyPage"));
const TermsPage = lazy(() => import("@/pages/TermsPage"));
const CookiesPage = lazy(() => import("@/pages/CookiesPage"));

const routes = [
  {
    path: "/",
    element: (
      <>
        
        <HeroLaunchSection />
        <JoinBetaSection />
        <WhyPlatformSection />
        <CoursesShowcaseSection />
        <FAQsSection />
         <NewsletterSection />
         
        <Footer />
      </>
    ),
  },
  { path: "/privacy", element: <PrivacyPage /> },
  { path: "/terms", element: <TermsPage /> },
  { path: "/cookies", element: <CookiesPage /> },
];

export default routes;