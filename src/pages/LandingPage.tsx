import HeroLaunchSection from "@/components/sections/HeroLaunchSection"
import JoinBetaSection from "@/components/sections/JoinBetaSection"
import WhyPlatformSection from "@/components/sections/WhyPlatformSection"
import CoursesShowcaseSection from "@/components/sections/CoursesShowcaseSection"
import NewsletterForm from "@/components/layout/NewsletterForm"
import Footer from "@/components/layout/Footer"

export default function LandingPage() {
  return (
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
  )
}
